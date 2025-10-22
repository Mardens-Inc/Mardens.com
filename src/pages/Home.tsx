import {Hero} from "../components/home/Hero.tsx";
import {BenefitsSection} from "../components/home/BenefitsSection.tsx";
import {ProductCategories} from "../components/home/ProductCategories.tsx";
import {LocationsShortList} from "../components/home/LocationsShortList.tsx";
import {InstagramFeed} from "../components/InstagramFeed.tsx";
import {Footer} from "../components/Footer.tsx";

export default function Home()
{
    return (
        <div className={"flex flex-col"}>
            <Hero/>
            <BenefitsSection/>
            <div className={"bg-[#f7f7f4]"}>
                <ProductCategories/>
                <LocationsShortList/>
            </div>
            <InstagramFeed/>
            <Footer/>
        </div>
    );
}