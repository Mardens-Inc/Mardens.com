export function Hero()
{
    return (
        <div id={"hero"} className={"flex flex-col items-start justify-center h-[500px] bg-cover bg-center bg-no-repeat md:px-16"}>
            <div className={"w-4/5 md:w-2/3 xl:w-3/5 max-w-[1600px] ml-20"}>
                <h1 className={"font-black font-headers text-primary uppercase leading-none text-7xl"}>Maine's Best Bargain Store</h1>
                <p className={"mt-4 text-black w-3/5"}>Purveyors of insurance salvages, closeouts, bankruptcies, liquidations, and good old fashioned deals.</p>
            </div>
        </div>
    );
}