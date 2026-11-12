import ts from 'typescript';
import {format} from 'prettier';
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd(),version=JSON.parse(fs.readFileSync('package.json')).version;
const config=ts.readConfigFile('tsconfig.figma.json',ts.sys.readFile),parsed=ts.parseJsonConfigFileContent(config.config,ts.sys,root),program=ts.createProgram(parsed.fileNames,parsed.options),checker=program.getTypeChecker();
const index=program.getSourceFile(path.join(root,'packages/figma-ds/src/index.ts'));
const examplePath='apps/figma-storybook/developer/examples.tsx',exampleText=fs.readFileSync(examplePath,'utf8'),exampleAst=ts.createSourceFile(examplePath,exampleText,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
const examples=new Map(exampleAst.statements.filter(ts.isFunctionDeclaration).map(n=>[n.name.text.replace(/Example$/,''),n.getText(exampleAst)]));
const specific={
 Button:['Original Figma guide','Use for Filled/Outlined/Text source designs. Use Local.Button for Desktop/Mobile Primary/Secondary source designs.','245:35815'],
 'Local.Button':['Original Figma local set','Use when the design specifies Desktop/Mobile and Primary/Secondary/Link. Do not translate these names to guide variants.','393:72921'],
 FormField:['Original Figma','Floating label and source border artwork. Use Label, errorText and native input props. Omit State for normal interaction.','827:82201'],
 Dropdown:['Original Figma','Default Dropdown branch. Its hidden floating captions stay hidden. Use FormDropdown when the design has a floating caption.','1715:79529'],
 FormDropdown:['Original Figma','Form Dropdown with floating caption. Omit State and Visible for normal selection; use value/onChange.','840:82414'],
 Header:['Source composition helper','An editable helper, not an exact reconstruction of the source raster header. Prefer CommerceHeader for editable prototype navigation.'],
 LiveCommerceHeader:['Live-site extension','Based on the 5 November 2026 website capture. It is distinct from the original Figma Header and currently has a fixed dark appearance.'],
 CardSkeleton:['Original Figma','Fixed dark source artwork and geometry. No light or animated source variant is claimed.','171:18917'],
 PrototypeField:['Prototype extension','Use for the approved prototype form patterns. This is separate from the source floating-label FormField.'],
 PrototypeButton:['Prototype extension','Use with shared prototype composition patterns: primary, secondary and quiet actions, plus loading.'],
 CromaProvider:['Application setup','Wrap the complete app once. Default applyDocument=true styles html/body and fills the viewport. Set false for embedded regions. Explicit component Theme props override inherited theme. Fixed-source components retain their authored presentation.'],
 PrototypeTheme:['Prototype extension','An embedded theme region. Prefer CromaProvider for the complete application document.'],
 SourceOption:['Original Figma primitive','Low-level option row; use SourceList or Dropdown for a complete selection interaction.'],
 SearchCombobox:['Prototype extension','Controlled query and exact variant selection. Clear selected identity when query or filters change. Requests, caching and business rules belong to the consumer.'],
 LocalAccordion:['Original Figma local set','Background uses authored Light/Dark values. It is an explicit source property, separate from inherited Theme.','463:83388'],
 ColourAccordion:['Original Figma local set','Uses original artwork and source radial fills; preserve its authored presentation.','468:82805'],
 Chat:['Original Figma','Messages, service responses and account data come from the app; this source conversation has its own fixed visual presentation.','245:52312'],
 DeviceFrame:['Original source helper','Editable content inside source device artwork. This is a presentation/testing helper, not a responsive application container.'],
 DeviceViewport:['Original source helper','Fixed source viewport with editable content; use LayoutGrid for application layout.'],
 StickyFooterLayout:['Layout helper','Reserves measured footer space to prevent content being obscured.'],
 Icon:['Original Figma artwork','Select nodeId from sourceIcons. Use decorative for icons inside a named control; otherwise supply label. Original multicolour artwork is not automatically recoloured.'],
 Logo:['Original Figma artwork','Select nodeId from sourceLogos. Choose artwork appropriate to the surface and supply a label unless decorative.'],
 Illustration:['Original Figma artwork','Select nodeId from sourceIllustrations and provide a meaningful label unless decorative.']
};
const extensions=new Set(['ActionGroup','CompositionDialog','CommerceHeader','Breadcrumb','FormSection','HelpDisclosure','InlineFieldAction','InlineNotification','LoadingIndicator','PlainSection','ResponsiveStepper','SearchCombobox','SelectablePurchaseCard','SelectablePurchaseGroup','SelectionPillGroup','SurfaceCard']);
const publicTypes=new Map();
for(let symbol of checker.getExportsOfModule(checker.getSymbolAtLocation(index))){if(symbol.flags&ts.SymbolFlags.Alias)symbol=checker.getAliasedSymbol(symbol);const d=symbol.declarations?.find(node=>ts.isInterfaceDeclaration(node)||ts.isTypeAliasDeclaration(node));if(d&&d.getText().length<10000)publicTypes.set(symbol.name,d.getText());}
const records=[];
function add(name,symbol){if(symbol.flags&ts.SymbolFlags.Alias)symbol=checker.getAliasedSymbol(symbol);const decl=symbol.valueDeclaration??symbol.declarations?.[0];if(!decl)return;const signature=checker.getTypeOfSymbolAtLocation(symbol,decl).getCallSignatures()[0];if(!signature?.parameters.length)return;
 const short=name==='Local.Button'?'LocalButton':name,example=examples.get(short);if(!example)throw Error('Missing public React example: '+name);
 const type=checker.getTypeOfSymbolAtLocation(signature.parameters[0],decl),file=decl.getSourceFile(),defaults={};
 function defaultsIn(node){if(ts.isBindingElement(node)&&node.initializer)defaults[node.name.getText(file)]=node.initializer.getText(file);ts.forEachChild(node,defaultsIn);}defaultsIn(decl);
 const variants=type.isUnion()?type.types:[type],props=new Map();
 for(const branch of variants)for(const prop of branch.getProperties()){if(prop.name.startsWith('_')||['key','ref'].includes(prop.name))continue;const declarations=prop.declarations??[],own=declarations.some(d=>d.getSourceFile().fileName.includes('packages/figma-ds/src'));
 if(!own&&!['id','name','value','defaultValue','checked','defaultChecked','disabled','required','readOnly','type','placeholder','inputMode','maxLength','onChange','onBlur','onFocus','onClick','className','style','children','aria-label','aria-describedby'].includes(prop.name))continue;
 let text=checker.typeToString(checker.getTypeOfSymbolAtLocation(prop,decl),decl,ts.TypeFormatFlags.NoTruncation);text=text.replace(/import\("[^"]*node_modules\/@types\/react\/index"\)\./g,'React.').replace(/import\("[^"]*node_modules\/csstype\/index"\)\./g,'import("csstype").');if(text.includes(root))throw Error('Nonportable type location: '+name+'.'+prop.name);if(text.length>500)text=prop.name==='nodeId'?'Source node ID — see the exported artwork collection':text.slice(0,480)+' … (see TypeScript declarations)';
 const row={name:prop.name,type:text,required:!(prop.flags&ts.SymbolFlags.Optional),default:defaults[prop.name]??null,description:ts.displayPartsToString(prop.getDocumentationComment(checker)),native:!own};
 const old=props.get(prop.name);if(old){row.required=old.required&&row.required;if(old.type!==text)row.type=old.type+' | '+text;}props.set(prop.name,row);}
 const source=path.relative(root,file.fileName).replaceAll('\\','/'),info=specific[name]??[extensions.has(name)?'Prototype extension':'Original Figma / source helper','Use the public props below. Application data, validation timing and callbacks remain consumer responsibilities.'];
 const node=info[2],snippet="import {useState} from 'react';\nimport * as DS from '@croma/figma-ds';\n\n"+example.replace(`export function ${short}Example`,`export default function Example`);
 records.push({name,example:short+'Example',origin:info[0],usage:info[1],source,sourceUrl:`https://github.com/hrithikbdc/Croma-Existing-DS/blob/v${version}/${source}`,figmaUrl:'https://www.figma.com/design/2WzKPv4y8rw4zJ94LmI3yS/Croma-DS'+(node?'?node-id='+node.replace(':','-'):''),sourceNode:node??null,props:[...props.values()].sort((a,b)=>Number(a.native)-Number(b.native)||Number(b.required)-Number(a.required)||a.name.localeCompare(b.name)),snippet});
}
for(const symbol of checker.getExportsOfModule(checker.getSymbolAtLocation(index))){if(symbol.name==='Local'){const actual=symbol.flags&ts.SymbolFlags.Alias?checker.getAliasedSymbol(symbol):symbol;for(const child of checker.getExportsOfModule(actual))add('Local.'+child.name,child);}else add(symbol.name,symbol);}
records.sort((a,b)=>a.name.localeCompare(b.name));
for(const entry of records){entry.snippet=await format(entry.snippet,{parser:'typescript',singleQuote:true,printWidth:90});const used=entry.props.map(prop=>prop.type).join(' ');entry.relatedTypes=[...publicTypes].filter(([name])=>new RegExp('\\b'+name+'\\b').test(used)).map(([name,declaration])=>({name,declaration}));}
const out='apps/figma-storybook/developer/generated';fs.mkdirSync(out,{recursive:true});fs.writeFileSync(out+'/api.json',JSON.stringify({version,components:records},null,2)+'\n');
const docs='apps/figma-storybook/stories/react-api';fs.mkdirSync(docs,{recursive:true});
for(const entry of records)fs.writeFileSync(`${docs}/${entry.name.replace('.','-')}.mdx`,`import { Meta } from '@storybook/addon-docs/blocks';\nimport { ComponentReference } from '../../developer/ComponentReference';\n\n<Meta title="React API/${entry.name}" />\n\n<ComponentReference name="${entry.name}" />\n`);
console.log(`Generated ${records.length} public component API pages from TypeScript and checked-in React examples.`);
