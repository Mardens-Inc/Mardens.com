import Stars from "../../images/badge-exclamation-background-white.svg";
import {MaineLocationPins} from "../../images/MaineLocationPins.svg.tsx";
import SinceBadge from "../../images/since-64-badge.svg";
import Arrow from "../../images/arrow-curved.svg";
import {Button, Link} from "@heroui/react";
import {useState} from "react";


export function LocationsShortList()
{
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

    return (
        <div className={"flex flex-row"}>
            <div className={"bg-cover bg-no-repeat w-1/2 h-[830px] bg-center hidden lg:flex items-center justify-center"} style={{backgroundImage: `url("${Stars}")`}}>
                <div className={"relative"}>
                    <img src={SinceBadge} alt="" className={"absolute top-20 left-0 z-10 rotate-[-25deg]"} width={250}/>
                    <MaineLocationPins size={500} hoveredLocation={hoveredLocation}/>
                </div>
            </div>
            <div className={"w-full flex flex-col lg:w-1/2 p-4 md:p-8 lg:p-12 my-14"}>
                <h2 className={"font-headers text-5xl font-bold text-primary"}>14 Unique Maine<br/>
                    <span className={"flex flex-row gap-2"}>Locations <img src={Arrow} className={"mt-7"} alt={""} width={80} height={30}/></span>
                </h2>
                <p className={"w-3/4 mt-4"}>Each store is different—think different merchandise and different deals. Pick a favorite or stop by a few and find smart ways to save more.</p>
                <div className={"flex flex-row flex-wrap w-full md:flex-nowrap gap-4 mt-10 justify-between md:w-3/4"}>
                    <ul>
                        <li className={"font-headers font-bold text-xl mb-4 uppercase"}>Northern</li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors"}
                            onMouseEnter={() => setHoveredLocation("Madawaska")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Madawaska
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors"}
                            onMouseEnter={() => setHoveredLocation("Presque_Isle")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Presque Isle
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors"}
                            onMouseEnter={() => setHoveredLocation("Houlton")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Houlton
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors"}
                            onMouseEnter={() => setHoveredLocation("Licoln")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Lincoln
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors"}
                            onMouseEnter={() => setHoveredLocation("Calis")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Calais
                        </li>
                    </ul>
                    <ul>
                        <li className={"font-headers font-bold text-xl mb-4 uppercase"}>Central</li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors"}
                            onMouseEnter={() => setHoveredLocation("Brewer")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Brewer
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors"}
                            onMouseEnter={() => setHoveredLocation("Waterville")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Waterville
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors"}
                            onMouseEnter={() => setHoveredLocation("Elseworth")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Ellsworth
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors"}
                            onMouseEnter={() => setHoveredLocation("Farmington")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Farmington
                        </li>
                    </ul>
                    <ul>
                        <li className={"font-headers font-bold text-xl mb-4 uppercase"}>Southern</li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors"}
                            onMouseEnter={() => setHoveredLocation("Lewiston")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Lewiston
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors"}
                            onMouseEnter={() => setHoveredLocation("Gray")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Gray
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors"}
                            onMouseEnter={() => setHoveredLocation("Scarborough")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Scarborough
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors"}
                            onMouseEnter={() => setHoveredLocation("Biddiford")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Biddeford
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors"}
                            onMouseEnter={() => setHoveredLocation("Sanford")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Sanford
                        </li>
                    </ul>
                </div>
                <Button
                    radius={"none"}
                    color={"primary"}
                    size={"lg"}
                    className={"mt-8 uppercase font-bold font-text space tracking-widest spikes"}
                    as={Link}
                    href={"/locations"}
                >
                    See All Locations
                </Button>
            </div>
        </div>
    );
}