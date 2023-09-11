import {Header} from "@/components/Header";
import {MainSection} from "@/components/MainSection";
import Image from "next/image";
import {OurPlus} from "@/components/OurPlus";
import {OrderSection} from "@/components/OrderSection";
import {AssortmentSection} from "@/components/AssortmentSection";

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <MainSection/>
                <OurPlus/>
                <OrderSection/>
                <AssortmentSection/>
                {/*TODO: Бар и Карт (по верстки)*/}
            </main>
        </>
    )
}
