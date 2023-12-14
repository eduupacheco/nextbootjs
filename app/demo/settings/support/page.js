"use client"

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Input, Card, CardBody, CardTitle, CardText } from "reactstrap";

import backIcon from "@/icons/chevron-left.svg";


export default function Page({ params }) {
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);
    const [text, setText] = useState('');

    const handleTextAreaClick = () => {
        setIsExpanded(true);
    };

    const handleSendButtonClick = () => {

    };

    const handleTextareaChange = (event) => {
        const newText = event.target.value;
        setText(newText);
    };

    const handleTextareaInput = () => {
        const textarea = document.getElementById('textarea-support');
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    return <>
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
                <h4 className="mx-2 d-inline">Technical Support</h4>
            </div>
        </div>
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
                    How can we help you?
                </h5>
                {isExpanded && (
                    <Input
                        id="textarea-support"
                        className="form-control fw-light w-100 no-border"
                        placeholder="How can we help you?"
                        type="textarea"
                        rows={2}
                        value={text}
                        onChange={handleTextareaChange}
                        style={{ overflowY: 'auto', fontSize: '18px', resize: 'none' }}
                        autoFocus
                        onFocus={handleTextareaInput}
                    />
                )}
                <Button
                    color="dark"
                    className={`align-self-end`}
                    onClick={handleSendButtonClick}
                    disabled={text.length == 0 || text.length > 500}
                >
                    Send
                </Button>
            </div>
        </div>
        <div className="mt-3 border-top">
            <h5 className="mt-2">Tickets</h5>
        </div>
        <Card className="mb-3">
            <CardBody>
                <CardTitle tag="h6" className="d-flex justify-content-between">
                    <div className="align-self-center">
                        <img
                            src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                            alt="..."
                            className="rounded-circle"
                            width={35}
                            height={35}
                        >
                        </img>
                        <span className="mx-2 fw-light">Eduardo Pacheco</span>
                    </div>
                    <div className="align-self-center">
                        <span className="fw-light text-muted small">ticket#00000102282828</span>
                    </div>
                </CardTitle>
                <CardText className="fw-light small">
                    Hello! I wanted to contact you guys because I have some issues in the inbox...
                </CardText>
            </CardBody>
        </Card>
        <Card className="mb-3">
            <CardBody>
                <CardTitle tag="h6" className="d-flex justify-content-between">
                    <div className="align-self-center">
                        <img
                            src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                            alt="..."
                            className="rounded-circle"
                            width={35}
                            height={35}
                        >
                        </img>
                        <span className="mx-2 fw-light">Eduardo Pacheco</span>
                    </div>
                    <div className="align-self-center">
                        <span className="fw-light text-muted small">ticket#00001022444828</span>
                    </div>
                </CardTitle>
                <CardText className="fw-light small">
                    Hi support, how can I schedule a Instagram post? I'm trying to connect my instagram account but there are some issues there...
                </CardText>
            </CardBody>
        </Card>
        <Card className="mb-3">
            <CardBody>
                <CardTitle tag="h6" className="d-flex justify-content-between">
                    <div className="align-self-center">
                        <img
                            src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                            alt="..."
                            className="rounded-circle"
                            width={35}
                            height={35}
                        >
                        </img>
                        <span className="mx-2 fw-light">Eduardo Pacheco</span>
                    </div>
                    <div className="align-self-center">
                        <span className="fw-light text-muted small">ticket#90001032544857</span>
                    </div>
                </CardTitle>
                <CardText className="fw-light small">
                    I like your new feature guys but how I can get the feed for approved post filtering by channel?
                </CardText>
            </CardBody>
        </Card>
    </>
}