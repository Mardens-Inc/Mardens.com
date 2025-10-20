import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle} from "@heroui/react";
import {Logo} from "../../images/Logo.svg.tsx";
import spike from "../../images/spike.svg";
import {NavDropdown, NavDropdownItem} from "./NavDropdown.tsx";

export default function Navigation()
{

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth={"full"} className="bg-primary">
            <div
                className={"h-6 w-full absolute -bottom-6 left-0 bg-repeat-x"}
                style={{
                    backgroundImage: `url("${spike}")`
                }}
            />
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden"/>
                <NavbarBrand>
                    <Logo
                        height={50}
                        fill={"white"}
                    />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="start">
                <NavDropdown
                    label={"What We Sell"}
                >
                    <NavDropdownItem key={"test"}>Test</NavDropdownItem>
                    <NavDropdownItem key={"test2"}>Test2</NavDropdownItem>
                    <NavDropdownItem key={"test3"}>Test3</NavDropdownItem>
                </NavDropdown>
            </NavbarContent>
            <NavbarContent justify="end">
            </NavbarContent>

        </Navbar>);
}