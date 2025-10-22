export function CTA()
{
    return (
        <div className={"flex flex-col sm:flex-row border-t-2 border-b-2 border-primary sm:h-[200px]"}>
            <a href={"/gift-cards"} className={"flex justify-center items-center grow py-10 sm:py-0 text-primary border-b-2 sm:border-b-none hover:bg-secondary uppercase text-4xl font-bold font-headers cursor-pointer transition-background duration-300"}>
                gift cards
            </a>
            <a href={"return-refund-policy"} className={"flex flex-row gap-4 sm:gap-0 py-10 sm:py-0 sm:flex-col border-b-2 sm:border-b-none justify-center items-center grow text-primary hover:bg-secondary uppercase text-4xl font-bold font-headers cursor-pointer transition-background duration-300"}>
                Returns
                <span className={"font-accent text-black"}>&amp;</span>
                Refunds
            </a>
            <a href={"faq"} className={"flex justify-center items-center grow text-primary py-10 sm:py-0 hover:bg-secondary uppercase text-4xl font-bold font-headers cursor-pointer transition-background duration-300"}>
                FAQs
            </a>
        </div>
    );
}