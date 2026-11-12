import fs from 'node:fs';
const file='packages/figma-foundations/color-tokens.json';
const registry=JSON.parse(fs.readFileSync(file,'utf8'));
const marker='/* Generated shared colour tokens; edit color-tokens.json, then npm run build:tokens. */';
const base='packages/figma-foundations/tokens.css';
let css=fs.readFileSync(base,'utf8').split(marker)[0].trimEnd()+'\n\n'+marker+'\n:root {\n';
for(const[key,entry]of Object.entries(registry.colors))css+=`  --croma-literal-${key}: ${entry.value};\n`;
for(const[theme,roles]of Object.entries(registry.themes))for(const[role,key]of Object.entries(roles)){
 if(!registry.colors[key])throw Error(`Missing colour ${theme}.${role}`);
 css+=`  --croma-${theme}-${role}: var(--croma-literal-${key});\n`;
}
fs.writeFileSync(base,css+'}\n');
console.log(`Built ${Object.keys(registry.colors).length} exact colour values and dark/light semantic roles.`);
