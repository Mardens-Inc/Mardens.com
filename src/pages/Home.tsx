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
        <div className={"flex flex-col overflow-x-hidden sm:overflow-visible"}>
            <Hero/>
            <BenefitsSection/>
            <div className={"bg-[#f7f7f4]"}>
                <ProductCategories/>
                <LocationsShortList/>
            </div>
            <CTA />
            <NewsLetterCTA />
            <InstagramFeed/>
            <Footer/>
        </div>
    );
}