import React from "react";
import {Divider, Link, Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle} from "@heroui/react";
import {Logo} from "../../images/Logo.svg.tsx";
import Spike from "../../images/spike.svg";
import {NavDropdown, NavDropdownItem} from "./NavDropdown.tsx";
import {ShakeyIcon} from "../ShakeyIcon.tsx";
import {useStoreLocation} from "../../providers/StoreLocationProvider.tsx";
import {Icon} from "@iconify-icon/react";

import Clothing from "../../images/icons/clothing.svg";
import Fabric from "../../images/icons/fabric.svg";
import Flooring from "../../images/icons/flooring.svg";
import Food from "../../images/icons/food.svg";
import Footwear from "../../images/icons/footwear.svg";
import Furniture from "../../images/icons/furniture.svg";
import Hardware from "../../images/icons/hardware.svg";
import Mattresses from "../../images/icons/mattresses.svg";
import Seasonal from "../../images/icons/seasonal.svg";


export default function Navigation()
{

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {open: openStoreLocator} = useStoreLocation();

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            maxWidth={"full"}
            className="bg-primary z-[9999]"
            classNames={{
                wrapper: ""
            }}
        >
            <div
                className={"h-6 w-full absolute -bottom-6 left-0 bg-repeat-x drop-shadow-lg -z-10 pointer-events-none"}
                style={{
                    backgroundImage: `url("${Spike}")`
                }}
            />
            <NavbarContent className={"!grow-0 shrink-0 mr-4"}>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden"/>
                <NavbarBrand as={Link} href={"/"}>
                    <Logo
                        height={50}
                        fill={"white"}
                    />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="start">
                <Divider
                    orientation={"vertical"}
                    className={"h-12 w-[2px]"}
                />
                <NavDropdown
                    label={"What We Sell"}
                    href={"/what-we-sell"}
                >
                    <NavDropdownItem key={"nav-dropdown-item-clothing"} icon={Clothing} href={"/what-we-sell/clothing"}>Clothing</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-fabric"} icon={Fabric} href={"/what-we-sell/fabric"}>Fabric</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-flooring"} icon={Flooring} href={"/what-we-sell/flooring"}>Flooring</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-food"} icon={Food} href={"/what-we-sell/food"}>Food</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-footwear"} icon={Footwear} href={"/what-we-sell/footwear"}>Footwear</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-furniture"} icon={Furniture} href={"/what-we-sell/furniture"}>Furniture</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-hardware"} icon={Hardware} href={"/what-we-sell/hardware"}>Hardware</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-mattresses"} icon={Mattresses} href={"/what-we-sell/mattresses"}>Mattresses</NavDropdownItem>
                    <NavDropdownItem key={"nav-dropdown-item-seasonal"} icon={Seasonal} href={"/what-we-sell/seasonal"}>Seasonal</NavDropdownItem>
                </NavDropdown>
                <Divider
                    orientation={"vertical"}
                    className={"h-12 w-[2px]"}
                />
                <Link className={"text-white font-bold uppercase hover:text-secondary hover:!opacity-100 text-[1.05rem]"} href={"/whats-new"}>What's New</Link>
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
                <Link
                    className={"text-white font-bold uppercase hover:text-secondary hover:!opacity-100 text-[0.8rem] flex flex-row items-center gap-3"}
                    href={"/gift-cards"}
                >
                    <span className={"text-primary"}><ShakeyIcon active={true} isIconifyIcon icon={"nimbus:gift-card"} width={20} height={20}/></span> Gift Cards
                </Link>

                <div
                    className={"text-white font-bold uppercase hover:text-secondary hover:!opacity-100 text-[0.8rem] flex flex-row items-center gap-1 cursor-pointer"}
                    onClick={openStoreLocator}
                >
                    <Icon icon={"tdesign:location"} width={20} height={20}/> Locations & Hours
                </div>
            </NavbarContent>

        </Navbar>);
}