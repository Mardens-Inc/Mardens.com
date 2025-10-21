import BannerImage from "../../images/mardens-home-2.jpg";

export function Hero()
{
    return (
            <div className={"flex flex-col items-start justify-center h-[500px] bg-cover bg-center bg-no-repeat md:px-16"} style={{backgroundImage: `url("${BannerImage}")`}}>
                <div className={"w-4/5 md:w-2/3 xl:w-3/5 max-w-[1600px]"}>
                    <h1 className={"font-black font-headers text-primary uppercase leading-none text-7xl"}>Maine's Best Bargain Store</h1>
                    <p className={"mt-4 text-black w-1/2"}>Purveyors of insurance salvages, closeouts, bankruptcies, liquidations, and good old fashioned deals.</p>
                </div>
            </div>
    );
}