import Suppliers from "@/components/pages/Suppliers";
import {suppliersMetadata} from "@/utils/MetadataUtil";

export const metadata = suppliersMetadata;

export default function App() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Suppliers/>
        </div>
    );
}
