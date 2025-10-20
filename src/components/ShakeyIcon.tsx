import {Icon, IconifyIconProps} from "@iconify-icon/react";
import {motion} from "framer-motion";

export type ShakeyIconProps = {
    active: boolean;
} & IconifyIconProps;

export function ShakeyIcon(props: ShakeyIconProps)
{
    const {icon, width, height, active} = props;
    return (
        <div data-active={props.active} className={"relative"} style={{width: width, height: height}}>
            <motion.div
                className={"absolute inset-0 z-10"}
                initial={{rotate: 0, scale: 1}}
                animate={{
                    rotate: active ? [-20, 20] : 0,
                    scale: active ? 0.8 : 1
                }}
                transition={{
                    duration: 0.5,
                    ease: "linear",
                    rotate: {
                        repeat: active ? Infinity : 0,
                        repeatType: "mirror",
                        type: "tween",
                        duration: 0.5
                    },
                    scale: {
                        type: "tween",
                        duration: 0.2
                    }
                }}
            >
                <Icon icon={icon} width={width} height={height}/>
            </motion.div>
            <motion.div
                initial={{scale: 0, rotate: 45}}
                animate={{
                    scale: active ? 1.75 : 0,
                    rotate: active ? 0 : 45
                }}
                transition={{
                    duration: 0.5,
                    ease: "linear",
                    scale: {
                        type: "tween",
                        duration: 0.2
                    },
                    rotate: {
                        type: "tween",
                        duration: 0.2
                    }
                }}
            >
                <svg viewBox="0 0 121.83 115.86" xmlns="http://www.w3.org/2000/svg" fill="#fec60b">
                    <path d="m60.91 27.47 18.83-27.47-.93 33.29 31.38-11.16-20.31 26.39 31.95 9.41-31.95 9.41 20.31 26.39-31.38-11.16.93 33.29-18.83-27.48-18.82 27.48.92-33.29-31.37 11.16 20.31-26.39-31.95-9.41 31.95-9.41-20.31-26.39 31.37 11.16-.92-33.29z"/>
                </svg>
            </motion.div>
        </div>
    );
}