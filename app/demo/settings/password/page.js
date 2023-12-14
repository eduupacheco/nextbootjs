"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Input, Button } from "reactstrap";

import backIcon from "@/icons/chevron-left.svg";

import {
    ListGroup,
    ListGroupItem,
} from "reactstrap";

export default function Page({ params }) {
    const router = useRouter();

    const handleSaveButtonClick = () => {

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
                <h4 className="mx-2 d-inline">Change password</h4>
            </div>
        </div>
        <div>
            <ListGroup>
                <ListGroupItem>
                    <Input
                        className="input-border mt-2"
                        placeholder="Current password"
                        type="password"
                    />
                    <small>Forgot password?</small>
                </ListGroupItem>
                <ListGroupItem>
                    <Input
                        className="input-border mt-2 mb-2"
                        placeholder="New password"
                        type="password"
                    />
                    <Input
                        className="input-border mb-2"
                        placeholder="Confirm password"
                        type="password"
                    />
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-center">
                    <Button
                        color="dark"
                        className={`w-25`}
                        onClick={handleSaveButtonClick}
                    >
                        Save
                    </Button>
                </ListGroupItem>
            </ListGroup>
        </div>
    </>
}