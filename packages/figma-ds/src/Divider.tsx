import type {HTMLAttributes} from 'react';
export interface DividerLineProps extends HTMLAttributes<HTMLHRElement> {Variant?:'1'|'2'|'3';text?:string;Theme?:'dark'|'light';Size?:'1px'|'4px';Type?:'w/o text'|'w/ text'}
const ids={dark:{plain1:'153:12635',plain4:'153:12636',text:'153:12640'},light:{plain1:'153:12645',plain4:'153:12646',text:'153:12650'}} as const;
export function DividerLine({Variant,text,Theme='dark',Size,Type,className='',...props}:DividerLineProps){
 const withText=Type?Type==='w/ text':text!==undefined||Variant==='3';const size=Size??(Variant==='2'?'4px':'1px');
 if(withText&&size==='4px')throw new Error('The Figma Divider with text is authored at1px only.');
 const variant=withText?'3':size==='4px'?'2':'1';const source=ids[Theme][withText?'text':size==='4px'?'plain4':'plain1'];
 if(withText)return <div {...props} role="separator" aria-label={props['aria-label']??text??'Divider text'} className={'croma-source-divider '+className} data-croma-component="Divider" data-source-family="divider-153" data-theme={Theme} data-size={size} data-type="w/ text" data-variant={variant} data-with-text="true" data-source-id={source}><hr aria-hidden="true"/><span>{text??'Divider text'}</span><hr aria-hidden="true"/></div>;
 return <hr {...props} className={'croma-source-divider '+className} data-croma-component="Divider" data-source-family="divider-153" data-theme={Theme} data-size={size} data-type="w/o text" data-variant={variant} data-source-id={source}/>;
}
