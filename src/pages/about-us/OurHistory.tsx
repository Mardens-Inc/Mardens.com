import {Image} from "@heroui/react";
import {InstagramFeed} from "../../components/InstagramFeed.tsx";
import {Footer} from "../../components/Footer.tsx";
import {BadgeLabel} from "../../images/BadgeLabel.tsx";

export function OurHistory()
{
    return (
        <div className={"flex flex-col"}>
            <section id={"beginning"} className={"flex flex-row mx-8"}>
                <div className={"flex flex-col gap-4 px-8 w-5/12"}>
                    <h1 className={"text-[4.5rem] font-headers font-black uppercase mb-8 relative w-fit"}>
                        Our History
                        <div className={"absolute -right-20 -rotate-[15deg] font-accent uppercase bg-secondary text-black/70 text-[1.2rem] -z-10 -bottom-2 font-light px-4 py-2 spikes secondary"}>Since 1964</div>
                    </h1>
                    <p className={"text-[#373436] leading-6 tracking-wide"}>When it comes to an endless variety of deals, Mainers know Marden’s is the place to go. Our family-owned business was started in 1964 by Harold “Mickey” Marden with the mission of offering customers a deal.</p>
                    <h1 className={"text-[2.25rem] font-accent font-bold uppercase mt-8 relative w-fit -mb-10"}>From Service to Success</h1>
                    <h1 className={"text-[3.5rem] text-primary font-headers font-bold  uppercase relative w-fit"}>Humble Beginnings</h1>
                    <p className={"text-[#373436] leading-6 tracking-wide"}>As a young man, like many others of his time, Mickey Marden hurried to join the Marines during WWII to serve his country. He still made the time to earn his high school GED while in the service. After his active duty ended, he continued his education at the University of Maine and achieved academic excellence as a Phi Beta Kappa Scholar. With a degree in hand, Mickey began his life as a family man (eventually with five
                        children), working to make a living.</p>
                    <p className={"text-[#373436] leading-6 tracking-wide"}>Mickey worked as a US Postal Service mail carrier in Albion, Maine, where he completed his rural route mid-day. Although a full-time career for most, Mickey considered this “only a half day’s work.” With plenty of daylight left, he focused his afternoons on other ways to make a buck— spreading lime or fertilizer for local farmers, buying and selling automobiles and Christmas tree growing. He seemingly originated the
                        concept of pick-your-own strawberries, when he purchased a 4 acre field in Albion. Mickey found buying, selling and trading a way to keep busy, always enjoying the thrill of the deal—unknowing that it would go anywhere.</p>
                </div>
                <div className={"relative"}>
                    <p className={"absolute bg-secondary spikes secondary -right-10 -top-4 z-20 w-5/12 p-8 rotate-6 font-headers font-bold text-[1rem] leading-none"}>
                        The Fairfield, ME auction house that became the original Marden’s storefront in 1964. The building included a do-it-yourself spray car wash for $0.25. Photographed in the mid-1980s.
                    </p>
                    <Image
                        src={"https://www.mardens.com/wp-content/uploads/2023/12/history-intro-1.jpg"}
                        className={"-z-10"}
                    />
                    <div className={"-translate-y-[30%] translate-x-[10%] z-10 flex flex-row"}>
                        <div className={"flex justify-center items-center bg-[#d8eff5] py-10 relative h-fit w-fit px-16 translate-x-10 translate-y-[70%] z-20"}>
                            <p className={"font-accent uppercase text-[2rem] font-bold"}>
                                What’s the deal<br/> with marden’s?
                            </p>
                        </div>
                        <p className={"absolute bg-secondary spikes secondary right-16 -bottom-16 z-20 w-5/12 p-8 -rotate-6 font-headers font-bold text-[1rem] leading-none"}>
                            Founder Mickey Marden, captured candidly on film at his desk. Photo by Ron Maxwell.
                        </p>
                        <Image
                            src={"https://www.mardens.com/wp-content/uploads/2023/12/history-intro-2.jpg"}
                        />
                    </div>
                </div>
            </section>
            <section id={"first-location"} className={"flex flex-row bg-secondary py-16 px-16"}>
                <div className={"relative"}>
                    <Image
                        src={"https://www.mardens.com/wp-content/uploads/2023/12/history-section-1-inset.png"}
                    />
                    <p className={"absolute bg-primary spikes -left-2 -bottom-6 z-20 w-5/12 p-4 font-headers font-bold text-[1rem] leading-4 text-secondary"}>
                        Marden’s Brewer, Maine: The third retail location. Opened and photographed in 1987.
                    </p>
                    <BadgeLabel className={"font-accent uppercase text-5xl w-[16rem] h-[16rem] absolute bottom-24 -right-24 rotate-12 z-10"} label={<>Real<br/>Deal<br/>Deals</>}/>
                </div>
                <div className={"flex flex-col px-8 w-5/12 mx-auto"}>
                    <h3 className={"font-accent text-[2rem] font-bold uppercase"}>A Passion for Purveying</h3>
                    <h2 className={"font-headers text-[3.375rem] font-black text-primary uppercase leading-[3rem]"}>From Salvage to sale</h2>
                    <div className={"flex flex-col gap-6 mt-6"}>
                        <p>With a knack for transactions, Mickey decided to become an auctioneer. He made the long trip to Iowa to attend auctioneer’s school, and once he returned home, he quickly began facilitating local events. Over time, Mickey came to own a small auction house in Fairfield.</p>
                        <p>Between events, patrons stopped by the auction house to shop Mickey’s available merchandise, priced as low as he saw fit. Witnessing the desire for a deal first-hand, he saw the potential for a business.</p>
                        <p>In 1964, Mickey obtained his retail license and opened up shop on Main Street in Fairfield, Maine. He set out to obtain inventory in an uncommon way, a way that would allow shockingly low prices on items people need and items they want. He refused to offer the same sales that everyone expected, because it isn’t a deal if you’re still paying the cost of the item – just knocking off the retailer’s mark-up wasn’t enough. Mickey began buying up whatever he could negotiate
                            on
                            and sell cheaper than anybody else. Over time, he found a steady flow of merchandise from many sources including store closings, closeouts, “damaged” freight from trucking companies and railroads, and eventually, insurance salvage.</p>
                    </div>
                </div>
            </section>
            <section id={"expansion"} className={"flex flex-row py-16 px-16"}>
                <div className={"flex flex-col px-8 w-[30%] mr-auto"}>
                    <h3 className={"font-accent text-[2rem] font-bold uppercase"}>Paving the Way</h3>
                    <h2 className={"font-headers text-[3.375rem] font-black text-primary uppercase leading-[3rem]"}>A Retail Revolution</h2>
                    <div className={"flex flex-col gap-6 mt-6"}>
                        <p>Using his uncommon method of resourcing inventory, he began offering an ever-changing supply of goods at deeply discounted prices. Patrons returned, bringing friends and family along for the thrill of the deal and the joy of the purchase.</p>
                        <p>As business increased, Mickey looked for every aspect of the business to be a deal — the retail location’s buildings, warehouses, and trucks, too! (The Marden’s, to this day, have never purchased a brand new building, warehouse, or truck.)</p>
                        <p>Mickey left his role as a mail carrier and began balancing his time between the store and his family, carving out Saturday nights as “family time” (a tradition we still honor to this day by closing at 5 pm on weekends).</p>
                        <p>The first Marden’s in Waterville paved the way – the business continues to flourish, and our roots remain planted firmly in our values. Three generations of the Marden family and thirteen locations later — Marden’s mission, focus, and business model have stayed the same.</p>
                    </div>
                </div>
                <div className={"relative"}>
                    <Image src={"https://www.mardens.com/wp-content/uploads/2023/12/history-section-2-inset.jpg"}/>
                    <p className={"absolute bg-secondary spikes secondary right-10 -bottom-10 z-20 w-5/12 p-8 font-headers font-bold text-[1rem] leading-none"}>
                        Mickey Marden alongside then Governor Angus King at a FAME (Finance Authority of Maine) event.
                    </p>
                </div>
            </section>

            <div className={"relative my-16 bg-secondary py-16 px-16"}>
                <div className={"relative w-fit mx-auto"}>
                    <Image src={"https://www.mardens.com/wp-content/uploads/2023/12/history-section-3-inset.jpg"}/>
                    <p className={"absolute bg-primary spikes right-10 -bottom-10 z-20 w-5/12 p-8 font-headers text-secondary font-bold text-[1rem] leading-none"}>
                        Mickey sourcing inventory in Jamesway Department store post-1985 Beaver Falls, PA historic tornado.
                    </p>
                </div>
            </div>

            <InstagramFeed/>
            <Footer/>
        </div>
    );
}