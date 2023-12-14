
"use client";

import CardTextPreview from "@/components/CardPreviews/CardTextPreview";
import CardURLPreview from "@/components/CardPreviews/CardURLPreview";
import CardSharePreview from "@/components/CardPreviews/CardSharePreview";
import CardCommentPreview from "@/components/CardPreviews/CardCommentPreview";
import CardThreadPreview from "@/components/CardPreviews/CardThreadPreview";
import CardBlogPreview from "@/components/CardPreviews/CardBlogPreview";
import CardPollPreview from "@/components/CardPreviews/CardPollPreview";

import {
    Button,
} from "reactstrap";

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return (
        <>
            <div className="d-flex justify-content-between">
                <div className="align-items-center">
                    <h4>Inbox</h4>
                </div>
                <div className="align-items-center">
                    <Button
                        color="dark"
                        className="mx-2"
                    >
                        Approve All
                    </Button>
                    <Button
                        className="dark"
                        outline
                    >
                        Reject All
                    </Button>
                </div>
            </div>
            <div onClick={() => {
                router.push('/demo/interaction/demo')
            }}>
                <CardTextPreview />
            </div>
            <div onClick={() => {
                router.push('/demo/interaction/demo')
            }}>
                <CardURLPreview />
            </div>
            <div onClick={() => {
                router.push('/demo/interaction/demo')
            }}>
                <CardSharePreview />
            </div>
            <div onClick={() => {
                router.push('/demo/interaction/demo')
            }}>
                <CardCommentPreview />
            </div>
            <div onClick={() => {
                router.push('/demo/interaction/demo')
            }}>
                <CardThreadPreview />
            </div>
            <div onClick={() => {
                router.push('/demo/interaction/demo')
            }}>
                <CardBlogPreview />
            </div>
            <div onClick={() => {
                router.push('/demo/interaction/demo')
            }}>
                <CardPollPreview />
            </div>
        </>
    )
}