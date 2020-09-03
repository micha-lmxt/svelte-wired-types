
export interface WiredCalendarProps  {
    /** Numerical number between 1-5 (inclusive) - sets the elevation of the card. Default is 1. */
    elevation?:number,
    /** Optional string value that will be parsed as Date. Pre selects a date highlighted in the calendar.
    */
    selected?:string,
    /** Optional string value that will be parsed as Date. Lower limit of valid dates. */
    firstdate?:string,
    /** Optional string value that will be parsed as Date. Higher limit of valid dates. */
    lastdate?:string,
    /** Optional string value to set locale used ONLY FOR RENDERING headers in calendar. 
     * 
     * Default to browser locale. 
     * 
     * Note: All internal and external dates handling are not affected by locale. 
     * 
     * BCP 47 language tag like `es-MX`*/
    locale?:string,
    /** Boolean value that disables the calendar selector. Default value is false. */
    disabled?:boolean,
    /** Boolean value to use initials in weekdays names. Default value is false. */
    initials?:boolean,
    /** javascript object that contains the selected Date object and the corresponding formatted text. 
     * 
     * Cannot bind, use on:select event, 
     * eg. on:select={v=>{value=v.target.value}} */
    value?: { date: Date, text: string }
    /** Sets the javascript function to format a Date object into a formatted text. */
    format?: (date:Date)=>string
  }
