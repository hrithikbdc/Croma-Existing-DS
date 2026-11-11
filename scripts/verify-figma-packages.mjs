import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {tmpdir} from 'node:os';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
for (const name of ['@croma/figma-foundations', '@croma/figma-ds']) {
  const result = JSON.parse(execFileSync('npm', [
    '--cache', process.env.npm_config_cache || path.join(tmpdir(), 'croma-npm-cache'), 'pack', '--dry-run', '--json', '-w', name
  ], {cwd: root, encoding: 'utf8'}));
  assert.equal(result.length, 1);
  const entries = result[0].files.map(file => file.path);
  assert(entries.length > 0);
  for (const path of entries) {
    assert(!/(?:local-fig-source|document-nodes|node_modules|\.fig$|archive-provenance|source\/styles\.json)/i.test(path), `Private source leaked into ${name}: ${path}`);
  }
  if (name.endsWith('foundations')) {
    assert.deepEqual(entries.toSorted(), ['README.md', 'index.ts', 'package.json', 'tokens.css', 'tokens.json', 'typography.css', 'fonts.css', 'fonts/Switzer-Variable.ttf', 'fonts/NOTICE.txt'].toSorted());
  } else {
    for (const path of ['dist/index.js', 'dist/index.d.ts', 'dist/styles.css', 'evidence/written-values.json']) {
      assert(entries.includes(path), `${name} missing ${path}`);
    }
  }
  console.log(`PASS: ${name} package boundary (${entries.length} files, ${result[0].unpackedSize} bytes).`);
}
