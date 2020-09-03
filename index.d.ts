/// <reference path="svelte2tsx/svelte-jsx.d.ts" />
import 'svelte2tsx';
import { WiredInputProps } from './WiredInput';
import { WiredButtonProps } from './WiredButton';
import { WiredCalendarProps } from './WiredCalendar';
import { WiredCardProps } from './WiredCard';
import { WiredCheckboxProps } from './WiredSelect';
import { WiredComboProps } from './WiredSelect';
import { WiredDialogProps } from './WiredCard';
import { WiredDividerProps } from './WiredCard';
import { WiredFabProps } from './WiredButton';
import { WiredImageProps } from './WiredCard';
import { WiredItemProps } from './WiredSelect';
import { WiredLinkProps } from './WiredButton';
import { WiredListboxProps } from './WiredSelect';
import { WiredProgressProps } from './WiredCard';
import { WiredRadioGroupProps } from './WiredSelect';
import { WiredRadioProps } from './WiredSelect';
import { WiredSearchInputProps } from './WiredInput';
import { WiredSliderProps } from './WiredCard';
import { WiredSpinnerProps } from './WiredCard';
import { WiredTabProps } from './WiredSelect';
import { WiredTabsProps } from './WiredSelect';
import { WiredTextareaProps } from './WiredInput';
import { WiredToggleProps } from './WiredSelect';
import { WiredVideoProps } from './WiredVideo';


type SelectedEventHandler = (event:{target:{selected:string}}) => any;


declare global {
  namespace svelte.JSX {
    /** test text 1 */



    interface IntrinsicElements {
      /** Hand-drawn sketchy text input web component.

      For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
      
      Notice: bind:value does not work. 
      Use: <wired-input {value} on:input={v=>{value=v.target.value}}/>
      */
      'wired-input': WiredInputProps & DOMAttributes<HTMLInputElement> & { style?: string },
      /** 
       * Hand-drawn sketchy Button web component.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       */
      'wired-button': WiredButtonProps & DOMAttributes<HTMLButtonElement> & { style?: string },
      /** 
       * Calendar control with a hand-drawn, wireframe like, style.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       * 
       * Events:
       * - selected - event fired when a date is selected by the user.
       * 
       * Custom CSS Variables
       * - --wired-calendar-bg Background color of the calendar. Default white.
       * - --wired-calendar-color Calendar sketch line color. Default black.
       * - --wired-calendar-selected-color Selected date sketch line color. Default red.
       * - --wired-calendar-dimmed-color Font color days not belonging to calendar actual month. Default gray.
       * 
       * eg.:
       *  \<wired-calendar style="--wired-calendar-bg:#123456;--wired-calendar-color:#BB66BB;color:#FFEECC"/\>
       * 
       */
      'wired-calendar': WiredCalendarProps & DOMAttributes<HTMLSelectElement> & {
        /**
        * Custom CSS Variables
        * - --wired-calendar-bg Background color of the calendar. Default white.
        * - --wired-calendar-color Calendar sketch line color. Default black.
        * - --wired-calendar-selected-color Selected date sketch line color. Default red.
        * - --wired-calendar-dimmed-color Font color days not belonging to calendar actual month. Default gray.
        * 
        * eg.:
        *  style="--wired-calendar-bg:#123456;--wired-calendar-color:#BB66BB;color:#FFEECC"*/
        style?: string,
        onselected?:SelectedEventHandler
      },
      /** 
       * wired-card is a container for other web elements - with a hand-drawn, wireframe like, look.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       */
      'wired-card': WiredCardProps & DOMAttributes<HTMLDivElement> & { style?: string },
      /** 
       * Hand-drawn sketchy checkbox web component.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       */
      'wired-checkbox': WiredCheckboxProps & DOMAttributes<HTMLInputElement> & { style?: string},
      /** 
       * Combobox control - similar to a native browser select element; with a hand-drawn, wireframe like, style.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       * 
       * bind:selected does not work. Use on:selected event instead.
       * 
       * Custom CSS Variables
       * - --wired-combo-popup-bg Background color of the dropdown when combo selector is open.
       * - --wired-item-selected-bg Background color of the selected item
       * 
       * eg.:
       *  \<wired-combo style="--wired-combo-popup-bg:#123456;--wired-item-selected-bg:#BB66BB;color:#aa00bb"/\>
       */
      'wired-combo': WiredComboProps & DOMAttributes<HTMLSelectElement> & {
        /**
        * Custom CSS Variables
       * - --wired-combo-popup-bg Background color of the dropdown when combo selector is open.
       * - --wired-item-selected-bg Background color of the selected item
       * 
       * eg.:
       *  style="--wired-combo-popup-bg:#123456;--wired-item-selected-bg:#BB66BB;color:#aa00bb"
       */
        style?: string
        onselected?:SelectedEventHandler
      },
      /** 
       * Hand-drawn sketchy Dialog web component.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       * 
       * Custom CSS Properties
       * - --wired-dialog-z-index - Sets the z-index of the dialog
       */
      'wired-dialog': WiredDialogProps & DOMAttributes<HTMLDivElement> & {
        /**
         * Custom CSS Properties
         * - --wired-dialog-z-index - Sets the z-index of the dialog
         * 
         * eg. style="--wired-dialog-z-index:9999;"
         */
        style?: string
      },
      /** 
       * Hand-drawn sketchy line to divide sections
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       */
      'wired-divider': WiredDividerProps & DOMAttributes<HTMLDivElement> & { style?: string },
      /** 
       * Hand-drawn sketchy Floating Action Button (FAB)
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       * 
       * Custom CSS Properties
       * - --wired-fab-bg-color - Background color of the fab. Default value is #018786. Foreground color is set by setting the color css property.
       */
      'wired-fab': WiredFabProps & DOMAttributes<HTMLButtonElement> & {
        /**
         * Custom CSS Properties
         * - --wired-fab-bg-color - Background color of the fab. Default value is #018786. Foreground color is set by setting the color css property.
         * 
         * eg.: style="--wire-fab-bg-color:black;color:#ffffff"
         */
        style?: string
      },
      /** 
       * This is a hand-drawn sketchy round button with an image placed at the center. Image could also be in icon, more specifically an icon as as (@material/mwc-icon)[https://www.npmjs.com/package/@material/mwc-icon].
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       * 
       * Custom CSS Variables
       * - --wired-icon-size Numeric size of the icon. Default is 24 (px).
       * - --wired-icon-bg-color Background color.
       */
      'wired-icon-button': WiredFabProps & DOMAttributes<HTMLButtonElement> & {
        /**
         * Custom CSS Variables
         * - --wired-icon-size Numeric size of the icon. Default is 24 (px).
         * - --wired-icon-bg-color Background color.    
         * */
        style?: string
      },
      /** 
       * wired-image displays an image and draws a sketchy border around it.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       */
      'wired-image': WiredImageProps & DOMAttributes<HTMLDivElement> & { style?: string },
      /** 
       * wired-item is a list item used by Wired components like wired-combo and wired-list-box.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       */
      'wired-item': WiredItemProps & DOMAttributes<HTMLDivElement> & { style?: string },
      /** 
       * Hand-drawn sketchy Anchor/Link web component.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       * 
       * Custom CSS Properties
       * - --wired-link-decoration-color - Color of the sketchy underline of the link. Default value is blue. Foreground color is set by setting the color css property.
       */
      'wired-link': WiredLinkProps & DOMAttributes<HTMLLinkElement> & {
        /**
        * Custom CSS Properties
        * - --wired-link-decoration-color - Color of the sketchy underline of the link. Default value is blue. Foreground color is set by setting the color css property.
        * */
        style?: string
      },
      /** 
       * A listbox control with Wired hand-drawn styling. The selected item is highlighted. Can be vertical (default) or horizontal.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       * 
       * Custom CSS Variables
       * - --wired-item-selected-bg Background color of the selected item.
       * - --wired-item-selected-color Text color of the selected item.
       */
      'wired-listbox': WiredListboxProps & DOMAttributes<HTMLButtonElement> & {
        /**
         * Custom CSS Variables
       * - --wired-item-selected-bg Background color of the selected item.
       * - --wired-item-selected-color Text color of the selected item.
         */
        style?: string,
        onselected?:SelectedEventHandler
      },
      /** 
       * Hand-drawn sketchy progress bar web component.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       * 
       * Custom CSS Variables
       * - --wired-progress-label-color Color of the label. Default is black.
       * - --wired-progress-label-background Backgroind of label. Default is rgba(255,255,255,0.9).
       * - --wired-progress-font-size Font size of the label. Default is 14px
       * - --wired-progress-color Color of the progress bar. Default is rgba(0, 0, 200, 0.8).
       * 
       * e.g. in your svelte-file: 
       * 
       * \<style\>
       * 
       * 	  wired-progress {
		   *      --wired-progress-label-color:orange;
		   *      --wired-progress-label-background:green;
		   *      color:red;
		   *      --wired-progress-color:green;
	     *    }
       * 
       * \</style\>
       */
      'wired-progress': WiredProgressProps & DOMAttributes<HTMLDivElement> & {
        /**        
       * Custom CSS Variables
       * - --wired-progress-label-color Color of the label. Default is black.
       * - --wired-progress-label-background Backgroind of label. Default is rgba(255,255,255,0.9).
       * - --wired-progress-font-size Font size of the label. Default is 14px
       * - --wired-progress-color Color of the progress bar. Default is rgba(0, 0, 200, 0.8). 
       * 
       * eg. style="--wired-progress-label-color:red;color:#009911;--wired-progress-color:rgb(0,0,0);"
       * */
        style?: string
      },
      /** 
       * Allows user to select at most one radio button from a set. Works with [wired-radio](https://github.com/rough-stuff/wired-elements/tree/master/packages/wired-radio).
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       */
      'wired-radio-group': WiredRadioGroupProps & DOMAttributes<HTMLInputElement> & { style?: string,
      onselected?:SelectedEventHandler },
      /** 
       * Hand-drawn sketchy radio button web component. Usually used with (wired-radio-group)[https://github.com/rough-stuff/wired-elements/tree/master/packages/wired-radio-group].
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       * 
       * Custom CSS Variables
       * - --wired-radio-icon-color Color of the radio button. Default is currentColor.
       */
      'wired-radio': WiredRadioProps & DOMAttributes<HTMLInputElement> & { 
        /**
         * Custom CSS Variables
         * - --wired-radio-icon-color Color of the radio button. Default is currentColor.
         */
        style?: string },
      /** 
       * Hand-drawn sketchy search text input web component.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       */
      'wired-search-input': WiredSearchInputProps & DOMAttributes<HTMLInputElement> & { style?: string },
      /** 
       * Hand-drawn sketchy slider web component which allows user to select a value from a range by moving the slider thumb.
       * 
       * Range can be set using the min, max value. Default range is 0-100.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       * 
       * Custom CSS Variables
       * - --wired-slider-knob-zero-color Color of the knob when the value is at minimum.
       * - --wired-slider-knob-color Color of the knob when the value is NOT at minimum.
       * - --wired-slider-bar-color Color of the bar on which the knob slides.
       */
      'wired-slider': WiredSliderProps & DOMAttributes<HTMLInputElement> & { 
        /**
         * Custom CSS Variables
         * - --wired-slider-knob-zero-color Color of the knob when the value is at minimum.
         * - --wired-slider-knob-color Color of the knob when the value is NOT at minimum.
         * - --wired-slider-bar-color Color of the bar on which the knob slides.
         */
        style?: string },
      /** 
       * Hand-drawn sketchy spinner to show progress or a pending task.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       * 
       * Styling
       * - Change the color style of the spinner element to change its color.
       */
      'wired-spinner': WiredSpinnerProps & DOMAttributes<HTMLDivElement> & { style?: string },
      /** 
       * Hand-drawn sketchy Tabs web component.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       */
      'wired-tab': WiredTabProps & DOMAttributes<HTMLButtonElement> & { style?: string },
      /** 
       * Hand-drawn sketchy Tabs web component.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       * 
       * Custom CSS Variables
       * - --wired-item-selected-bg Background color of the selected tab.
       * - --wired-item-selected-color Text color of the selected tab.
       */
      'wired-tabs': WiredTabsProps & DOMAttributes<HTMLButtonElement> & { 
        /**
         * Custom CSS Variables
         * - --wired-item-selected-bg Background color of the selected tab.
         * - --wired-item-selected-color Text color of the selected tab.
         */

        style?: string },
      /** 
       * Hand-drawn sketchy multi-line text input web component.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       */
      'wired-textarea': WiredTextareaProps & DOMAttributes<HTMLInputElement> & { style?: string },
      /** 
       * Hand-drawn sketchy toggle button / switch.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       * 
       * Custom CSS Variables
       * - --wired-toggle-off-color Color of the knob when in off (false) position. Default value is gray.
       * - --wired-toggle-on-color Color of the knob when in on (true) position. Default value is rgb(63, 81, 181).
       */
      'wired-toggle': WiredToggleProps & DOMAttributes<HTMLInputElement> & { 
        /**
         * Custom CSS Variables
         * - --wired-toggle-off-color Color of the knob when in off (false) position. Default value is gray.
         * - --wired-toggle-on-color Color of the knob when in on (true) position. Default value is rgb(63, 81, 181).
         */
        style?: string },
      /** 
       * A hand-drawn sketchy looking video player component.
       * 
       * For demo and view the complete set of wired-elememts: [wiredjs.com](https://wiredjs.com) 
       * 
       * Custom CSS Variables
       * - --wired-video-highlight-color Color of the progress bar and the knob on the volume control.
       */
      'wired-video': WiredVideoProps & DOMAttributes<HTMLButtonElement> & { 
        /**
         * Custom CSS Variables
         * - --wired-video-highlight-color Color of the progress bar and the knob on the volume control.
         */
        style?: string }
    }
  }
}
