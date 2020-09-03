export interface WiredVideoProps {
    /** URL of the video. */
    src?: string,
    /** Boolean value indicating if the video should auto-play */
    autoplay?: boolean,
    /** Loop the video (boolean value) */
    loop?: boolean,
    /** Play the video muted (boolean value) */
    muted?: boolean,
    /** Play the video inline on mobile devices (boolean value) */
    playsinline?: boolean

}