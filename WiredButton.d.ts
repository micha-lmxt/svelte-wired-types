
export interface WiredButtonProps {
    /**  Number between 1 and 5 (inclusive) that gives the button a sketchy height. 
     * 
     * Default value is 1. */
    elevation?: number,
    /** disables the button.
     * 
     * Default value is false. */
    disabled?: boolean,
}


export interface WiredFabProps {
    /** disables the button.
     * 
     * Default value is false. */
    disabled?: boolean,
}


export interface WiredLinkProps {
    /**  Number between 1 and 5 (inclusive) that gives the button a sketchy height. 
     * 
     * Default value is 1. */
    elevation?: number,
    /** URL of the page to link to */
    href?: string,
    /** Similar to the target property of <a>, the target window of this link. */
    target?: string
}
