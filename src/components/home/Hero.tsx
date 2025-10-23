export function Hero()
{
    return (
        <div id={"hero"} className={"flex flex-col items-start justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16"}>
            <div className={"w-full md:w-2/3 xl:w-3/5 max-w-7xl"}>
                <h1 className={"font-black font-headers text-primary uppercase leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"}>Maine's Best Bargain Store</h1>
                <p className={"mt-4 text-base sm:text-lg text-black md:w-4/5 lg:w-3/5"}>Purveyors of insurance salvages, closeouts, bankruptcies, liquidations, and good old fashioned deals.</p>
            </div>
        </div>
    );
}