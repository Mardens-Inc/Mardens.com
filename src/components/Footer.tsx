import FooterLogo from "../images/footer-logo-bg--desktop@2x.png";
import {Button, Link} from "@heroui/react";
import {Icon} from "@iconify-icon/react";
import Spikes from "../images/spike-footer.svg";

export function Footer()
{
    return (
        <div className={"bg-[#cc1f26] flex flex-col min-h-[350px] sm:min-h-[350px] text-white relative"}>
            <div className={"bg-repeat bg-center absolute -top-3 left-0 right-0 h-3 rotate-180"} style={{backgroundImage: `url("${Spikes}")`}}/>
            <div className={"flex flex-col lg:flex-row justify-between h-full px-4 sm:px-6 md:px-8 py-8 sm:py-10 lg:py-0 lg:px-4 items-center lg:items-stretch gap-8 lg:gap-0"}>
                <div className={"bg-no-repeat bg-center bg-contain h-[200px] lg:h-[350px] hidden lg:block lg:w-[250px] xl:w-[415px] shrink-0"} style={{backgroundImage: `url("${FooterLogo}")`}}/>
                <div className={"flex flex-col justify-between grow lg:ml-6 xl:ml-10 w-full lg:pb-4"}>
                    <div className={"flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 my-auto justify-center lg:justify-start flex-wrap"}>
                        <ul className={"flex-shrink-0"}>
                            <li className={"uppercase font-headers font-black text-base sm:text-lg md:text-xl mb-2"}>customers</li>
                            <li><a href={"/what-we-sell"} className={"text-xs sm:text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold transition-all"}>What We Sell</a></li>
                            <li><a href={"/return-refund-policy"} className={"text-xs sm:text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold transition-all"}>Return &amp; Refund Policy</a></li>
                            <li><a href={"/faqs"} className={"text-xs sm:text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold transition-all"}>FAQs</a></li>
                            <li><a href={"/contact"} className={"text-xs sm:text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold transition-all"}>Contact</a></li>
                        </ul>
                        <ul className={"flex-shrink-0"}>
                            <li className={"uppercase font-headers font-black text-base sm:text-lg md:text-xl mb-2"}>company</li>
                            <li><a href={"/sell-to-us"} className={"text-xs sm:text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold transition-all"}>Sell to Us</a></li>
                            <li><a href={"/community-involvement"} className={"text-xs sm:text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold transition-all"}>Community Involvement</a></li>
                            <li><a href={"/accessibility"} className={"text-xs sm:text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold transition-all"}>Accessibility</a></li>
                        </ul>
                        <ul className={"flex-shrink-0"}>
                            <li className={"uppercase font-headers font-black text-base sm:text-lg md:text-xl mb-2"}>careers</li>
                            <li><a href={"/careers"} className={"text-xs sm:text-sm opacity-75 hover:opacity-100 hover:underline hover:text-secondary hover:font-bold transition-all"}>Work at Marden's</a></li>
                        </ul>
                        <ul className={"flex-shrink-0"}>
                            <li className={"uppercase font-headers font-black text-base sm:text-lg md:text-xl mb-2"}>follow us</li>
                            <li className={"flex flex-row gap-3 sm:gap-4 mt-2"}>
                                <Button className={"text-lg sm:text-xl bg-white text-[#cc1f26]"} isIconOnly radius={"full"} size={"sm"} as={Link} target={"_blank"} href={"https://www.facebook.com/mardens/"}><Icon icon={"ri:facebook-fill"}/></Button>
                                <Button className={"text-lg sm:text-xl bg-white text-[#cc1f26]"} isIconOnly radius={"full"} size={"sm"} as={Link} target={"_blank"} href={"https://www.instagram.com/mardensmaine/"}><Icon icon={"lucide:instagram"}/></Button>
                            </li>
                        </ul>
                    </div>
                    <p className={"text-xs sm:text-sm text-center lg:text-start mt-6 lg:mt-4"}>&copy; {new Date().getFullYear()} Mardens Inc. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}