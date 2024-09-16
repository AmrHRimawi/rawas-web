import AboutUs from "@/components/pages/AboutUs";
import ContactUs from "@/components/pages/ContactUs";

export default function AboutUsPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <AboutUs/>
            <ContactUs/>
        </div>
    )
        ;
}