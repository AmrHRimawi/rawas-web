import AboutUs from "@/components/pages/AboutUs";
import {aboutUsMetadata} from "@/utils/MetadataUtil";
import ContactUs from "@/components/pages/ContactUs";
import ScrollProgress from "@/components/ScrollProgress";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata = aboutUsMetadata;

export default function AboutUsPage() {
    return (
        <div className="relative w-full flex flex-col justify-center items-center">
            <ScrollProgress />
            <ParticleBackground />
            <AboutUs/>
            <ContactUs/>
        </div>
    );
}
