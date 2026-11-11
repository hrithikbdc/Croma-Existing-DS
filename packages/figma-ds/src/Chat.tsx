import {useEffect,useId,useRef,useState,type CSSProperties,type ReactNode} from 'react';
import {chatArtwork} from './chat-artwork.js';
export interface ChatAction {id:string;label:string;onSelect?:()=>void}
export interface ChatMessage {id:string;author:string;content:ReactNode;time?:string;direction?:'incoming'|'outgoing';avatar?:ReactNode;actions?:ChatAction[]}
export interface ChatProps {label:string;messages:ChatMessage[];children?:ReactNode;title?:string;dateLabel?:string;onSend?:(text:string)=>void;onClose?:()=>void;onAttach?:(files:FileList)=>void;onVoice?:()=>void;open?:boolean;className?:string;style?:CSSProperties}
export function Chat({label,messages,children,title='Croma Digital Assistant',dateLabel='Today, Nov 14',onSend,onClose,onAttach,onVoice,open,className='',style}:ChatProps){
 const id=useId(),files=useRef<HTMLInputElement>(null),content=useRef<HTMLDivElement>(null),pinned=useRef(true);
 useEffect(()=>{if(pinned.current&&content.current)content.current.scrollTop=content.current.scrollHeight;},[messages]);const[text,setText]=useState(''),[closed,setClosed]=useState(false);
 if(open===false||(open===undefined&&closed))return null;
 let incoming=0;
 return <section className={'croma-chat '+className} data-croma-component="Chat" data-source-family="chat-24552312" data-source-id="245:52312" aria-label={label} style={style}>
  <span className="croma-chat__background" aria-hidden="true" style={{borderImageSource:`url("${chatArtwork['245:52314']}")`}}/>
  <header className="croma-chat__header"><h2>{title}</h2><button type="button" className="croma-chat__close" aria-label="Close chat" onClick={()=>{setClosed(true);onClose?.();}}><img src={chatArtwork['245:52388']} width={32} height={32} alt=""/></button></header>
  <div className="croma-chat__content" ref={content} onScroll={e=>{const n=e.currentTarget;pinned.current=n.scrollHeight-n.clientHeight-n.scrollTop<24;}}><div className="croma-chat__date"><span/><time>{dateLabel}</time><span/></div><div role="log" aria-label={label+' messages'} aria-live="polite" aria-relevant="additions text" className="croma-chat__messages">
   {messages.map(m=>{const outgoing=m.direction==='outgoing';const first=!outgoing&&incoming++===0;return <article key={m.id} className="croma-chat__message" data-direction={outgoing?'outgoing':'incoming'} aria-label={m.author}>
    <div className="croma-chat__message-row">{!outgoing&&<span className="croma-chat__avatar" style={{height:first?21.689594268798828:22}}>{m.avatar??<img src={chatArtwork[first?'245:52329':'245:52349']} width={22} height={22} alt=""/>}</span>}
     <div className="croma-chat__message-main"><div className="croma-chat__bubble">{m.content}</div>{!!m.actions?.length&&<div className="croma-chat__actions">{m.actions.map(a=><button key={a.id} type="button" onClick={a.onSelect}>{a.label}</button>)}</div>}</div>
    </div>{m.time&&<time className="croma-chat__time">{m.time}</time>}
   </article>;})}
  </div></div>
  <div className="croma-chat__footer">{children??<form className="croma-chat__composer" onSubmit={e=>{e.preventDefault();if(text.trim()){pinned.current=true;onSend?.(text);setText('');}}}>
   <input id={id+'-files'} type="file" hidden ref={files} onChange={e=>{if(e.currentTarget.files)onAttach?.(e.currentTarget.files);}}/>
   <button className="croma-chat__attach" type="button" aria-label="Attach file" onClick={()=>files.current?.click()}><img src={chatArtwork['245:52381']} width={25} height={24} alt=""/></button>
   <span className="croma-chat__input-wrap"><input aria-label="Type message" type="text" placeholder="Type message" value={text} onChange={e=>setText(e.target.value)}/><button className="croma-chat__voice" type="button" aria-label="Voice input" onClick={onVoice}><img src={chatArtwork['245:52385']} width={26} height={24} alt=""/></button></span>
  </form>}</div>
 </section>;
}
