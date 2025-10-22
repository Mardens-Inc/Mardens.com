import FooterLogo from "../images/footer-logo-bg--desktop@2x.png";
import {Button} from "@heroui/react";
import {Icon} from "@iconify-icon/react";
import Spikes from "../images/spike-footer.svg";

export function Footer()
{
    return (
        <div className={"bg-[#cc1f26] flex flex-col h-[350px] text-white gap-6 relative"}>
            <div className={"bg-repeat bg-center absolute -top-3 left-0 right-0 h-3 rotate-180"} style={{backgroundImage: `url("${Spikes}")`}} />
            <div className={"flex flex-row justify-between h-full mx-4 xl:mx-[15%]"}>
                <div className={"bg-no-repeat bg-center bg-contain h-full md:w-[300px] lg:w-[415px] shrink-0"} style={{backgroundImage: `url("${FooterLogo}")`}}/>
                <div className={"flex flex-col justify-between grow ml-10 pb-4"}>
                    <div className={"flex flex-row gap-10 my-auto"}>
                        <ul>
                            <li className={"uppercase font-headers font-black text-xl"}>customers</li>
                            <li>What We Sell</li>
                            <li>Return &amp; Refund Policy</li>
                            <li>FAQs</li>
                            <li>Contact</li>
                        </ul>
                        <ul>
                            <li className={"uppercase font-headers font-black text-xl"}>company</li>
                            <li>Sell to Us</li>
                            <li>Community Involvement</li>
                            <li>Accessibility</li>
                        </ul>
                        <ul>
                            <li className={"uppercase font-headers font-black text-xl"}>careers</li>
                            <li>Work at Marden's</li>
                        </ul>
                        <ul>
                            <li className={"uppercase font-headers font-black text-xl"}>follow us</li>
                            <li className={"flex flex-row gap-4 mt-2"}>
                                <Button className={"text-xl bg-white text-[#cc1f26]"} isIconOnly radius={"full"}><Icon icon={"ri:facebook-fill"}/></Button>
                                <Button className={"text-xl bg-white text-[#cc1f26]"} isIconOnly radius={"full"}><Icon icon={"lucide:instagram"}/></Button>
                            </li>
                        </ul>
                    </div>
                    <p className={"ml-10 text-sm"}>&copy; {new Date().getFullYear()} Mardens Inc. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}