
"use client";
import DemoLayout from "../layout";

import CardTextPreview from "../../components/CardPreviews/CardTextPreview";
import CardURLPreview from "../../components/CardPreviews/CardURLPreview";
import CardSharePreview from "../../components/CardPreviews/CardSharePreview";
import CardCommentPreview from "../../components/CardPreviews/CardCommentPreview";
import CardThreadPreview from "../../components/CardPreviews/CardThreadPreview";
import CardBlogPreview from "../../components/CardPreviews/CardBlogPreview";
import CardPollPreview from "../../components/CardPreviews/CardPollPreview";

import {
    Button,
} from "reactstrap";

function Inbox() {
    return (
        <>
            <div className="d-flex justify-content-end">
                <div>
                    <Button
                        color="dark"
                        className="mx-2"
                    >
                        Accept All
                    </Button>
                </div>
                <div>
                    <Button
                        className="dark"
                        outline
                    >
                        Refect All
                    </Button>
                </div>
            </div>
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

Inbox.layout = DemoLayout;
export default Inbox;