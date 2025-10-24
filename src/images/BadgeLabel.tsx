import StarBadge from "./white-star-rounded.svg";
import {cn} from "@heroui/react";
import {HTMLAttributes, ReactNode} from "react";

type BadgeLabelProps = {
    label: string|ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function BadgeLabel(props: BadgeLabelProps)
{
    const {label, className, style, ...rest} = props;

    return (
        <div {...rest} className={cn("relative bg-contain bg-center flex items-center justify-center bg-no-repeat w-32 aspect-square", className)} style={{...style, backgroundImage: `url("${StarBadge}")`}}>
            <span>{label}</span>
        </div>
    );
}