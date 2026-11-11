import {execFileSync} from 'node:child_process';
import {readFileSync, writeFileSync, mkdirSync, readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const pkg = JSON.parse(readFileSync(path.join(root, 'package.json')));
const version = pkg.version;
if (!/^\d+\.\d+\.\d+$/.test(version)) throw new Error('Expected a stable semantic version');
const run = (command, args) => execFileSync(command, args, {cwd: root, encoding: 'utf8'});
const commit = run('git', ['rev-parse', 'HEAD']).trim();
if (run('git', ['status', '--porcelain', '--untracked-files=no']).trim()) {
  throw new Error('Release packaging requires a clean tracked source tree');
}
const out = path.join(root, 'releases', version);
mkdirSync(out, {recursive: true});
for (const name of ['figma-foundations', 'figma-ds']) {
  const component = JSON.parse(readFileSync(path.join(root, 'packages', name, 'package.json')));
  if (component.version !== version) throw new Error(`${name} version differs from the root version`);
  run('npm', ['pack', '-w', component.name, '--pack-destination', out, '--silent']);
}
run('git', ['archive', '--format=zip', `--prefix=croma-figma-ds-${version}/`,
  `--output=${path.join(out, `croma-figma-ds-source-${version}.zip`)}`, commit]);
// Python is available on the supported GitHub Ubuntu runner; it keeps zip output portable.
run('python3', ['-c', `import pathlib,sys,zipfile
base=pathlib.Path(sys.argv[1])
with zipfile.ZipFile(sys.argv[2],'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(base.rglob('*')):
  if p.is_file(): z.write(p,p.relative_to(base).as_posix())
`, path.join(root, 'apps/figma-storybook/dist'), path.join(out, `croma-figma-storybook-${version}.zip`)]);
for (const file of ['CHANGELOG.md', 'RELEASE-NOTES.md']) {
  writeFileSync(path.join(out, file), readFileSync(path.join(root, file)));
}
const artifacts = readdirSync(out).filter(n => !['manifest.json', 'SHA256SUMS.txt'].includes(n)).sort().map(file => {
  const bytes = readFileSync(path.join(out, file));
  return {file, bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex')};
});
writeFileSync(path.join(out, 'manifest.json'), JSON.stringify({
  name: 'Croma Figma DS', version, commit, artifacts,
  source: 'https://github.com/hrithikbdc/Croma-Existing-DS',
  fullSystem100PercentAcceptance: false,
  acceptanceNote: 'Build and regression checks do not establish whole-system visual acceptance.'
}, null, 2) + '\n');
writeFileSync(path.join(out, 'SHA256SUMS.txt'), [...artifacts, {
  file: 'manifest.json', sha256: createHash('sha256').update(readFileSync(path.join(out, 'manifest.json'))).digest('hex')
}].map(a => `${a.sha256}  ${a.file}\n`).join(''));
console.log(`Packaged ${version} from ${commit} at ${out}`);
