"use client";

import { useState } from "react";
import Image from "next/image";

import { Button, Badge, Input, Card, CardBody, CardTitle, CardText } from "reactstrap";

import backIcon from "@/icons/chevron-left.svg";
import approvedIcon from "@/icons/check-solid.svg";
import editIcon from "@/icons/pen-solid.svg";
import rejectIcon from "@/icons/rectangle-xmark-solid.svg";
import twitterIcon from "@/icons/twitter.svg";

import { useRouter } from "next/navigation";

export default function Details({ params }) {
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);
    const [comment, setComment] = useState('');

    const handleTextAreaClick = () => {
        setIsExpanded(true);
    };

    const handleSendButtonClick = () => {

    };

    const handleTextareaChange = (event) => {
        const newFeedback = event.target.value;
        setComment(newFeedback);
    };

    const handleTextareaInput = () => {
        const textarea = document.getElementById('textarea-comment');
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    return (
        <div style={{ zIndex: 1, height: '90vh' }}>
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <Image
                        priority
                        src={backIcon}
                        width={15}
                        height={15}
                        className="mx-1 mt-2 pointer btn-back"
                        alt=""
                        onClick={() => {
                            router.back();
                        }}
                    />
                    <h4 className="mx-2 d-inline">Post</h4>
                </div>
                <div>
                    <Image
                        priority
                        src={approvedIcon}
                        width={20}
                        height={20}
                        className="mx-1"
                        alt=""
                    />
                    <Image
                        priority
                        src={editIcon}
                        width={16}
                        height={16}
                        className="mx-2"
                        alt=""
                    />
                    <Image
                        priority
                        src={rejectIcon}
                        width={18}
                        height={18}
                        className="mx-1"
                        alt=""
                    />
                </div>
            </div>
            <div className="mt-2">
                <div tag="h6" className="d-flex justify-content-between mb-2">
                    <div className="d-flex align-self-center">
                        <div style={{ position: "relative" }}>
                            <Image
                                priority
                                src={twitterIcon}
                                width={16}
                                height={16}
                                className="rounded-circle"
                                style={{ position: "absolute", bottom: -2, right: -2, padding: '2px', backgroundColor: 'white' }}
                            />
                            <img
                                src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                                className="rounded-circle"
                                width={35}
                                height={35}
                                alt=""
                            >
                            </img>
                        </div>
                        <div className="align-self-center">
                            <span className="mx-2 fw-light">Eduardo Pacheco</span>
                            <span className="mx-2 fw-light small">Wed, 30 Dec 2023 at 18:07</span>
                            <Badge
                                color="dark"
                                pill
                                className="mx-2"
                            >
                                Text Post
                            </Badge>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </div>
                <div>
                    <small className="text-muted">
                        Last updated 3 mins ago
                    </small>
                </div>
            </div>
            <div className="mt-3 border-top">
                <h5 className="mt-2">Comments</h5>
                <div className="d-flex mb-3">
                    <div className="mx-2 fixed">
                        <img
                            src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                            className="rounded-circle"
                            width={50}
                            height={50}
                            alt=""
                        />
                    </div>
                    <div className={`d-flex ${isExpanded ? "flex-column" : ""} w-100 align-self-center`}>
                        <h5
                            className={`fw-light text-muted w-100 mt-1 ${isExpanded && "d-none"} mx-2`}
                            onClick={handleTextAreaClick}
                        >
                            Type your comment
                        </h5>
                        {isExpanded && (
                            <Input
                                id="textarea-comment"
                                className="form-control fw-light w-100 no-border"
                                placeholder="Type your comment"
                                type="textarea"
                                rows={2}
                                value={comment}
                                onChange={handleTextareaChange}
                                style={{ overflowY: 'auto', fontSize: '18px', resize: 'none' }}
                                autoFocus
                                onFocus={handleTextareaInput}
                                onBlur={() => {
                                    if (comment.length == 0) {
                                        setIsExpanded(false);
                                    }
                                }}
                            />
                        )}
                        <Button
                            color="dark"
                            className={`align-self-end`}
                            onClick={handleSendButtonClick}
                            disabled={comment.length == 0 || comment.length > 500}
                        >
                            Send
                        </Button>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-end mb-3">
                        <Card style={{ borderColor: 'black'}}>
                            <CardBody>
                                <CardTitle tag="h6" className="d-flex justify-content-between">
                                    <span className="text-muted small">1s ago</span>
                                    <span className="fw-light small">Eduardo Pacheco</span>
                                </CardTitle>
                                <CardText className="small">
                                    Fantastic, definitely awesome! Let's post it.
                                </CardText>
                            </CardBody>
                        </Card>
                        <img
                            src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                            className="rounded-circle mx-3 mt-2"
                            width={35}
                            height={35}
                            alt=""
                        />
                    </div>
                    <div className="d-flex justify-content-start mb-3">
                        <img
                            src="https://static.fotor.com/app/features/img/aiface/advance/2.png"
                            className="rounded-circle mx-3 mt-2"
                            width={35}
                            height={35}
                            alt=""
                        />
                        <Card>
                            <CardBody>
                                <CardTitle tag="h6" className="d-flex justify-content-between">
                                    <span className="fw-light small">Victor Timely</span>
                                    <span className="text-muted small">2s ago</span>
                                </CardTitle>
                                <CardText className="small">
                                    Sure! Here is the final version :)
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="d-flex justify-content-end mb-3">
                        <Card style={{ borderColor: 'black'}}>
                            <CardBody>
                                <CardTitle tag="h6" className="d-flex justify-content-between">
                                    <span className="text-muted small">3 min ago</span>
                                    <span className="fw-light small">Eduardo Pacheco</span>
                                </CardTitle>
                                <CardText className="small">
                                    Yes I like it a lot. Could it be shorter?
                                </CardText>
                            </CardBody>
                        </Card>
                        <img
                            src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                            className="rounded-circle mx-3 mt-2"
                            width={35}
                            height={35}
                            alt=""
                        />
                    </div>
                    <div className="d-flex justify-content-start mb-3">
                        <img
                            src="https://static.fotor.com/app/features/img/aiface/advance/2.png"
                            className="rounded-circle mx-3 mt-2"
                            width={35}
                            height={35}
                            alt=""
                        />
                        <Card>
                            <CardBody>
                                <CardTitle tag="h6" className="d-flex justify-content-between">
                                    <span className="fw-light small">Victor Timely</span>
                                    <span className="text-muted small">4 min ago</span>
                                </CardTitle>
                                <CardText className="small">
                                    Let me know if you like the point of view about the post.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}