"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import keyIcon from "@/icons/key.svg";
import bellIcon from "@/icons/bell.svg";
import commentIcon from "@/icons/comment.svg";
import questionIcon from "@/icons/circle-question.svg";
import infoIcon from "@/icons/circle-info.svg";
import forwardIcon from "@/icons/chevron-right-gray.svg";
import twitterIcon from "@/icons/twitter.svg";
import linkedinIcon from "@/icons/linkedin.svg";

import {
    ListGroup,
    ListGroupItem,
} from "reactstrap";

export default function Settings() {
    const router = useRouter();

    return (
        <>
            <h5>Channels</h5>
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
                    <Image
                        priority
                        src={forwardIcon}
                        width={14}
                        height={14}
                        alt=""
                        style={{ marginLeft: 'auto' }}
                    />
                </ListGroupItem>
                <ListGroupItem
                    className="d-flex align-items-center pointer"
                    onClick={() => {
                        router.push('/demo/settings/channel/demo');
                    }}
                >
                    <div style={{ position: "relative" }}>
                        <Image
                            priority
                            src={linkedinIcon}
                            width={16}
                            height={16}
                            className="rounded-circle"
                            style={{ position: "absolute", bottom: -2, right: -2, padding: '2px', backgroundColor: 'white' }}
                        />
                        <img
                            src="https://static.fotor.com/app/features/img/aiface/advance/2.png"
                            className="rounded-circle"
                            width={35}
                            height={35}
                            alt=""
                        >
                        </img>
                    </div>
                    <span className="mx-2 fw-light">Victor Timely</span>
                    <Image
                        priority
                        src={forwardIcon}
                        width={14}
                        height={14}
                        alt=""
                        style={{ marginLeft: 'auto' }}
                    />
                </ListGroupItem>
            </ListGroup>
            <div className="mt-2 mb-3">
                <span
                    className="pointer"
                    onClick={() => {
                        router.push('/demo/settings/add')
                    }}>+ Add channel</span>
            </div>
            <h5>Settings</h5>
            <ListGroup className="mb-3">
                <ListGroupItem
                    className="d-flex align-items-center pointer"
                    onClick={() => {
                        router.push('/demo/settings/password')
                    }}
                >
                    <Image
                        priority
                        src={keyIcon}
                        width={24}
                        height={24}
                        alt=""
                    />
                    <span className="mx-2 fw-light">Change password</span>
                    <Image
                        priority
                        src={forwardIcon}
                        width={14}
                        height={14}
                        alt=""
                        style={{ marginLeft: 'auto' }}
                    />
                </ListGroupItem>
                <ListGroupItem
                    className="d-flex align-items-center pointer"
                    onClick={() => {
                        router.push('/demo/settings/notifications')
                    }}
                >
                    <Image
                        priority
                        src={bellIcon}
                        width={24}
                        height={24}
                        alt=""
                    />
                    <span className="mx-2 fw-light">Notifications</span>
                    <Image
                        priority
                        src={forwardIcon}
                        width={14}
                        height={14}
                        alt=""
                        style={{ marginLeft: 'auto' }}
                    />
                </ListGroupItem>
            </ListGroup>
            <h5>Support</h5>
            <ListGroup className="mb-3">
                <ListGroupItem
                    className="d-flex align-items-center pointer"
                    onClick={() => {
                        router.push('/demo/settings/support')
                    }}>
                    <Image
                        priority
                        src={questionIcon}
                        width={24}
                        height={24}
                        alt=""
                    />
                    <span className="mx-2 fw-light">Technical Support</span>
                    <Image
                        priority
                        src={forwardIcon}
                        width={14}
                        height={14}
                        alt=""
                        style={{ marginLeft: 'auto' }}
                    />
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center pointer">
                    <Image
                        priority
                        src={infoIcon}
                        width={24}
                        height={24}
                        alt=""
                    />
                    <span className="mx-2 fw-light">FAQ</span>
                    <Image
                        priority
                        src={forwardIcon}
                        width={14}
                        height={14}
                        alt=""
                        style={{ marginLeft: 'auto' }}
                    />
                </ListGroupItem>
            </ListGroup>
            <ListGroup className="mb-3">
                <ListGroupItem className="d-flex align-items-center pointer">
                    <span className="fw-light">Terms and conditions</span>
                    <Image
                        priority
                        src={forwardIcon}
                        width={14}
                        height={14}
                        alt=""
                        style={{ marginLeft: 'auto' }}
                    />
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center pointer">
                    <span className="fw-light">Privacy Policy</span>
                    <Image
                        priority
                        src={forwardIcon}
                        width={14}
                        height={14}
                        alt=""
                        style={{ marginLeft: 'auto' }}
                    />
                </ListGroupItem>
            </ListGroup>
            <div className="d-flex">
                <small className="text-muted fw-light" style={{ marginLeft: 'auto', opacity: 0.5 }}>NextBootJS v1.0.0</small>
            </div>
        </>
    )
}