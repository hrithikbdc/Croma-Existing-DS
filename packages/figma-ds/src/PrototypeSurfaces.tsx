import {useId,type ReactNode,type HTMLAttributes,type DetailsHTMLAttributes} from 'react';

/** User-approved composition rules; separate from authored Figma Card/Accordion variants. */
export interface PlainSectionProps extends Omit<HTMLAttributes<HTMLElement>,'title'> {
 title?:string; children:ReactNode;
}
export function PlainSection({title,children,className='',...props}:PlainSectionProps){
 const id=useId();return <section {...props} className={'cx-plain-section '+className} aria-labelledby={props['aria-labelledby']??(title?id:undefined)}>{title&&<h3 id={id}>{title}</h3>}{children}</section>;
}
export interface SurfaceCardProps extends Omit<HTMLAttributes<HTMLDivElement>,'title'> {
 title?:ReactNode; headingLevel?:2|3|4; status?:ReactNode; supporting?:ReactNode; actions?:ReactNode; children?:ReactNode;
}
export function SurfaceCard({title,headingLevel=3,status,supporting,actions,children,className='',...props}:SurfaceCardProps){
 const id=useId(),Heading=`h${headingLevel}` as 'h2'|'h3'|'h4';return <div {...props} className={'cx-surface-card '+className} data-design-origin="prototype-extension" aria-labelledby={props['aria-labelledby']??(title?id:undefined)}>{status&&<div className="cx-surface-card__status">{status}</div>}{title&&<Heading id={id} className="cx-surface-card__title">{title}</Heading>}{children&&<div className="cx-surface-card__body">{children}</div>}{supporting&&<div className="cx-surface-card__supporting">{supporting}</div>}{actions&&<div className="cx-surface-card__actions"><div className="cx-actions" data-align="start">{actions}</div></div>}</div>;
}
export interface HelpDisclosureProps extends Omit<DetailsHTMLAttributes<HTMLDetailsElement>,'title'> {title:string;children:ReactNode}
export function HelpDisclosure({title,children,className='',...props}:HelpDisclosureProps){return <details {...props} className={'cx-help-disclosure '+className} data-design-origin="prototype-extension"><summary>{title}<span aria-hidden="true" className="cx-help-disclosure__indicator"/></summary><div className="cx-help-disclosure__body">{children}</div></details>;}
