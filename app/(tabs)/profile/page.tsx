'use client';
import StreamContentFallback from "@/app/(tabs)/profile/components/fallbacks/stream-content-fallback";
import {Use_Auth_Context} from "@/contexts/auth-context";
import StreamContent from "@/app/(tabs)/profile/components/stream-content";

export default function ProfilePage() {
    const { me, loading } = Use_Auth_Context();
    if (loading) return <StreamContentFallback />
    return (
        <div className="px-container">
            <div className="container-content pt-10">
                <StreamContent me={me} />
            </div>
        </div>
    )
}



