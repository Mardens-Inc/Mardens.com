import React from "react";
import {Divider, Link, Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle} from "@heroui/react";
import {Logo} from "../../images/Logo.svg.tsx";
import spike from "../../images/spike.svg";
import {NavDropdown, NavDropdownItem} from "./NavDropdown.tsx";

export default function Navigation()
{

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            maxWidth={"full"}
            className="bg-primary"
            classNames={{
                wrapper: ""
            }}
        >
            <div
                className={"h-6 w-full absolute -bottom-6 left-0 bg-repeat-x drop-shadow-lg -z-10"}
                style={{
                    backgroundImage: `url("${spike}")`
                }}
            />
            <NavbarContent className={"!grow-0 shrink-0 mr-4"}>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden"/>
                <NavbarBrand>
                    <Logo
                        height={50}
                        fill={"white"}
                    />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="start" className={"mt-4"}>
                <Divider
                    orientation={"vertical"}
                    className={"h-12 w-[2px]"}
                />
                <NavDropdown
                    label={"What We Sell"}
                    href={"/what-we-sell"}
                >
                    <NavDropdownItem key={"nav-dropdown-item-clothing"} icon={"ph:pants-light"} href={"/what-we-sell/clothing"}>Clothing</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-fabric"} icon={"ph:yarn-fill"} href={"/what-we-sell/fabric"}>Fabric</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-flooring"} icon={"mdi:bricks"} href={"/what-we-sell/flooring"}>Flooring</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-food"} icon={"game-icons:opened-food-can"} href={"/what-we-sell/food"}>Food</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-footwear"} icon={"icon-park-outline:clothes-skates"} href={"/what-we-sell/footwear"}>Footwear</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-furniture"} icon={"temaki:furniture"} href={"/what-we-sell/furniture"}>Furniture</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-hardware"} icon={"mingcute:tool-fill"} href={"/what-we-sell/hardware"}>Hardware</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-mattresses"} icon={"mdi:bed"} href={"/what-we-sell/mattresses"}>Mattresses</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-seasonal"} icon={"solar:cloud-snowfall-minimalistic-bold"} href={"/what-we-sell/seasonal"}>Seasonal</NavDropdownItem>
                </NavDropdown>
                <Divider
                    orientation={"vertical"}
                    className={"h-12 w-[2px]"}
                />
                <Link className={"text-white font-bold uppercase hover:text-secondary hover:!opacity-100 text-[17px]"} href={"/whats-new"}>What's New</Link>
                <Divider
                    orientation={"vertical"}
                    className={"h-12 w-[2px]"}
                />
                <NavDropdown
                    label={"About Us"}
                    href={"/about-us"}
                >
                    <NavDropdownItem key={"nav-dropdown-item-who-are-we"} href={"/about-us/who-are-we"}>Who Are We?</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-our-story"} href={"/about-us/our-story"}>Our Story</NavDropdownItem>
                </NavDropdown>
            </NavbarContent>
            <NavbarContent justify="end">
            </NavbarContent>

        </Navbar>);
}