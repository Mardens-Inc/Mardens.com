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
        <div className={"flex flex-col lg:flex-row"}>
            <div className={"bg-cover bg-no-repeat w-full lg:w-1/2 min-h-[400px] lg:min-h-[830px] bg-center flex items-center justify-center py-12 lg:py-0"} style={{backgroundImage: `url("${Stars}")`}}>
                <div className={"relative w-[300px] sm:w-[400px] lg:w-[500px]"}>
                    <img src={SinceBadge} alt="" className={"absolute top-12 sm:top-20 left-0 z-10 rotate-[-25deg] w-32 sm:w-48 lg:w-[250px]"} />
                    <MaineLocationPins size="100%" hoveredLocation={hoveredLocation}/>
                </div>
            </div>
            <div className={"w-full flex flex-col lg:w-1/2 py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12"}>
                <h2 className={"font-headers text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary"}>14 Unique Maine<br/>
                    <span className={"flex flex-row gap-2 items-center"}>Locations <img src={Arrow} className={"w-12 sm:w-16 md:w-20 h-auto"} alt={""}/></span>
                </h2>
                <p className={"w-full sm:w-4/5 md:w-3/4 mt-4 text-sm sm:text-base"}>Each store is different—think different merchandise and different deals. Pick a favorite or stop by a few and find smart ways to save more.</p>
                <div className={"flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 mt-8 md:mt-10"}>
                    <ul className={"flex-1 min-w-[140px]"}>
                        <li className={"font-headers font-bold text-lg sm:text-xl mb-3 sm:mb-4 uppercase"}>Northern</li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors mb-1 text-sm sm:text-base"}
                            onMouseEnter={() => setHoveredLocation("Madawaska")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Madawaska
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors mb-1 text-sm sm:text-base"}
                            onMouseEnter={() => setHoveredLocation("Presque_Isle")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Presque Isle
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors mb-1 text-sm sm:text-base"}
                            onMouseEnter={() => setHoveredLocation("Houlton")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Houlton
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors mb-1 text-sm sm:text-base"}
                            onMouseEnter={() => setHoveredLocation("Licoln")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Lincoln
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors mb-1 text-sm sm:text-base"}
                            onMouseEnter={() => setHoveredLocation("Calis")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Calais
                        </li>
                    </ul>
                    <ul className={"flex-1 min-w-[140px]"}>
                        <li className={"font-headers font-bold text-lg sm:text-xl mb-3 sm:mb-4 uppercase"}>Central</li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors mb-1 text-sm sm:text-base"}
                            onMouseEnter={() => setHoveredLocation("Brewer")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Brewer
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors mb-1 text-sm sm:text-base"}
                            onMouseEnter={() => setHoveredLocation("Waterville")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Waterville
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors mb-1 text-sm sm:text-base"}
                            onMouseEnter={() => setHoveredLocation("Elseworth")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Ellsworth
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors mb-1 text-sm sm:text-base"}
                            onMouseEnter={() => setHoveredLocation("Farmington")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Farmington
                        </li>
                    </ul>
                    <ul className={"flex-1 min-w-[140px]"}>
                        <li className={"font-headers font-bold text-lg sm:text-xl mb-3 sm:mb-4 uppercase"}>Southern</li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors mb-1 text-sm sm:text-base"}
                            onMouseEnter={() => setHoveredLocation("Lewiston")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Lewiston
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors mb-1 text-sm sm:text-base"}
                            onMouseEnter={() => setHoveredLocation("Gray")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Gray
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors mb-1 text-sm sm:text-base"}
                            onMouseEnter={() => setHoveredLocation("Scarborough")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Scarborough
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors mb-1 text-sm sm:text-base"}
                            onMouseEnter={() => setHoveredLocation("Biddiford")}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            Biddeford
                        </li>
                        <li
                            className={"cursor-pointer hover:text-primary transition-colors mb-1 text-sm sm:text-base"}
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
                    className={"mt-8 md:mt-10 uppercase font-bold font-text tracking-widest spikes w-full sm:w-auto"}
                    as={Link}
                    href={"/locations"}
                >
                    See All Locations
                </Button>
            </div>
        </div>
    );
}