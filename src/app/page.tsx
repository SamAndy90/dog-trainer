import About from "@/components/Home/About/About";
import Helping from "@/components/Home/Helping/Helping";
import Hero from "@/components/Home/Hero/Hero";
import Reviews from "@/components/Home/Reviews/Reviews";
import Services from "@/components/Home/Services/Services";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <Helping />
            <Reviews />
        </>
    );
}
