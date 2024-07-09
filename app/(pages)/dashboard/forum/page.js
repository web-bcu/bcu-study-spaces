import LayoutDashBoard from "@/components/LayoutDashBoard";
import PostCard from "@/components/PostCard";
import PostFormCard from "@/components/PostFormCard";

export default function Forum() {
    return (
        <LayoutDashBoard>
            <PostFormCard />
            <div className="flex flex-col gap-3">
                <PostCard />
                <PostCard />
            </div>
        </LayoutDashBoard>
    )
}