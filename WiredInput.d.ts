
export interface WiredInputProps {
  /** Placeholder text for the input. */
  placeholder?: string,
  /** Disables the control */
  disabled?: boolean,
  /**  Input type e.g. password. Default: "text" */
  type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "url" | "week"
  /** Value of the text. 
   * 
   * Cannot bind, use on:input event, 
   * eg. on:input={v=>{value=v.target.value}} */
  value?: string
  name?:string,
  min?:string,
  max?:string,
  step?:string,
  autocomplete?:string,
  autocapitalize?:string,
  autocorrect?:string,
  required?:boolean,
  autofocus?:boolean,
  minlength?:number,
  maxlength?:number,
  size?:number
  readonly?: boolean;
}

export interface WiredSearchInputProps {
  /** Placeholder text for the input. */
  placeholder?: string,
  /** Disables the control */
  disabled?: boolean,
  /** Value of the text. 
 * 
 * Cannot bind, use on:input event, 
 * eg. on:input={v=>{value=v.target.value}} */
  value?: string
}

export interface WiredTextareaProps {
  /** Placeholder text for the text input. */
  placeholder?: string,
  /** Disables the control */
  disabled?: boolean,
  /** Value of the text. 
 * 
 * Cannot bind, use on:input event, 
 * eg. on:input={v=>{value=v.target.value}} */
  value?: string,
  /** Initial number of rows in textarea. */
  rows?:number,
  /** Max number of rows textarea grows to. Then scrollbars appear. */
  maxrows?:number
}


