import {Link} from "@heroui/react";

export function CTA()
{
    return (
        <div className={"flex flex-col sm:flex-row border-t-2 border-b-2 border-primary sm:min-h-[180px] md:min-h-[200px]"}>
            <Link href={"/gift-cards"} className={"flex justify-center items-center grow py-8 sm:py-6 md:py-8 text-primary border-b-2 border-primary sm:border-b-0 sm:border-r-2 hover:bg-secondary uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-headers cursor-pointer transition-colors duration-300"}>
                gift cards
            </Link>
            <Link href={"return-refund-policy"} className={"flex flex-row gap-3 sm:gap-2 md:gap-4 sm:flex-col py-8 sm:py-6 md:py-8 border-b-2 border-primary sm:border-b-0 sm:border-r-2 justify-center items-center grow text-primary hover:bg-secondary uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-headers cursor-pointer transition-colors duration-300"}>
                Returns
                <span className={"font-accent text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl"}>&amp;</span>
                Refunds
            </Link>
            <Link href={"faq"} className={"flex justify-center items-center grow text-primary py-8 sm:py-6 md:py-8 hover:bg-secondary uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-headers cursor-pointer transition-colors duration-300"}>
                FAQs
            </Link>
        </div>
    );
}