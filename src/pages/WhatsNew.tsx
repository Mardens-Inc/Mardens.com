import {BadgeLabel} from "../images/BadgeLabel.tsx";
import {Image, Link, Tooltip} from "@heroui/react";
import {ReactNode} from "react";
import {Footer} from "../components/Footer.tsx";

export function WhatsNew()
{
    return (
        <div className={"flex flex-col min-h-screen -mt-16 bg-[#d6eef3]"}>
            <div className={"flex flex-col items-start justify-center relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 bg-[#fec60b]"}>
                <div className={"w-full md:w-2/3 xl:w-3/5 max-w-7xl"}>
                    <h1 className={"font-black font-headers uppercase leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"}>Big Bargains At Marden’s</h1>
                    <p className={"mt-4 text-base md:w-4/5 lg:w-3/5"}>Here is just a peek at some of our latest, largest deals and current happenings at Marden’s. Remember, many of our best deals come in quantities too limited to advertise! Once they sell, they’re gone – so stop by one of our 13 locations today to experience the thrill of a true bargain hunting adventure.</p>
                </div>
                <BadgeLabel label={<>in-store<br/>only</>} className={"w-96 text-center rotate-[-15deg] absolute hidden lg:flex right-20 xl:right-[20%] top-20 text-primary uppercase font-headers font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl bottom-12"}/>
            </div>
            <div className={"flex flex-row flex-wrap mt-12 justify-center gap-14"}>
                <DealCard
                    title={"Fire deals at Marden’s "}
                    availability={"AVAILABLE IN ALL LOCATIONS 10.16.25 🔥"}
                    description={<>We now have fire blankets for $4.00! Designed to suffocate and snuff out fires, these are incredibly useful to have on hand at your home, apartment, camper, RV – anywhere. Great for putting out small household fires + campfires!<br/>❗To help prevent reselling and ensure more people can purchase, limit 6 per customer.</>}
                    image={"https://www.mardens.com/wp-content/uploads/2025/10/Fire-Blanket-Limit-100-768x497.jpg"}
                />
                <DealCard
                    title={"Fall Clean-up made easy (and cheap!) "}
                    availability={"Available in all locations. 10.11.25🌲"}
                    description={<>
                        We have a great deal on 58-volt, cordless pole saws that extend to reach up to 10 feet! Our price is $69.99. The saw has a 10-inch chain, an articulating cutting head, and includes a battery and charger.<br/>
                        Hurry in so you don’t get caught saying, “I should have bought it when I saw it at Marden’s!”
                    </>}
                    image={"https://www.mardens.com/wp-content/uploads/2025/10/LED-Stand-up-Tripod-25-100-768x497.jpg"}
                />
                <DealCard
                    title={"Trees"}
                    availability={"AVAILABLE IN ALL LOCATIONS 10.10.25   🎄"}
                    description={<>Just in! Stop by to snag this bargain: 6-foot artificial trees; the best price online is $69.99, our price is $29.99! Fire-resistant and easy to set-up and store, these make great decorative additions to any home/apartment.</>}
                    image={"https://www.mardens.com/wp-content/uploads/2025/10/LED-Stand-up-Tripod-25-copy-2-100-768x497.jpg"}
                />
                <DealCard
                    title={"Huge Deals on Tarps "}
                    availability={"AVAILABLE IN ALL LOCATIONS 8/29.25"}
                    description={<>
                        <p>
                            Fall is approaching🍂 and we have a great selection of tarps at bargain prices! All tarps are rain, UV, tear, and rip-resistant. Cover firewood, tents, boats, canopies, sheds, campers, & more for way, way less!
                        </p>
                        <p>🚤 Plus, secure your tarp with bungee cords, tarp clips and rope also available.</p>
                        <p>🍁 We have many sizes and 3 colors/thicknesses ranging from 5’x5′ to 40’x60′. Hurry in!</p>
                        <p className={"mt-4 font-bold"}>Pricing Examples:</p>
                        <ul className={"list-disc list-inside text-base"}>
                            <li><span className={"italic font-light underline"}>8×10 Green Heavy-Duty Tarp</span> <span className={"text-primary font-bold"}>$5.99</span></li>
                            <li><span className={"italic font-light underline"}>12×16 Blue Tarp</span> <span className={"text-primary font-bold"}>$7.99</span></li>
                            <li><span className={"italic font-light underline"}>12×16 Silver/Black Heavy-Duty Tarp</span> <span className={"text-primary font-bold"}>$15.9</span></li>
                            <li><span className={"italic font-light underline"}>20×20 Green Heavy Tarp</span><span className={"text-primary font-bold"}>$29.99</span></li>
                        </ul>
                        <br/>
                        <p>Not looking for a tarp? Don’t forget, we only advertise a small quantity of the great things we have in-store!</p>
                        <Tooltip content={"View Tag on Facebook"} radius={"none"} className={"bg-secondary text-primary font-headers text-xs sm:text-sm px-2 py-1"}>
                            <Link href={"https://www.facebook.com/hashtag/ishouldhaveboughtitwhenisawit?__eep__=6"} isExternal className={"mr-2"}>#mardens</Link>
                        </Tooltip>
                        <Tooltip content={"View Tag on Facebook"} radius={"none"} className={"bg-secondary text-primary font-headers text-xs sm:text-sm px-2 py-1"}>
                            <Link href={"https://www.facebook.com/hashtag/mardens?__eep__=6"} isExternal>#ishouldhaveboughtitwhenisawit</Link>
                        </Tooltip>
                    </>}
                    image={"https://www.mardens.com/wp-content/uploads/2022/10/Tarp-photo-e1666102682476-768x451.jpg"}
                />
            </div>
            <Footer/>
        </div>
    );
}

type DealCardProps = {
    title: string | ReactNode;
    availability: string | ReactNode;
    description: string | ReactNode;
    image: string;
}

function DealCard(props: DealCardProps)
{
    const {title, availability, description, image} = props;

    return (
        <div className={"flex flex-col gap-4 w-[600px] bg-white/70 p-6 rounded-lg shadow-lg"}>
            <Image
                width={545}
                src={image}
            />
            <h2>{title}</h2>
            <p>{availability}</p>
            <p>{description}</p>
        </div>
    );
}