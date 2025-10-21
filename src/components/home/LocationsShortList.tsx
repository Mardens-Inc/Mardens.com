import Stars from "../../images/badge-exclamation-background-white.svg";
import {MaineLocationPins} from "../../images/MaineLocationPins.svg.tsx";
import SinceBadge from "../../images/since-64-badge.svg";


export function LocationsShortList()
{
    return (
        <div className={"flex flex-row"}>
            <div className={"bg-cover bg-no-repeat w-1/2 h-[830px] bg-center flex items-center justify-center"} style={{backgroundImage: `url("${Stars}")`}}>
                <div className={"relative"}>
                    <img src={SinceBadge} alt="" className={"absolute top-20 left-0 z-10 rotate-[-25deg]"} width={250}/>
                    <MaineLocationPins size={500}/>
                </div>
            </div>
        </div>
    );
}