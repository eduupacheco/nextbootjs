
"use client";
import DemoLayout from "../layout";

import CardTextPreview from "../../components/CardPreviews/CardTextPreview";
import CardURLPreview from "../../components/CardPreviews/CardURLPreview";
import CardSharePreview from "../../components/CardPreviews/CardSharePreview";
import CardCommentPreview from "../../components/CardPreviews/CardCommentPreview";

function Approved() {
    return (
        <>
            <CardTextPreview />
            <CardURLPreview />
            <CardSharePreview />
            <CardCommentPreview />
        </>
    )
}

Approved.layout = DemoLayout;
export default Approved;