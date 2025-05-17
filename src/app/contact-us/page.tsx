import ContactUs from "@/components/pages/ContactUs";
import {contactUsMetadata} from "@/utils/MetadataUtil";

export const metadata = contactUsMetadata;

export default function ContactUsPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <ContactUs/>
        </div>
    );
}
