import {HTMLAttributes, ReactElement, ReactNode, useState} from "react";
import {cn, Link} from "@heroui/react";
import {motion} from "framer-motion";
import {Icon} from "@iconify-icon/react";
import {ShakeyIcon} from "../ShakeyIcon.tsx";

export type NavDropdownProps = {
    label: string | ReactNode;
    children: ReactElement<NavDropdownItemProps> | ReactElement<NavDropdownItemProps>[];
    onSelect?: (item: string) => void;
    href?: string;
    classNames?: {
        label?: string;
    }
} & HTMLAttributes<HTMLDivElement>;

export function NavDropdown(props: NavDropdownProps)
{
    const [hovering, setHovering] = useState(false);
    const {label, href, classNames, children, onSelect, ...rest} = props;
    const labelClassName = cn("text-white font-bold uppercase flex flex-row items-center gap-2 hover:text-secondary h-[30px]", classNames?.label);

    return (
        <div {...rest} className={cn("relative h-[90px] mt-0 flex flex-row items-center", rest.className)} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            {href ? <Link href={href} className={labelClassName}>{label} <Chevron hover={hovering}/></Link> : <div className={labelClassName}>{label} <Chevron hover={hovering}/>
            </div>}
            <motion.div
                data-active={hovering}
                className={"absolute -left-4 w-[calc(100%_+_2rem)] min-w-32 bottom-4 translate-y-[100%] drop-shadow-xl p-4 max-h-50dvh overflow-y-auto bg-white -z-[11] flex flex-col gap-1 font-bold text-[#221e20] uppercase scrollbar-hide"}
                initial={{height: 0, opacity: 0, overflow: "hidden"}}
                animate={{height: hovering ? "auto" : 0, opacity: hovering ? 1 : 0, overflow: hovering ? "auto" : "hidden"}}
                transition={{
                    opacity: {
                        delay: hovering ? 0 : 0.1
                    }
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export type NavDropdownItemProps = {
    icon?: string;
    children: ReactNode | ReactNode[];
    href?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function NavDropdownItem(props: NavDropdownItemProps)
{
    const {icon, href, children, ...rest} = props;
    const [hovering, setHovering] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("flex flex-row items-center gap-2 hover:text-primary border-b border-black/10 py-2 cursor-pointer", rest.className)}
            {...rest}
        >

            {icon ? <ShakeyIcon active={hovering} icon={icon} width={24} height={24}/> : null}
            <span>{children}</span>
        </div>
    );
}

function Chevron({hover}: { hover: boolean })
{
    return (
        <div
            className={"transition-transform duration-300 origin-center w-6 h-6 transform rotate-0 data-[hover=true]:rotate-180"}
            data-hover={hover}
        >
            <Icon icon={"lucide:chevron-down"} width={24} height={24}/>
        </div>
    );
}