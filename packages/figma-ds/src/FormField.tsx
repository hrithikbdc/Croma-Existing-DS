import { forwardRef, useCallback, useEffect, useId, useRef, useState, type CSSProperties, type ReactNode, type InputHTMLAttributes } from 'react';
export type FormFieldState = 'Default' | 'Active' | 'Hover' | 'Filled' | 'Error' | 'Error 2' | 'Hover 2';
export interface FormFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  State?: FormFieldState;
  /** User-approved alternate focus treatment; the source border remains the default. */
  focusAppearance?: 'source' | 'outer-outline';
  Label?: string;
  errorText?: string;
  supportingText?: string;
  leadingImage?: ReactNode;
  trailingIcon?: ReactNode;
}
const border = {
  Default: { left: new URL('./assets/form-field/820-82182.svg', import.meta.url).href, right: new URL('./assets/form-field/820-82184.svg', import.meta.url).href, top: new URL('./assets/form-field/820-82186.svg', import.meta.url).href, bottom: new URL('./assets/form-field/820-82187.svg', import.meta.url).href, source: ['820:82182', '820:82184', '820:82186', '820:82187'] },
  Hover: { left: new URL('./assets/form-field/827-82241.svg', import.meta.url).href, right: new URL('./assets/form-field/827-82242.svg', import.meta.url).href, top: new URL('./assets/form-field/827-82246.svg', import.meta.url).href, bottom: new URL('./assets/form-field/827-82247.svg', import.meta.url).href, source: ['827:82241', '827:82242', '827:82246', '827:82247'] },
  Active: { left: new URL('./assets/form-field/827-82204.svg', import.meta.url).href, right: new URL('./assets/form-field/827-82205.svg', import.meta.url).href, top: new URL('./assets/form-field/827-82209.svg', import.meta.url).href, bottom: new URL('./assets/form-field/827-82210.svg', import.meta.url).href, source: ['827:82204', '827:82205', '827:82209', '827:82210'] },
  Error: { left: new URL('./assets/form-field/840-82259.svg', import.meta.url).href, right: new URL('./assets/form-field/840-82260.svg', import.meta.url).href, top: new URL('./assets/form-field/840-82264.svg', import.meta.url).href, bottom: new URL('./assets/form-field/840-82265.svg', import.meta.url).href, source: ['840:82259', '840:82260', '840:82264', '840:82265'] },
} as const;
const sourceStates: Record<FormFieldState, string> = { Default: '820:82191', Active: '827:82202', Hover: '827:82239', Filled: '840:82224', Error: '840:82257', 'Error 2': '840:82301', 'Hover 2': '942:82560' };
const cursor = new URL('./assets/form-field/827-82251.svg', import.meta.url).href;
const nonempty = (value: unknown) => value !== undefined && value !== null && String(value).length > 0;

/** The seven source states share one native, labelled input; artwork retains its source bytes. */
export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(function FormField({
  State, focusAppearance = 'source', Label = 'Label', errorText, supportingText, leadingImage, trailingIcon,
  id: suppliedId, className = '', value, defaultValue, placeholder, onChange, onInput,
  'aria-describedby': describedBy, 'aria-invalid': suppliedInvalid, ...props
}, ref) {
  const generated = useId(); const id = suppliedId ?? generated;
  const input = useRef<HTMLInputElement | null>(null);
  const [uncontrolledFilled, setUncontrolledFilled] = useState(() => nonempty(defaultValue));
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const filled = value !== undefined ? nonempty(value) : uncontrolledFilled;
  const error = !!errorText || State === 'Error' || State === 'Error 2' || (suppliedInvalid !== undefined && suppliedInvalid !== false && suppliedInvalid !== 'false');
  const floating = filled || focused || State === 'Active' || State === 'Filled' || State === 'Hover 2' || State === 'Error';
  const hover = !props.disabled && (hovered || State === 'Hover' || State === 'Hover 2');
  const state: FormFieldState = error ? floating ? 'Error' : 'Error 2' : focused || State === 'Active' ? 'Active' : floating ? hover ? 'Hover 2' : 'Filled' : hover ? 'Hover' : 'Default';
  const artwork = error ? border.Error : state === 'Active' ? border.Active : state === 'Hover' || state === 'Hover 2' ? border.Hover : border.Default;
  const helper = errorText ?? supportingText;
  const hasHelper = nonempty(helper);
  const labelContent = <>{Label}{props.required && !Label.trimEnd().endsWith('*') && <span aria-hidden="true">*</span>}</>;
  const artworkStyle = { '--croma-field-top-image': `url("${artwork.top}")`, '--croma-field-bottom-image': `url("${artwork.bottom}")` } as CSSProperties;
  const attach = useCallback((node: HTMLInputElement | null) => {
    input.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  }, [ref]);

  useEffect(() => {
    const form = input.current?.form;
    if (!form || value !== undefined) return;
    const reset = (event: Event) => setTimeout(() => { if (!event.defaultPrevented) setUncontrolledFilled(nonempty(input.current?.value)); }, 0);
    form.addEventListener('reset', reset);
    return () => form.removeEventListener('reset', reset);
  }, [value]);

  return <div className={'croma-spec-field ' + className} data-croma-component="Input Fields" data-acceptance="candidate"
    data-focus-appearance={focusAppearance} data-field-state={state} data-field-floating={floating} data-field-error={error} data-field-disabled={!!props.disabled}
    data-source-component-id={sourceStates[state]}>
    <div className="croma-field-control" data-croma-field-slot="control" style={artworkStyle}
      onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false); }}>
      <div className="croma-field-stroke" aria-hidden="true">
        <img className="croma-field-edge croma-field-edge-left" src={artwork.left} width={18} height={56} alt="" data-source-node-id={artwork.source[0]}/>
        <img className="croma-field-edge croma-field-edge-right" src={artwork.right} width={18} height={56} alt="" data-source-node-id={artwork.source[1]}/>
        <div className="croma-field-top-border"><span className="croma-field-notch">{labelContent}</span><span className="croma-field-top-line" data-source-node-id={artwork.source[2]}/></div>
        <span className="croma-field-bottom-line" data-source-node-id={artwork.source[3]}/>
      </div>
      {leadingImage && <span className="croma-field-leading-image" data-croma-field-slot="leading">{leadingImage}</span>}
      <input {...props} className="croma-field-input" id={id} ref={attach} value={value} defaultValue={value !== undefined ? undefined : defaultValue}
        placeholder={placeholder ?? ' '} aria-invalid={error ? suppliedInvalid && suppliedInvalid !== 'false' ? suppliedInvalid : true : suppliedInvalid}
        aria-describedby={[describedBy, hasHelper ? id + '-support' : undefined].filter(Boolean).join(' ') || undefined}
        onChange={event => { if (value === undefined) setUncontrolledFilled(nonempty(event.currentTarget.value)); onChange?.(event); }}
        onInput={event => { if (value === undefined) setUncontrolledFilled(nonempty(event.currentTarget.value)); onInput?.(event); }}
        data-croma-field-slot="input"/>
      <label className="croma-field-label" htmlFor={id} data-croma-field-slot="label">{labelContent}</label>
      {trailingIcon && <span className="croma-field-trailing-icon" data-croma-field-slot="trailing">{trailingIcon}</span>}
      {State === 'Active' && !focused && !filled && <img className="croma-field-preview-cursor" src={cursor} width={2} height={27} alt="" aria-hidden="true" data-source-node-id="827:82251"/>}
    </div>
    {hasHelper && <span className="croma-field-support" id={id + '-support'} data-croma-field-slot="support">{helper}</span>}
  </div>;
});
