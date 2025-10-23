import {Hero} from "../components/home/Hero.tsx";
import {BenefitsSection} from "../components/home/BenefitsSection.tsx";
import {ProductCategories} from "../components/home/ProductCategories.tsx";
import {LocationsShortList} from "../components/home/LocationsShortList.tsx";
import {InstagramFeed} from "../components/InstagramFeed.tsx";
import {Footer} from "../components/Footer.tsx";
import {CTA} from "../components/home/CTA.tsx";
import {NewsLetterCTA} from "../components/home/NewsLetterCTA.tsx";

export default function Home()
{
    return (
        <div className={"flex flex-col min-h-screen -mt-16"}>
            <Hero/>
            <BenefitsSection/>
            <div className={"bg-[#f7f7f4] my-12 md:my-16 lg:my-20"}>
                <ProductCategories/>
                <div className={"h-12 md:h-16 lg:h-20"}></div>
                <LocationsShortList/>
            </div>
            <CTA />
            <NewsLetterCTA />
            <InstagramFeed/>
            <Footer/>
        </div>
    );
}