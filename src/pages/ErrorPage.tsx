import BannerImage from "../images/sad-puppy.jpg";
import {Button, Link} from "@heroui/react";
import {InstagramFeed} from "../components/InstagramFeed.tsx";
import {Footer} from "../components/Footer.tsx";

export function ErrorPage()
{
    return (
        <div>

            <div className={"flex flex-col items-start justify-center h-[500px] bg-cover bg-center bg-no-repeat md:px-16"} style={{backgroundImage: `url("${BannerImage}")`}}>
                <div className={"w-1/2 max-w-[1600px] ml-20"}>
                    <h1 className={"font-black font-headers text-primary uppercase leading-none text-7xl"}>You Can't Get There From Here</h1>
                </div>
            </div>
            <div className={"flex flex-col items-center justify-center h-[300px] bg-[#d6eef3]"}>
                <p className={"text-2xl"}>Sorry, but the page you were trying to view does not exist.</p>

                <Button
                    radius={"none"}
                    color={"secondary"}
                    size={"lg"}
                    className={"mt-8 uppercase font-bold font-text space tracking-widest spikes secondary"}
                    as={Link}
                    href={"/"}
                >
                    return to the homepage
                </Button>
            </div>
            <InstagramFeed/>
            <Footer/>
        </div>
    );
}