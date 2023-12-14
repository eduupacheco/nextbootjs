
"use client";

import CardTextPreview from "@/components/CardPreviews/CardTextPreview";
import CardURLPreview from "@/components/CardPreviews/CardURLPreview";
import CardSharePreview from "@/components/CardPreviews/CardSharePreview";
import CardCommentPreview from "@/components/CardPreviews/CardCommentPreview";
import CardThreadPreview from "@/components/CardPreviews/CardThreadPreview";
import CardBlogPreview from "@/components/CardPreviews/CardBlogPreview";
import CardPollPreview from "@/components/CardPreviews/CardPollPreview";

export default function Page() {
    return (
        <>
            <div className="d-flex justify-content-between">
                <div className="align-items-center">
                    <h4>History</h4>
                </div>
            </div>
            <CardThreadPreview />
            <CardBlogPreview />
            <CardSharePreview />
            <CardCommentPreview />
        </>
    )
}