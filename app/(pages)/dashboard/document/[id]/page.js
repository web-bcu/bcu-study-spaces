'use client'
import LayoutDashBoard from "@/components/LayoutDashBoard/LayoutDashBoard";
import ShowFiles from "@/components/ShowFiles";
import UploadFile from "@/components/UploadFiles";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Folder({params}) {
    const router = useRouter();
    // let parent = router.query;
    // console.log(params.id);
    const admin = useSelector((state) => state.admin)

    return (
        <LayoutDashBoard>
            {admin && <UploadFile parentId={params.id}/>}
            <div className="mt-20 w-full">
                <ShowFiles parentId={params.id}/>
            </div>
        </LayoutDashBoard>
    )
}