export function CTA()
{
    return (
        <div className={"flex flex-row border-t-2 border-b-2 border-primary h-[200px]"}>
            <a href={"/gift-cards"} className={"flex justify-center items-center grow text-primary hover:bg-secondary uppercase text-4xl font-bold font-headers cursor-pointer transition-background duration-300"}>
                gift cards
            </a>
            <a href={"return-refund-policy"} className={"flex flex-col justify-center items-center grow text-primary hover:bg-secondary uppercase text-4xl font-bold font-headers cursor-pointer transition-background duration-300"}>
                Returns
                <span className={"font-accent text-black"}>&amp;</span>
                Refunds
            </a>
            <a href={"faq"} className={"flex justify-center items-center grow text-primary hover:bg-secondary uppercase text-4xl font-bold font-headers cursor-pointer transition-background duration-300"}>
                FAQs
            </a>
        </div>
    );
}