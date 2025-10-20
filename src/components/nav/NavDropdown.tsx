import {HTMLAttributes, ReactElement, ReactNode} from "react";

export type NavDropdownProps = {
    label: string | ReactNode;
    children: ReactElement<NavDropdownItemProps> | ReactElement<NavDropdownItemProps>[];
    onSelect?: (item: string)=>void;
} & HTMLAttributes<HTMLDivElement>;

export function NavDropdown(props: NavDropdownProps)
{
    const {label, children} = props;
    return (
        <div>
            <p className={"text-white font-bold uppercase"}>{label}</p>
        </div>
    );
}

export type NavDropdownItemProps = {
    startContent?: ReactNode;
    endContent?: ReactNode;
    children: ReactNode | ReactNode[];
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function NavDropdownItem(props: NavDropdownItemProps)
{
    return (
        <div>{props.children}</div>
    );
}