import SpringBadge from "../../images/spring-badge.svg";
import ArrowBadge from "../../images/arrows-badge.svg";
import ExclamationBadge from "../../images/exclamation-badge.svg";
import SmileBadge from "../../images/smile-badge.svg";

export function BenefitsSection()
{
    return (
        <div className={"flex flex-col mx-auto my-20"}>
            <div className={"text-center"}>
                <h4 className={"uppercase text-4xl font-accent"}>14 Unique Locations</h4>
                <h2 className={"uppercase text-5xl font-headers text-primary font-bold max-w-[80%] mx-auto"}>Maine's Best Discounts</h2>
            </div>

            <div className={"flex flex-col md:flex-row flex-wrap px-8 mt-20 lg:flex-nowrap lg:max-w-6xl md:max-w-full md:px-4"}>
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
        <div className={"flex flex-row sm:gap-4 items-start w-full sm:px-8 md:flex-col md:gap-0 md:w-1/4 sm:mb-16 lg:mb-0 lg:px-4"}>
            <img src={icon} alt={""} className={"w-20 md:mb-4 hidden sm:block"}/>
            <div className={"flex flex-col"}>
                <h5 className={"w-full uppercase font-black tracking-wider leading-tight mt-6 xs:mt-0 lg:mt-8 text-base"}>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}