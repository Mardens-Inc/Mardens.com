import SpringBadge from "../../images/spring-badge.svg";
import ArrowBadge from "../../images/arrows-badge.svg";
import ExclamationBadge from "../../images/exclamation-badge.svg";
import SmileBadge from "../../images/smile-badge.svg";

export function BenefitsSection()
{
    return (
        <div className={"flex flex-col py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"}>
            <div className={"text-center max-w-5xl mx-auto"}>
                <h4 className={"uppercase text-2xl sm:text-3xl md:text-4xl font-accent"}>14 Unique Locations</h4>
                <h2 className={"uppercase text-3xl sm:text-4xl md:text-5xl font-headers text-primary font-bold mt-2"}>Maine's Best Discounts</h2>
            </div>

            <div className={"flex flex-col sm:flex-row flex-wrap gap-8 md:gap-6 lg:gap-8 mt-12 md:mt-16 lg:mt-20 max-w-7xl mx-auto justify-center"}>
                <BenefitCard
                    icon={SpringBadge}
                    title="Unexpected Deals"
                    description="We sell a wide variety of goods from overstocks, closeouts, liquidations, and natural disasters. Get quality products at the biggest possible discounts!"
                />
                <BenefitCard
                    icon={ArrowBadge}
                    title="We Buy Differently"
                    description="Our merchandise comes in limited quantities, and once it sells, it's gone for good. Visit often, as no day is the same and every store is different."
                />
                <BenefitCard
                    icon={ExclamationBadge}
                    title="In-store only"
                    description="We're not your typical retailer. We don't sell anything online. Get our great deals in-store only, and get them quickly as the best finds sell out fast!"
                />
                <BenefitCard
                    icon={SmileBadge}
                    title="Made for the hunt"
                    description="We live for the satisfaction of a crazy good deal. Every day is a new chance to hunt for feel-good finds that'll keep you coming back for a lifetime."
                />
            </div>

        </div>
    );
}

function BenefitCard({icon, title, description}: { icon: string, title: string, description: string })
{
    return (
        <div className={"flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row md:flex-col md:items-center md:text-center gap-4 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] lg:max-w-[280px]"}>
            <img src={icon} alt={""} className={"w-16 sm:w-20 md:w-24 flex-shrink-0"}/>
            <div className={"flex flex-col gap-2"}>
                <h5 className={"uppercase font-black tracking-wider leading-tight text-base sm:text-lg"}>{title}</h5>
                <p className={"text-sm sm:text-base leading-relaxed"}>{description}</p>
            </div>
        </div>
    );
}