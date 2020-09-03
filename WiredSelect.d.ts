
export interface WiredCheckboxProps {
    /** Checked state (boolean). Default is false.
     * 
     * Cannot use bind:checked, use on:change
     */
    checked?: boolean,
    /** Disables the checkbox. Default value is false. */
    disabled?: boolean,
}


export interface WiredComboProps {
    /** Value of the selected wired-item.
     * 
     * Cannot use bind:checked, use on:selected
     */
    selected?: string,
        /** Value of the selected wired-item.
     * 
     * Cannot use bind:checked, use on:selected
     */
    value?:{
        value: string;
        text: string;
      }
    /** Disables the combo selector. Default value is false. */
    disabled?: boolean,
}

export interface WiredItemProps {
    /** Value of the item */
    value?:string,
    /** Name of the item */
    name?:string,
    /** Selected. Default is false. */
    selected?:boolean
}


export interface WiredListboxProps {
    /** Value of the selected item.
     * 
     * Cannot use bind:checked, use on:selected
     */
    value?:{
        value: string;
        text: string;
      },
          /** Value of the selected item.
     * 
     * Cannot use bind:checked, use on:selected
     */
    selected?: string,
    /** Boolean indicated if the items are layed out horizontally. Default is false. */
    horizontal?: boolean,
}

export interface WiredRadioGroupProps {
    /** Name of the selected radio button.
     * 
     * Cannot use bind:checked, use on:selected
     */
    selected?: string,
}
export interface WiredRadioProps {
    /** Checked state (boolean) of the radio button. Default is false.
     * 
     * Cannot use bind:checked, use on:change
     */
    checked?: string,
    /** disables the radio button. Default value is false. */
    disabled?: boolean,
    /** Text associated with the radio button. */
    text?: string,
    /** A name associated with the radio inside a radio-group. */
    name?: string
}

export interface WiredTabProps {
    /** Label of the tab */
    label?:string,
    /** Name of the tab */
    name?:string,
}

export interface WiredTabsProps {
    /** Name of the currently selected tab
     * 
     * Cannot use bind:selected, use event
     */
    selected?: string,
}


export interface WiredToggleProps {
    /** Checked state (boolean). Default is false.
     * 
     * Cannot use bind:checked, use on:change
     */
    checked?: boolean,
    /** Disables the toggle button. Default value is false. */
    disabled?: boolean,
}