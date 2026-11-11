import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

export type ButtonSize = 'Large' | 'Small';
export type ButtonType = 'Filled' | 'Outlined' | 'Text' | 'Icon' | 'Segmented';
export type ButtonState = 'Enabled' | 'Disabled' | 'Hovered' | 'Selected';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Size?: ButtonSize;
  Type?: ButtonType;
  State?: ButtonState;
  icon?: ReactNode;
  Theme?:'dark'|'light';
  /** Selection is independent of hover, for Icon and Segmented controls. */
  Selected?:boolean;
}
/** Written-guide branch. Saved properties only fill gaps in its actual source figures. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({
  Size = 'Large', Type = 'Filled', State = 'Enabled', Theme='dark', Selected, children, icon,
  className = '', disabled, type = 'button', ...props
}, ref) {
  const iconLabel=Type==='Icon' && !props['aria-label'] && !props['aria-labelledby'] && typeof children==='string'&&children.trim()?children:undefined;
  if(Type==='Icon'&&!props['aria-label']?.trim()&&!props['aria-labelledby']?.trim()&&!iconLabel)throw new Error('Icon buttons require an accessible label.');
  if(Type==='Icon'&&!icon)throw new Error('Icon buttons require caller-provided icon artwork.');
  const selected=Selected??State==='Selected';
  return <button {...props} aria-label={props['aria-label']??iconLabel} aria-pressed={props['aria-pressed']??(['Icon','Segmented'].includes(Type)?selected:undefined)} ref={ref} type={type} disabled={disabled || State === 'Disabled'}
    data-croma-component="Button" data-specification="245:35815" data-acceptance="unspecified"
    data-theme={Theme} data-size={['Icon','Segmented'].includes(Type)?undefined:Size} data-type={Type} data-state={disabled ? 'Disabled' : State}
    className={'croma-spec-button ' + className}>
    {icon && <span className="croma-spec-button-icon" aria-hidden="true">{icon}</span>}
    {Type !== 'Icon' && <span className="croma-spec-button-label">{children??'Label'}</span>}
  </button>;
});
