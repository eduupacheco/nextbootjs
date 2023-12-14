import Image from "next/image";

import approvedIcon from "@/icons/check-solid.svg";
import editIcon from "@/icons/pen-solid.svg";
import rejectIcon from "@/icons/rectangle-xmark-solid.svg";
import twitterIcon from "@/icons/twitter.svg";

import {
    Card,
    CardTitle,
    CardText,
    CardBody,
    Badge,
} from "reactstrap";

function CardThreadPreview() {
    return (
        <Card className="my-2">
            <CardBody>
                <CardTitle tag="h6" className="d-flex justify-content-between">
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
                            <span className="mx-2 fw-light small">Sat, 25 Oct 2023 at 21:07</span>
                            <Badge
                                color="dark"
                                pill
                                className="mx-2"
                            >
                                Thread
                            </Badge>
                        </div>
                    </div>
                    <div className="align-self-center">
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
                </CardTitle>
                <div className="row">
                    <div className="col-auto text-center flex-column d-none d-sm-flex">
                        <div className="row h-25">
                            <div className="col">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                        <h5 className="m-1">
                            <span className="badge rounded-pill bg-light border">&nbsp;</span>
                        </h5>
                        <div className="row h-50">
                            <div className="col border-end">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                    </div>
                    <div className="col py-2">
                        <Card>
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
                                </CardTitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto text-center flex-column d-none d-sm-flex">
                        <div className="row h-25">
                            <div className="col border-end">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                        <h5 className="m-1">
                            <span className="badge rounded-pill bg-light border">&nbsp;</span>
                        </h5>
                        <div className="row h-50">
                            <div className="col border-end">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                    </div>
                    <div className="col py-2">
                        <Card>
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
                                </CardTitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto text-center flex-column d-none d-sm-flex">
                        <div className="row h-25">
                            <div className="col border-end">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                        <h5 className="m-1">
                            <span className="badge rounded-pill bg-light border">&nbsp;</span>
                        </h5>
                        <div className="row h-50">
                            <div className="col border-end">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                    </div>
                    <div className="col py-2">
                        <Card>
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
                                </CardTitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto text-center flex-column d-none d-sm-flex">
                        <div className="row h-25">
                            <div className="col border-end">&nbsp;</div>
                            <div className="col">&nbsp;</div>
                        </div>
                        <h5 className="m-1">
                            <span className="badge rounded-pill bg-light border">&nbsp;</span>
                        </h5>
                    </div>
                    <div className="col py-2">
                        <Card>
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
                                </CardTitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <CardText>
                    <small className="text-muted">
                        Last updated 2 days ago
                    </small>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default CardThreadPreview;