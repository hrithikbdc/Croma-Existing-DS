import type {HTMLAttributes, ReactNode} from 'react';

/** Written page 8:528. Margins are outside the column content; the 1320px cap applies to that content. */
export function LayoutGrid({children,mode='auto',className='',...props}:HTMLAttributes<HTMLDivElement>&{children:ReactNode;mode?:'auto'|'Mobile'|'Desktop'}){
 return <div {...props} className={`croma-layout-grid ${className}`} data-croma-layout={mode} data-croma-source-node={mode==='Mobile'?'8:674':mode==='Desktop'?'8:694':'8:674 8:694'}><div className="croma-layout-grid__columns">{children}</div></div>;
}
