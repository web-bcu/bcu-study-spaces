import LayoutDashBoard from "@/components/LayoutDashBoard";
import ShowFiles from "@/components/ShowFiles";
import TopBar from "@/components/TopBar";
import UploadFile from "@/components/UploadFiles";

export default function Document() {
    return (
        <LayoutDashBoard>
            <UploadFile parentId=""/>
            <div className="mt-20 w-full">
                <ShowFiles parentId=""/>
            </div>
        </LayoutDashBoard>
    )
}