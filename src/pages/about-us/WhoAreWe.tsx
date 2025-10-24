import {Image} from "@heroui/react";

export function WhoAreWe()
{
    return (
        <div className={"flex flex-col"}>
            <div className={"flex flex-row mx-8"}>
                <div className={"flex flex-col gap-4 px-8 w-5/12"}>
                    <h1 className={"text-[4.5rem] font-headers font-black uppercase mb-8 relative w-fit"}>
                        Who We Are
                        <div className={"absolute -right-20 -rotate-[15deg] font-accent uppercase bg-secondary text-black/70 text-[1.2rem] -z-10 -bottom-4 font-light px-4 py-2 spikes secondary"}>Since 1964</div>
                    </h1>
                    <p className={"text-[#373436] leading-6 tracking-wide"}>At Marden’s, we live for the thrill of the deal. We believe that every visit should be an exhilarating adventure filled with savings and unexpected finds. Our unique approach to inventory sourcing means that you never know what treasures await you around each corner. From quirky home goods to gadgets and everything in between, each Marden’s location is a retail playground where bargains and surprises are abundant.</p>
                    <p className={"text-[#373436] leading-6 tracking-wide"}>We’re not just a store; we’re an experience that keeps you on your toes, ready to uncover incredible deals and unexpected finds. Embark on a thrilling bargain-hunting journey at your local Marden’s, where the excitement of the unexpected, at shockingly deep discounts, awaits you!</p>

                </div>
                <Image
                    alt={"About Us"}
                    src={"https://www.mardens.com/wp-content/uploads/2023/12/about-us-intro.jpg"}
                />
            </div>
        </div>
    );
}