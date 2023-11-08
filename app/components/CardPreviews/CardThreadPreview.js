import Image from "next/image";

import approvedIcon from "../../../public/check-solid.svg";
import editIcon from "../../../public/pen-solid.svg";
import rejectIcon from "../../../public/rectangle-xmark-solid.svg";
import linkIcon from "../../../public/link-solid.svg";

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
                        <span className="mx-2 fw-light small">Sat, 25 Oct 2023 at 21:07</span>
                        <Badge
                            color="dark"
                            pill
                            className="mx-2"
                        >
                            Thread
                        </Badge>
                    </div>
                    <div className="align-self-center">
                        <Image
                            priority
                            src={approvedIcon}
                            width={20}
                            height={20}
                            className="mx-1"
                        />
                        <Image
                            priority
                            src={editIcon}
                            width={16}
                            height={16}
                            className="mx-2"
                        />
                        <Image
                            priority
                            src={rejectIcon}
                            width={18}
                            height={18}
                            className="mx-1"
                        />
                    </div>
                </CardTitle>
                <div class="row">
                    <div class="col-auto text-center flex-column d-none d-sm-flex">
                        <div class="row h-25">
                            <div class="col">&nbsp;</div>
                            <div class="col">&nbsp;</div>
                        </div>
                        <h5 class="m-1">
                            <span class="badge rounded-pill bg-light border">&nbsp;</span>
                        </h5>
                        <div class="row h-50">
                            <div class="col border-end">&nbsp;</div>
                            <div class="col">&nbsp;</div>
                        </div>
                    </div>
                    <div class="col py-2">
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
                <div class="row">
                    <div class="col-auto text-center flex-column d-none d-sm-flex">
                        <div class="row h-25">
                            <div class="col border-end">&nbsp;</div>
                            <div class="col">&nbsp;</div>
                        </div>
                        <h5 class="m-1">
                            <span class="badge rounded-pill bg-light border">&nbsp;</span>
                        </h5>
                        <div class="row h-50">
                            <div class="col border-end">&nbsp;</div>
                            <div class="col">&nbsp;</div>
                        </div>
                    </div>
                    <div class="col py-2">
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
                <div class="row">
                    <div class="col-auto text-center flex-column d-none d-sm-flex">
                        <div class="row h-25">
                            <div class="col border-end">&nbsp;</div>
                            <div class="col">&nbsp;</div>
                        </div>
                        <h5 class="m-1">
                            <span class="badge rounded-pill bg-light border">&nbsp;</span>
                        </h5>
                        <div class="row h-50">
                            <div class="col border-end">&nbsp;</div>
                            <div class="col">&nbsp;</div>
                        </div>
                    </div>
                    <div class="col py-2">
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
                <div class="row">
                    <div class="col-auto text-center flex-column d-none d-sm-flex">
                        <div class="row h-25">
                            <div class="col border-end">&nbsp;</div>
                            <div class="col">&nbsp;</div>
                        </div>
                        <h5 class="m-1">
                            <span class="badge rounded-pill bg-light border">&nbsp;</span>
                        </h5>
                    </div>
                    <div class="col py-2">
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