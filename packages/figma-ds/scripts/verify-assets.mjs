import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const base=new URL('../',import.meta.url);
const icons=JSON.parse(readFileSync(new URL('evidence/source-icons.json',base),'utf8'));
const logos=JSON.parse(readFileSync(new URL('evidence/source-logos.json',base),'utf8'));
const artwork=JSON.parse(readFileSync(new URL('evidence/source-artwork.json',base),'utf8'));
assert.equal(icons.assets.length,359);
for(const item of [...icons.assets.map(a=>({...a,file:'src/assets/icons/'+a.file})),...logos.assets.map(a=>({...a,file:'src/assets/logos/'+a.file})),...artwork.assets]){
 const bytes=readFileSync(new URL(item.file,base));assert.equal(createHash('sha256').update(bytes).digest('hex'),item.sha256,'Edited source SVG '+item.file);
 const dist=new URL(item.file.replace(/^src\//,'dist/'),base);assert(existsSync(dist),'Missing distributed originalasset '+item.file);assert.deepEqual(readFileSync(dist),bytes,'Distassetdiffers '+item.file);
 assert(item.nodeId||item.sourceNodeId,'No source-node identity '+item.file);
 const header=bytes.toString('utf8').match(/<svg[^>]*>/)?.[0];assert(header,'Empty/invalid SVG '+item.file);
}
console.log('Verified359originalicons,7originallogosand'+artwork.assets.length+'componentartworks: source IDs, byte hashes and identical built files. Browser callsite geometry/visual review remains separate.');
