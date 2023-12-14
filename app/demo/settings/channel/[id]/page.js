"use client"

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import backIcon from "@/icons/chevron-left.svg";
import twitterIcon from "@/icons/twitter.svg";

import {
    ListGroup,
    ListGroupItem,
    Button
} from "reactstrap";

export default function Page({ params }) {
    const [pushNotifications, setPushNotifications] = useState(true);
    const [emailNotifications, setEmailNotifications] = useState(false);
    const router = useRouter();

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
                <h4 className="mx-2 d-inline">Channel</h4>
            </div>
        </div>
        <div>
            <ListGroup>
                <ListGroupItem
                    className="d-flex align-items-center pointer"
                    onClick={() => {
                        router.push('/demo/settings/channel/demo');
                    }}
                >
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
                    <span className="mx-2 fw-light">Eduardo Pacheco</span>
                    <span className="fw-light text-muted small" style={{ marginLeft: 'auto'}}>Twitter account</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-center">
                    <Button
                        color="danger"
                        size="sm"
                        className="w-50"
                        outline
                    >
                        Disconnect
                    </Button>
                </ListGroupItem>
            </ListGroup>
        </div>
    </>
}