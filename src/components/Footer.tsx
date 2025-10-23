import FooterLogo from "../images/footer-logo-bg--desktop@2x.png";
import {Button, Link} from "@heroui/react";
import {Icon} from "@iconify-icon/react";
import Spikes from "../images/spike-footer.svg";

export function Footer()
{
    return (
        <div className={"bg-[#cc1f26] flex flex-col sm:h-[350px] text-white gap-6 relative"}>
            <div className={"bg-repeat bg-center absolute -top-3 left-0 right-0 h-3 rotate-180"} style={{backgroundImage: `url("${Spikes}")`}}/>
            <div className={"flex flex-row justify-between h-full mx-4 items-center sm:items-[unset]"}>
                <div className={"bg-no-repeat bg-center bg-contain h-full hidden lg:block lg:w-[250px] xl:w-[415px] shrink-0"} style={{backgroundImage: `url("${FooterLogo}")`}}/>
                <div className={"flex flex-col justify-between grow ml-10 pb-4"}>
                    <div className={"flex flex-row gap-10 my-auto justify-between sm:justify-center lg:justify-[unset] flex-wrap"}>
                        <ul className={"lg:w-40 w-24 md:w-32"}>
                            <li className={"uppercase font-headers font-black text-xl"}>customers</li>
                            <li><a href={"/what-we-sell"} className={"text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold"}> What We Sell</a></li>
                            <li><a href={"/return-refund-policy"} className={"text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold"}> Return &amp; Refund Policy</a></li>
                            <li><a href={"/faqs"} className={"text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold"}> FAQs</a></li>
                            <li><a href={"/contact"} className={"text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold"}> Contact</a></li>
                        </ul>
                        <ul className={"lg:w-40 w-32 md:w-32"}>
                            <li className={"uppercase font-headers font-black text-xl"}>company</li>
                            <li><a href={"/sell-to-us"} className={"text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold"}>Sell to Us</a></li>
                            <li><a href={"/community-involvement"} className={"text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold text-nowrap"}>Community Involvement</a></li>
                            <li><a href={"/accessibility"} className={"text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold"}>Accessibility</a></li>
                        </ul>
                        <ul className={"lg:w-40 w-24 md:w-32"}>
                            <li className={"uppercase font-headers font-black text-xl"}>careers</li>
                            <li><a href={"/careers"} className={"text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold"}>Work at Marden's</a></li>
                        </ul>
                        <ul>
                            <li className={"uppercase font-headers font-black sm:w-full md:w-32 lg:w-40"}>follow us</li>
                            <li className={"flex flex-row gap-4 mt-2"}>
                                <Button className={"text-xl bg-white text-[#cc1f26]"} isIconOnly radius={"full"} as={Link} target={"_blank"} href={"https://www.facebook.com/mardens/"}><Icon icon={"ri:facebook-fill"}/></Button>
                                <Button className={"text-xl bg-white text-[#cc1f26]"} isIconOnly radius={"full"} as={Link} target={"_blank"} href={"https://www.instagram.com/mardensmaine/"}><Icon icon={"lucide:instagram"}/></Button>
                            </li>
                        </ul>
                    </div>
                    <p className={"ml-10 text-sm text-center xl:text-start"}>&copy; {new Date().getFullYear()} Mardens Inc. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}