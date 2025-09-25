import ContactUs from "@/components/pages/ContactUs";
import {contactUsMetadata} from "@/utils/MetadataUtil";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata = contactUsMetadata;

export default function ContactUsPage() {
    return (
        <div className="relative w-full flex flex-col justify-center items-center">
            <ParticleBackground/>
            <ContactUs/>
        </div>
    );
}
