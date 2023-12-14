"use client"

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import linkedinIcon from "@/icons/linkedin.svg"
import twitterIcon from "@/icons/twitter.svg"
import mediumIcon from "@/icons/medium.svg"
import instagramIcon from "@/icons/instagram.svg"
import plusIcon from "@/icons/plus.svg"

import backIcon from "@/icons/chevron-left.svg";

import {
    ListGroup,
    ListGroupItem,
} from "reactstrap";

export default function Page({ params }) {
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
                <h4 className="mx-2 d-inline">Add channel</h4>
            </div>
        </div>
        <ListGroup>
            <ListGroupItem
                className="d-flex align-items-center pointer"
            >
                <Image
                    priority
                    src={twitterIcon}
                    width={24}
                    height={24}
                    alt=""
                />
                <span className="mx-2 fw-light">Twitter</span>
                <Image
                    priority
                    src={plusIcon}
                    width={14}
                    height={14}
                    alt=""
                    style={{ marginLeft: 'auto' }}
                />
            </ListGroupItem>
            <ListGroupItem
                className="d-flex align-items-center pointer"
            >
                <Image
                    priority
                    src={linkedinIcon}
                    width={24}
                    height={24}
                    alt=""
                />
                <span className="mx-2 fw-light">LinkedIn</span>
                <Image
                    priority
                    src={plusIcon}
                    width={14}
                    height={14}
                    alt=""
                    style={{ marginLeft: 'auto' }}
                />
            </ListGroupItem>
            <ListGroupItem
                className="d-flex align-items-center pointer"
            >
                <Image
                    priority
                    src={mediumIcon}
                    width={24}
                    height={24}
                    alt=""
                />
                <span className="mx-2 fw-light">Medium</span>
                <Image
                    priority
                    src={plusIcon}
                    width={14}
                    height={14}
                    alt=""
                    style={{ marginLeft: 'auto' }}
                />
            </ListGroupItem>
            <ListGroupItem
                className="d-flex align-items-center pointer"
            >
                <Image
                    priority
                    src={instagramIcon}
                    width={24}
                    height={24}
                    alt=""
                />
                <span className="mx-2 fw-light">Instagram</span>
                <Image
                    priority
                    src={plusIcon}
                    width={14}
                    height={14}
                    alt=""
                    style={{ marginLeft: 'auto' }}
                />
            </ListGroupItem>
        </ListGroup>
    </>
}