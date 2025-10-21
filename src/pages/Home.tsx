import {Hero} from "../components/home/Hero.tsx";
import {BenefitsSection} from "../components/home/BenefitsSection.tsx";
import {ProductCategories} from "../components/home/ProductCategories.tsx";

export default function Home()
{
    return (
        <div className={"flex flex-col"}>
            <Hero/>
            <BenefitsSection/>
            <ProductCategories/>
        </div>
    );
}