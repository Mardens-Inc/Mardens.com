import {Button, Image, Link} from "@heroui/react";
import {InstagramFeed} from "../../components/InstagramFeed.tsx";
import {Footer} from "../../components/Footer.tsx";

export function WhoAreWe()
{
    return (
        <div className={"flex flex-col"}>
            <div className={"flex flex-row mx-8"}>
                <div className={"flex flex-col gap-4 px-8 w-5/12"}>
                    <h1 className={"text-[4.5rem] font-headers font-black uppercase mb-8 relative w-fit"}>
                        Who We Are
                        <div className={"absolute -right-20 -rotate-[15deg] font-accent uppercase bg-secondary text-black/70 text-[1.2rem] -z-10 -bottom-2 font-light px-4 py-2 spikes secondary"}>Since 1964</div>
                    </h1>
                    <p className={"text-[#373436] leading-6 tracking-wide"}>At Marden’s, we live for the thrill of the deal. We believe that every visit should be an exhilarating adventure filled with savings and unexpected finds. Our unique approach to inventory sourcing means that you never know what treasures await you around each corner. From quirky home goods to gadgets and everything in between, each Marden’s location is a retail playground where bargains and surprises are abundant.</p>
                    <p className={"text-[#373436] leading-6 tracking-wide"}>We’re not just a store; we’re an experience that keeps you on your toes, ready to uncover incredible deals and unexpected finds. Embark on a thrilling bargain-hunting journey at your local Marden’s, where the excitement of the unexpected, at shockingly deep discounts, awaits you!</p>

                    <div className={"flex justify-center items-center bg-[#d8eff5] py-6 relative"}>
                        <p className={"font-accent uppercase text-[2rem] font-bold"}>
                            Where the elite meet <br/>
                            and the misers mingle
                        </p>
                    </div>
                </div>
                <Image
                    alt={"About Us"}
                    src={"https://www.mardens.com/wp-content/uploads/2023/12/about-us-intro.jpg"}
                />
            </div>

            <div className={"flex flex-row gap-20"}>
                <Image src={"https://www.mardens.com/wp-content/uploads/2023/12/here-today.png"}/>
                <div className={"flex flex-col px-8 w-5/12 justify-center"}>
                    <p className={"font-accent text-5xl uppercase"}>an experience</p>
                    <h2 className={"font-headers font-black text-primary text-6xl uppercase"}>For everyone</h2>
                    <p className={"py-6"}>Every day and every store is different! Each location offers exciting new products at surprisingly low prices. When asked what we sell in our stores, Mickey Marden often replied, “anything we don’t have to feed! – I had five kids.” That statement is still true. From clothing, food, and fabric to flooring, furniture, footwear, hardware, and mattresses, you never know what you’ll find — and that’s all part of the fun.</p>
                    <p>We’re always bringing in new merchandise, and with our great deals, it goes fast — what’s here today might be gone tomorrow. Don’t get caught saying, “I should’ve bought it when I saw it!”</p>
                </div>
            </div>

            <div className={"flex flex-row-reverse gap-20 mt-16"}>
                <Image src={"https://www.mardens.com/wp-content/uploads/2024/05/Artboard-1-e1715025335789-1440x1053.png"}/>
                <div className={"flex flex-col pl-20 w-5/12 justify-center"}>
                    <p className={"font-accent text-5xl uppercase"}>WE DON’T “SOURCE”</p>
                    <h2 className={"font-headers font-black text-primary text-6xl uppercase"}>WE SEARCH</h2>
                    <div className={"flex flex-col gap-6 mt-6"}>
                        <p>Most of our inventory comes from surplus, salvage, and overstock lots. It’s all of the good stuff with none of the gimmicks.</p>
                        <p>When a retailer’s goods are exposed to an insured hazard, e.g., smoke or water damage, they must clean the slate and clear out their inventory. This is what is referred to as “insurance salvage.” We get the call, salvage what’s still good, buy it all, and put it on our shelves at deeply discounted prices. We’re a reactionary business, with our buyers often taking flight at the drop of a hat to evaluate and pack up deals from all over the country.</p>
                        <p>This “finger-on-the-pulse” business model allows us to stock all sorts of unexpected goods, from high-end designer clothing and top-of-the-line bicycles to big brand jacuzzi tubs (and everything in between)— when it has to go, we sell it at shockingly low prices! Their loss is truly your gain.</p>
                        <p>Whatever you find in our stores, it’s sure to be a bargain. If you’re unsatisfied with your purchase for any reason, bring it back with your receipt, and we’ll give you your money back.</p>

                    </div>
                </div>
            </div>

            <div className={"flex flex-row gap-20 my-16"}>
                <Image src={"https://www.mardens.com/wp-content/uploads/2023/12/Collage@2x-1440x1061.jpeg"}/>
                <div className={"flex flex-col pr-20 w-5/12 justify-center"}>
                    <p className={"font-accent text-5xl uppercase"}>A Bargain Hunter’s Paradise</p>
                    <h2 className={"font-headers font-black text-primary text-6xl uppercase"}>SINCE 1964</h2>
                    <div className={"flex flex-col gap-6 mt-6"}>
                        <p>When it comes to an endless variety of deals, Mainers know Marden’s is the place to go. Our family-owned business was started in 1964 by Harold “Mickey” Marden with the mission of offering customers a deal.</p>
                        <Button radius={"none"} color={"primary"} size={"lg"} className={"text-lg uppercase font-bold w-fit"} as={Link} href={"/about-us/our-history"}>See Our History</Button>
                    </div>
                </div>
            </div>

            <InstagramFeed/>
            <Footer/>
        </div>
    );
}