'use client'
import { signOutUser } from "@/app/auth";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

export default function TopBar() {
    const {userLoggedIn} = useAuth();
    const router = useRouter();

    const signIn = () => {
        router.push('/signin');
    }

    const handleSignOut = () => {
        signOutUser();
        router.push('/');
        toast.success('Sign out successfully')
    }

    return (
        <div className="absolute top-4 right-10 z-10">
            {userLoggedIn ? 
                <Button onClick={handleSignOut} btnClass="btn-primary text-white uppercase" title='Sign out'/>
            :
                <Button onClick={() => signIn()} btnClass="btn-primary text-white uppercase" title='Sign in'/>
            }
        </div>
        
    )
}