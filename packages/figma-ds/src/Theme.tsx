import {createContext,useContext,useEffect,type ReactNode,type CSSProperties} from 'react';
export type CromaTheme = 'dark'|'light';
export const CromaThemeContext = createContext<CromaTheme|undefined>(undefined);
/** Explicit source variants take priority over the surrounding application theme. */
export function useCromaTheme(explicit?:CromaTheme,fallback:CromaTheme='dark'){const inherited=useContext(CromaThemeContext);return explicit??inherited??fallback;}
export interface CromaProviderProps {children:ReactNode;theme?:CromaTheme;/** False for embedded regions and Storybook examples. */ applyDocument?:boolean;/** Inherit Theme without adding prototype surface styles; useful for source previews. */ unstyled?:boolean;className?:string;style?:CSSProperties}
/** Application setup; source-specific geometry and artwork remain unchanged. */
export function CromaProvider({children,theme='dark',applyDocument=true,unstyled=false,className='',style}:CromaProviderProps){
 useEffect(()=>{
  if(!applyDocument)return;
  const nodes=[document.documentElement,document.body];
  const previous=nodes.map(node=>({node,background:node.style.backgroundColor,color:node.style.color,margin:node.style.margin,colorScheme:node.style.colorScheme}));
  const root=getComputedStyle(document.documentElement),role=(name:string,fallback:string)=>root.getPropertyValue(`--croma-${theme}-${name}`).trim()||fallback;
  for(const node of nodes){node.style.backgroundColor=role('page',theme==='dark'?'#191919':'#f9f9f9');node.style.color=role('text',theme==='dark'?'#fff':'#191919');node.style.colorScheme=theme;}
  document.body.style.margin='0';
  return()=>{for(const p of previous){p.node.style.backgroundColor=p.background;p.node.style.color=p.color;p.node.style.margin=p.margin;p.node.style.colorScheme=p.colorScheme;}};
 },[theme,applyDocument]);
 return <CromaThemeContext.Provider value={theme}><div className={`${unstyled?'':'cx-theme '}croma-provider ${className}`} data-theme={theme} style={{minHeight:applyDocument?'100dvh':undefined,...style}}>{children}</div></CromaThemeContext.Provider>;
}
