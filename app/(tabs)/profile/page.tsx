import { Suspense } from "react";
import StreamContent from "@/app/(tabs)/profile/components/stream-content";
import StreamContentFallback from "@/app/(tabs)/profile/components/fallbacks/stream-content-fallback";
import { get_me } from "./actions/authenticate";

export default async function ProfilePage() {
    const me_response = get_me();
    return (
        <div className="px-container">
            <div className="container-content pt-10">
                <Suspense fallback={<StreamContentFallback />}>
                    <StreamContent  me_response={me_response} />
                </Suspense>
            </div>
        </div>
    )
}



