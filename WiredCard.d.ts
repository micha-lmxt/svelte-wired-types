
export interface WiredCardProps {
    /** Numerical number between 1-5 (inclusive) - sets the elevation of the card. Default is 1. */
    elevation?: number,
    /** A color to fill the background of the card in a sketchy format */
    fill?: string
}


export interface WiredDialogProps {
    /** Numerical number between 1-5 (inclusive) - sets the elevation of the card. Default is 1. */
    elevation?: number,
    /**Boolean value telling dialog if it's showing or not.*/
    open?: boolean
}

export interface WiredDividerProps {
    /** Numerical number between 1-5 (inclusive) - sets the elevation of the card. Default is 1. */
    elevation?: number
}

export interface WiredImageProps {
    /** URL of the image. */
    src?: sring,
    /** Numerical number between 1-5 (inclusive) - sets the elevation of the card. Default is 1. */
    elevation?: number
}

export interface WiredProgressProps {
    /** Numeric value of the progress. */
    value?: number,
    /** Minimum value. Default is 0. */
    min?: number,
    /** Maximum value. Default is 100. */
    max?: number,
    /** Boolean indicating if the label should show a % symbol. */
    percentage?: boolean,
}


export interface WiredSliderProps {
    /** Numeric value of the slider. Currently only string seems to set value.
     * 
     * Cannot use bind:value. Use on:change
    */
    value?: number|string,
    /** Minimum value. Default is 0. */
    min?: number,
    /** Maximum value. Default is 100. */
    max?: number,
    /** Radius of the knob of the slider. 
     * 
     * -- not implemented yet? --
    */
    knobradius?: number,
    /** Step */
    step?:number
}
export interface WiredSpinnerProps {
    /** Is the spinner spinning. Default is false.*/
    spinning?:boolean,
    /** Time in milliseconds to complete one complete spin. Default is 1500 */
    duration?: number,
}

