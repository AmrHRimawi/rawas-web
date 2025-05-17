import Blogs from "@/components/pages/Blogs";
import {blogsMetadata} from "@/utils/MetadataUtil";

export const metadata = blogsMetadata;
export default function BlogsPage() {
    return <div className="w-full flex flex-col justify-center items-center"><Blogs/></div>;
}
