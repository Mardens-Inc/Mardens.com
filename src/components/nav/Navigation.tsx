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
import {motion} from "framer-motion";


export default function Navigation()
{

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {open: openStoreLocator} = useStoreLocation();

    return (
        <>
            <Navbar
                onMenuOpenChange={setIsMenuOpen}
                maxWidth={"full"}
                className="bg-primary z-[9999]"
            >
                <div
                    className={"h-6 w-full absolute -bottom-6 left-0 bg-repeat-x drop-shadow-lg -z-10 pointer-events-none"}
                    style={{
                        backgroundImage: `url("${Spike}")`
                    }}
                />
                <NavbarContent className={"!grow-0 shrink-0 mr-4"}>
                    <NavbarBrand as={Link} href={"/"}>
                        <Logo
                            height={50}
                            fill={"white"}
                        />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent justify="start" className={"hidden lg:flex"}>
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
                <NavbarContent justify="end" className={"hidden lg:flex"}>
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
                <NavbarContent justify={"end"} className={"lg:hidden"}>
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className={"text-white"}/>
                </NavbarContent>
            </Navbar>
            <motion.div
                className={"bg-white text-black flex flex-col items-center z-50 fixed top-0 left-0 w-full overflow-y-auto"}
                data-open={isMenuOpen}
                initial={{
                    height: 0,
                    y: -100,
                    paddingTop: 0,
                    paddingBottom: 0
                }}
                animate={isMenuOpen ? {
                    height: "100dvh",
                    y: 0,
                    paddingTop: 100,
                    paddingBottom: 100,
                    transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                    }
                } : {
                    height: 0,
                    y: -100,
                    paddingTop: 0,
                    paddingBottom: 0,
                    transition: {
                        duration: 0.3,
                        ease: "easeInOut"
                    }
                }}
            >
                <div className={"w-full max-w-md px-6 py-4 flex flex-col gap-6"}>
                    {/* What We Sell Section */}
                    <div className={"flex flex-col gap-3"}>
                        <Link
                            href={"/what-we-sell"}
                            className={"text-primary font-bold uppercase text-xl"}
                            onPress={() => setIsMenuOpen(false)}
                        >
                            What We Sell
                        </Link>
                        <div className={"flex flex-col gap-2 pl-4"}>
                            <Link href={"/what-we-sell/clothing"} className={"text-black hover:text-primary flex items-center gap-2"} onPress={() => setIsMenuOpen(false)}>
                                <img src={Clothing} alt="" className={"w-5 h-5"}/> Clothing
                            </Link>
                            <Link href={"/what-we-sell/fabric"} className={"text-black hover:text-primary flex items-center gap-2"} onPress={() => setIsMenuOpen(false)}>
                                <img src={Fabric} alt="" className={"w-5 h-5"}/> Fabric
                            </Link>
                            <Link href={"/what-we-sell/flooring"} className={"text-black hover:text-primary flex items-center gap-2"} onPress={() => setIsMenuOpen(false)}>
                                <img src={Flooring} alt="" className={"w-5 h-5"}/> Flooring
                            </Link>
                            <Link href={"/what-we-sell/food"} className={"text-black hover:text-primary flex items-center gap-2"} onPress={() => setIsMenuOpen(false)}>
                                <img src={Food} alt="" className={"w-5 h-5"}/> Food
                            </Link>
                            <Link href={"/what-we-sell/footwear"} className={"text-black hover:text-primary flex items-center gap-2"} onPress={() => setIsMenuOpen(false)}>
                                <img src={Footwear} alt="" className={"w-5 h-5"}/> Footwear
                            </Link>
                            <Link href={"/what-we-sell/furniture"} className={"text-black hover:text-primary flex items-center gap-2"} onPress={() => setIsMenuOpen(false)}>
                                <img src={Furniture} alt="" className={"w-5 h-5"}/> Furniture
                            </Link>
                            <Link href={"/what-we-sell/hardware"} className={"text-black hover:text-primary flex items-center gap-2"} onPress={() => setIsMenuOpen(false)}>
                                <img src={Hardware} alt="" className={"w-5 h-5"}/> Hardware
                            </Link>
                            <Link href={"/what-we-sell/mattresses"} className={"text-black hover:text-primary flex items-center gap-2"} onPress={() => setIsMenuOpen(false)}>
                                <img src={Mattresses} alt="" className={"w-5 h-5"}/> Mattresses
                            </Link>
                            <Link href={"/what-we-sell/seasonal"} className={"text-black hover:text-primary flex items-center gap-2"} onPress={() => setIsMenuOpen(false)}>
                                <img src={Seasonal} alt="" className={"w-5 h-5"}/> Seasonal
                            </Link>
                        </div>
                    </div>

                    <Divider className={"bg-primary/20"}/>

                    {/* What's New */}
                    <Link
                        href={"/whats-new"}
                        className={"text-primary font-bold uppercase text-xl"}
                        onPress={() => setIsMenuOpen(false)}
                    >
                        What's New
                    </Link>

                    <Divider className={"bg-primary/20"}/>

                    {/* About Us Section */}
                    <div className={"flex flex-col gap-3"}>
                        <Link
                            href={"/about-us"}
                            className={"text-primary font-bold uppercase text-xl"}
                            onPress={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <div className={"flex flex-col gap-2 pl-4"}>
                            <Link href={"/about-us/who-are-we"} className={"text-black hover:text-primary"} onPress={() => setIsMenuOpen(false)}>
                                Who Are We?
                            </Link>
                            <Link href={"/about-us/our-story"} className={"text-black hover:text-primary"} onPress={() => setIsMenuOpen(false)}>
                                Our Story
                            </Link>
                        </div>
                    </div>

                    <Divider className={"bg-primary/20"}/>

                    {/* Gift Cards */}
                    <Link
                        href={"/gift-cards"}
                        className={"text-primary font-bold uppercase text-xl flex items-center gap-2"}
                        onPress={() => setIsMenuOpen(false)}
                    >
                        <ShakeyIcon active={true} isIconifyIcon icon={"nimbus:gift-card"} width={24} height={24}/> Gift Cards
                    </Link>

                    <Divider className={"bg-primary/20"}/>

                    {/* Locations & Hours */}
                    <div
                        className={"text-primary font-bold uppercase text-xl flex items-center gap-2 cursor-pointer"}
                        onClick={() =>
                        {
                            setIsMenuOpen(false);
                            openStoreLocator();
                        }}
                    >
                        <Icon icon={"tdesign:location"} width={24} height={24}/> Locations & Hours
                    </div>
                </div>
            </motion.div>
        </>
    );
}
