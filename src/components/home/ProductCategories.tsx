import Spike from "../../images/spike-horizontal.svg";
import Stars from "../../images/badge-exclamation-background.svg";
import {ShakeyIcon} from "../ShakeyIcon.tsx";
import Clothing from "../../images/icons/clothing.svg";
import Fabric from "../../images/icons/fabric.svg";
import Flooring from "../../images/icons/flooring.svg";
import Food from "../../images/icons/food.svg";
import Footwear from "../../images/icons/footwear.svg";
import Furniture from "../../images/icons/furniture.svg";
import Hardware from "../../images/icons/hardware.svg";
import Mattresses from "../../images/icons/mattresses.svg";
import Seasonal from "../../images/icons/seasonal.svg";
import Arrow from "../../images/icons/bendy-arrow.svg";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {cn} from "@heroui/react";

export function ProductCategories()
{
    return (
        <div className={"flex lg:flex-row flex-col border-none lg:border-2 border-primary"}>
            <div className={"flex flex-col items-center justify-center bg-primary border-primary text-center w-full relative text-white py-12 px-6 sm:py-16 md:py-20 lg:py-12 lg:w-1/2 xl:w-1/3 lg:min-h-[500px] bg-cover bg-center"} style={{backgroundImage: `url("${Stars}")`}}>
                <div className={"hidden lg:block absolute w-4 -right-4 top-0 bottom-0 bg-repeat-y bg-contain"} style={{backgroundImage: `url("${Spike}")`}}/>
                <p className={"font-accent text-3xl sm:text-4xl md:text-5xl uppercase"}>What Might</p>
                <p className={"font-text text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[#d6eef3]"}>You Find?</p>
                <p className={"w-4/5 sm:w-3/5 mt-4 text-sm sm:text-base"}>A constantly changing selection from our top categories.</p>
            </div>
            <div className={"w-full flex flex-wrap items-center justify-center py-8 px-4 sm:px-6 md:px-8 lg:px-12"}>
                <ProductItem key={"nav-dropdown-item-clothing"} href={"/what-we-sell/clothing"} icon={Clothing} title={"Clothing"}/>
                <ProductItem key={"nav-dropdown-item-fabric"} href={"/what-we-sell/fabric"} icon={Fabric} title={"Fabric"}/>
                <ProductItem key={"nav-dropdown-item-flooring"} href={"/what-we-sell/flooring"} icon={Flooring} title={"Flooring"}/>
                <ProductItem key={"nav-dropdown-item-food"} href={"/what-we-sell/food"} icon={Food} title={"Food"}/>
                <ProductItem key={"nav-dropdown-item-footwear"} href={"/what-we-sell/footwear"} icon={Footwear} title={"Footwear"}/>
                <ProductItem key={"nav-dropdown-item-furniture"} href={"/what-we-sell/furniture"} icon={Furniture} title={"Furniture"}/>
                <ProductItem key={"nav-dropdown-item-hardware"} href={"/what-we-sell/hardware"} icon={Hardware} title={"Hardware"}/>
                <ProductItem key={"nav-dropdown-item-mattresses"} href={"/what-we-sell/mattresses"} icon={Mattresses} title={"Mattresses"}/>
                <ProductItem key={"nav-dropdown-item-seasonal"} href={"/what-we-sell/seasonal"} icon={Seasonal} title={"Seasonal"}/>
                <ProductItem key={"nav-dropdown-item-see-all"} href={"/what-we-sell"} icon={Arrow} title={"See All"}/>
            </div>
        </div>
    );
}

function ProductItem({icon, title, href}: { icon: string, title: string, href: string })
{
    const [hovering, setHovering] = useState(false);
    const navigate = useNavigate();
    return (
        <div
            key={`nav-dropdown-item-${title.toLowerCase().replace(" ", "-")}`}
            className={cn(
                "p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center rounded-md gap-4 sm:gap-6 md:gap-8 text-center",
                "hover:bg-primary hover:text-secondary transition-colors duration-300 cursor-pointer",
                "h-[7rem] w-[7rem] sm:h-[9rem] sm:w-[9rem] md:h-[10rem] md:w-[10rem] lg:h-[11rem] lg:w-[11rem] xl:h-[12rem] xl:w-[12rem]"
            )}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={() => navigate(href)}
        >
            <ShakeyIcon active={hovering} icon={icon} width={48} height={48} className="sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"/>
            <p className={"font-bold uppercase z-10 text-xs sm:text-sm md:text-base"}>{title}</p>
        </div>
    );

}