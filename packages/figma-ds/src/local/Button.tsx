import { forwardRef, useEffect, useState, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { localButtonArtwork, localButtonVariants } from './button-data.js';
export type LocalButtonSize = 'Desktop' | 'Mobile';
export type LocalButtonType = 'Primary' | 'Secondary' | 'Link' | 'Link with icon';
export type LocalButtonState = 'Active' | 'Hover' | 'Pressed' | 'Disabled' | 'Link on Light' | 'Link on Dark' | 'Outlined';
export interface LocalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Size?: LocalButtonSize;
  Type?: LocalButtonType;
  State?: LocalButtonState;
  /** Figma boolean property Right Icon#394:0. */
  RightIcon?: boolean;
  /** Figma instance-swap property Right icon instance#394:21. */
  RightIconInstance?: ReactNode;
}
/** Original local Button set 393:72921. Unsupported source combinations throw. */
export const Button = forwardRef<HTMLButtonElement, LocalButtonProps>(function LocalButton({
  Size = 'Desktop', Type = 'Primary', State = 'Active', RightIcon = true, RightIconInstance,
  children, disabled = false, className = '', type = 'button', onPointerEnter, onPointerLeave,
  onPointerDown, onPointerUp, onPointerCancel, onKeyDown, onKeyUp, onBlur, ...props
}, ref) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  useEffect(() => {
    if (!pressed) return;
    const clear = () => setPressed(false);
    window.addEventListener('pointerup', clear);
    window.addEventListener('pointercancel', clear);
    window.addEventListener('blur', clear);
    return () => { window.removeEventListener('pointerup', clear); window.removeEventListener('pointercancel', clear); window.removeEventListener('blur', clear); };
  }, [pressed]);
  const source = localButtonVariants.find(v => v.Size === Size && v.Type === Type && v.State === State);
  if (!source) throw new Error(`No local Figma Button variant: Size=${Size}, Type=${Type}, State=${State}`);
  const regular = Type === 'Primary' || Type === 'Secondary';
  const isDisabled = disabled || State === 'Disabled';
  const automatic = State === 'Active' && regular;
  const effectiveState = isDisabled && regular ? 'Disabled' : automatic ? pressed ? 'Pressed' : hovered ? 'Hover' : 'Active' : State;
  const variant = localButtonVariants.find(v => v.Size === Size && v.Type === Type && v.State === effectiveState) ?? source;
  const art = variant.art;
  return <button {...props} ref={ref} type={type} disabled={isDisabled}
    className={`croma-local-button ${className}`.trim()} data-croma-component="Button"
    data-source-family="local-393:72921" data-source-id={variant.id} data-source-size={Size} data-source-type={Type} data-source-state={variant.State}
    onPointerEnter={e => { onPointerEnter?.(e); if (!e.defaultPrevented && e.pointerType !== 'touch') setHovered(true); }}
    onPointerLeave={e => { onPointerLeave?.(e); setHovered(false); setPressed(false); }}
    onPointerDown={e => { onPointerDown?.(e); if (!e.defaultPrevented && !isDisabled && e.button === 0) setPressed(true); }}
    onPointerUp={e => { onPointerUp?.(e); setPressed(false); }}
    onPointerCancel={e => { onPointerCancel?.(e); setPressed(false); }}
    onKeyDown={e => { onKeyDown?.(e); if (!e.defaultPrevented && !isDisabled && (e.key === ' ' || e.key === 'Enter')) setPressed(true); }}
    onKeyUp={e => { onKeyUp?.(e); if (e.key === ' ' || e.key === 'Enter') setPressed(false); }}
    onBlur={e => { onBlur?.(e); setPressed(false); }}>
    <span className="croma-local-button__content" data-source-slot-id={variant.contentId}>
      <span className="croma-local-button__label" data-source-slot-id={variant.textId}>{children ?? variant.label}</span>
      {art && RightIcon && <span className="croma-local-button__icon" data-source-slot-id={art.nodeId} aria-hidden="true" style={{ width: art.width, height: art.height }}>
        {RightIconInstance ?? <img src={localButtonArtwork[art.nodeId]} width={art.width} height={art.height} alt="" draggable={false} />}
      </span>}
    </span>
  </button>;
});
