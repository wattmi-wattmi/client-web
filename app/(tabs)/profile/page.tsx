import { Suspense } from "react";
import StreamContent from "./components/stream-content";
import StreamContentFallback from "./components/fallbacks/stream-content-fallback";

export default async function ProfilePage() {
    return (
        <div className="px-container">
            <div className="container-content pt-10">
                <Suspense fallback={<StreamContentFallback />}>
                    <StreamContent />
                </Suspense>
            </div>
        </div>
    )
}



