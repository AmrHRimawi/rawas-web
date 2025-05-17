import Consultants from "@/components/pages/Consultants";
import {consultantsMetadata} from "@/utils/MetadataUtil";

export const metadata = consultantsMetadata;

export default function ConsultantsPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Consultants/>
        </div>
    );
}
