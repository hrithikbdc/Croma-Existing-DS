import {useRef,type ReactNode} from 'react';
import {PopUp,type PopUpProps} from './Behaviours.js';
import {Menu,type MenuSection,type QuickLink} from './Compound.js';
const sourceIcons={profile:new URL('./assets/navigation-drawer/247-51244.svg',import.meta.url).href,address:new URL('./assets/navigation-drawer/247-51253.svg',import.meta.url).href,orders:new URL('./assets/navigation-drawer/247-51262.svg',import.meta.url).href,saving:new URL('./assets/navigation-drawer/247-51271.svg',import.meta.url).href,rewards:new URL('./assets/navigation-drawer/247-51277.svg',import.meta.url).href,wishlist:new URL('./assets/navigation-drawer/247-51286.svg',import.meta.url).href,devices:new URL('./assets/navigation-drawer/247-51293.svg',import.meta.url).href,service:new URL('./assets/navigation-drawer/247-51304.svg',import.meta.url).href,logout:new URL('./assets/navigation-drawer/247-51316.svg',import.meta.url).href,close:new URL('./assets/navigation-drawer/247-51242.svg',import.meta.url).href};
const sourceIcon=(key:keyof typeof sourceIcons,id:string)=><img src={sourceIcons[key]} alt="" width={35} height={35} data-croma-source-node={id}/>;
export const navigationDrawerAccountSections:MenuSection[]=[{id:'account',items:[
 {id:'profile',label:'My Profile',message:'Edit your basic details',icon:sourceIcon('profile','247:51244')},
 {id:'address',label:'My Address',message:'Manage your saved addresses',icon:sourceIcon('address','247:51253')},
 {id:'orders',label:'My Orders',message:'View, Track, cancel orders and buy again',icon:sourceIcon('orders','247:51262')},
 {id:'saving-pots',label:'My Saving Pots',message:'Create and mange your saving pots',icon:sourceIcon('saving','247:51271')},
 {id:'rewards',label:'My Rewards',message:'Exclusive offers and loyalty rewards for you',icon:sourceIcon('rewards','247:51277')},
 {id:'wishlist',label:'My Wishlist',message:'Have a look at your favourite products',icon:sourceIcon('wishlist','247:51286')},
 {id:'devices',label:'My Devices & Plans',message:'Manage your devices and plans',icon:sourceIcon('devices','247:51293')},
 {id:'service',label:'My Service Requests',message:'Manage complaints, feedback, service requests',icon:sourceIcon('service','247:51304')}
]},{id:'session',items:[{id:'logout',label:'Logout',icon:sourceIcon('logout','247:51316')}]}];
export interface NavigationDrawerProps extends Omit<PopUpProps,'children'|'footer'> {
 userName?:string;profileImage?:{src:string;alt:string};neuPass?:ReactNode;quickLinks?:QuickLink[];sections?:MenuSection[];children?:ReactNode;
 /** The visible Account example and earlier library specifications have different anatomy. */
 SourceBranch?:'Account'|'Legacy library';
 /** Functional gesture threshold; source defines direction, not a numeric threshold. */
 swipeToDismiss?:boolean;
}
export function NavigationDrawer({closeIcon,userName,profileImage,neuPass,quickLinks,sections,children,SourceBranch,swipeToDismiss=true,...dialog}:NavigationDrawerProps){
 const swipe=useRef<{x:number;y:number;pointerId:number;width:number}|null>(null);const suppressClick=useRef(false);
 const suppressGestureClick=()=>{suppressClick.current=true;window.setTimeout(()=>{suppressClick.current=false;},0);};
 const legacy=SourceBranch?SourceBranch==='Legacy library':Boolean(userName||profileImage||neuPass||quickLinks);
 const branch=legacy?'legacy-library':'account';
 const actualSections=sections??(legacy?[]:navigationDrawerAccountSections);
 return <div onPointerDownCapture={event=>{if(!swipeToDismiss||event.pointerType==='mouse'||!dialog.open)return;const panel=event.currentTarget.querySelector('dialog');if(panel){swipe.current={x:event.clientX,y:event.clientY,pointerId:event.pointerId,width:panel.getBoundingClientRect().width};const target=event.target;if(target instanceof Element){try{target.setPointerCapture(event.pointerId);}catch{/* Synthetic regression events do not own an active native pointer. */}}}}} onPointerUpCapture={event=>{const start=swipe.current;swipe.current=null;if(!start||event.pointerId!==start.pointerId)return;const dx=event.clientX-start.x,dy=Math.abs(event.clientY-start.y);if(Math.abs(dx)>8||dy>8)suppressGestureClick();if(dx>start.width/4&&dx>dy){event.preventDefault();event.stopPropagation();suppressGestureClick();dialog.onClose();}}} onPointerCancelCapture={()=>{if(swipe.current)suppressGestureClick();swipe.current=null;}} onClickCapture={event=>{if(suppressClick.current){event.preventDefault();event.stopPropagation();}}} data-croma-component="Navigation Drawer" data-source-branch={branch} data-croma-source-node={legacy?'247:51078':'247:51237'}>
   <PopUp {...dialog} className={['croma-navigation-drawer',dialog.className].filter(Boolean).join(' ')} _surface="Navigation Drawer"
     closeIcon={closeIcon??(legacy?undefined:<img src={sourceIcons.close} alt="" width={32} height={32} data-croma-source-node="247:51242"/>)} dismissOnScrim={dialog.dismissOnScrim??true}>
    {legacy&&<header className="croma-drawer-header"><div className="croma-drawer-profile">{profileImage&&<img src={profileImage.src} alt={profileImage.alt}/>}<span data-written-typography="body.small-semibold">{userName}</span></div>{neuPass&&<div className="croma-drawer-neupass">{neuPass}</div>}</header>}
    {legacy&&quickLinks&&<nav className="croma-drawer-quick-links" aria-label="Quick links">{quickLinks.map(link=><a href={link.href} key={link.id} onClick={dialog.onClose}>{link.icon&&<span className="croma-drawer-quick-icon" aria-hidden="true">{link.icon}</span>}<span>{link.label}</span></a>)}</nav>}
    <Menu label={dialog.title} sections={actualSections} onItemSelect={dialog.onClose}/>{children}
   </PopUp>
 </div>;
}
