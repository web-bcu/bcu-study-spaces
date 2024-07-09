'use client'
import LayoutDashBoard from "@/components/LayoutDashBoard";
import ShowFiles from "@/components/ShowFiles";
import TopBar from "@/components/TopBar";
import UploadFile from "@/components/UploadFiles";
import { useRouter } from "next/navigation";

export default function Folder({params}) {
    const router = useRouter();
    // let parent = router.query;
    console.log(params.id);

    return (
        <LayoutDashBoard>
            <TopBar/>
            <UploadFile parentId={params.id}/>
            <div className="mt-20 w-full">
                <ShowFiles parentId={params.id}/>
            </div>
        </LayoutDashBoard>
    )
}