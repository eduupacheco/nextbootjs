"use client"

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import squareIcon from "@/icons/square.svg"
import checkIcon from "@/icons/square-check.svg"

import backIcon from "@/icons/chevron-left.svg";

import {
    ListGroup,
    ListGroupItem,
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
                <h4 className="mx-2 d-inline">Notifications</h4>
            </div>
        </div>
        <ListGroup>
            <ListGroupItem>
                <div className="d-flex justify-content-between align-items-center">
                    <span>Push notifications</span>
                    <Image
                        priority
                        src={pushNotifications ? checkIcon : squareIcon}
                        width={15}
                        height={15}
                        className="pointer"
                        alt=""
                        onClick={() => {
                            setPushNotifications(!pushNotifications)
                        }}
                    />
                </div>
                <span className="fw-light small d-block">Get push notifications to find out what’s going on when there is a new contribution.</span>
            </ListGroupItem>
            <ListGroupItem>
                <div className="d-flex justify-content-between align-items-center">
                    <span>Email notifications</span>
                    <Image
                        priority
                        src={emailNotifications ? checkIcon : squareIcon}
                        width={15}
                        height={15}
                        className="pointer"
                        alt=""
                        onClick={() => {
                            setEmailNotifications(!emailNotifications)
                        }}
                    />
                </div>
                <span className="fw-light small d-block">Get emails to find out what’s going on when there is a new contribution.</span>
            </ListGroupItem>
        </ListGroup>
    </>
}