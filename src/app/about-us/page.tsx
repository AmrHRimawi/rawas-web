import AboutUs from "@/components/pages/AboutUs";
import {aboutUsMetadata} from "@/utils/MetadataUtil";
import ContactUs from "@/components/pages/ContactUs";

export const metadata = aboutUsMetadata;

export default function AboutUsPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <AboutUs/>
            <ContactUs/>
        </div>
    )
        ;
}
