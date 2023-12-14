
"use client";

import CardTextPreview from "@/components/CardPreviews/CardTextPreview";
import CardURLPreview from "@/components/CardPreviews/CardURLPreview";
import CardSharePreview from "@/components/CardPreviews/CardSharePreview";
import CardCommentPreview from "@/components/CardPreviews/CardCommentPreview";

export default function Page() {
    return (
        <>
            <div className="d-flex justify-content-between">
                <div className="align-items-center">
                    <h4>Approved</h4>
                </div>
            </div>
            <CardTextPreview />
            <CardURLPreview />
            <CardSharePreview />
            <CardCommentPreview />
        </>
    )
}