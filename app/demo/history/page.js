
"use client";
import DemoLayout from "../layout";

import CardTextPreview from "../../components/CardPreviews/CardTextPreview";
import CardURLPreview from "../../components/CardPreviews/CardURLPreview";
import CardSharePreview from "../../components/CardPreviews/CardSharePreview";
import CardCommentPreview from "../../components/CardPreviews/CardCommentPreview";
import CardThreadPreview from "../../components/CardPreviews/CardThreadPreview";
import CardBlogPreview from "../../components/CardPreviews/CardBlogPreview";
import CardPollPreview from "../../components/CardPreviews/CardPollPreview";

function History() {
    return (
        <>
            <CardTextPreview />
            <CardURLPreview />
            <CardSharePreview />
            <CardCommentPreview />
            <CardThreadPreview />
            <CardBlogPreview />
            <CardPollPreview />
        </>
    )
}

History.layout = DemoLayout;
export default History;