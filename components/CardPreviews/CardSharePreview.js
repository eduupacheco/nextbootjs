import Image from "next/image";

import approvedIcon from "@/icons/check-solid.svg";
import editIcon from "@/icons/pen-solid.svg";
import rejectIcon from "@/icons/rectangle-xmark-solid.svg";
import linkIcon from "@/icons/link-solid.svg";
import linkedinIcon from "@/icons/linkedin.svg";

import {
    Card,
    CardTitle,
    CardText,
    CardBody,
    Badge,
} from "reactstrap";

function CardSharePreview() {
    return (
        <Card className="my-2">
            <CardBody>
                <CardTitle tag="h6" className="d-flex justify-content-between">
                    <div className="d-flex align-self-center">
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
                            <span className="mx-2 fw-light small">On Hold</span>
                            <Badge
                                color="dark"
                                pill
                                className="mx-2"
                            >
                                Share
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
                <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="align-self-center d-flex justify-content-between w-100">
                            <div>
                                <img
                                    src="https://www.immobiliariasantmarti.com/wp-content/uploads/2018/03/profile-img-1.jpg"
                                    className="rounded-circle"
                                    width={35}
                                    height={35}
                                    alt=""
                                >
                                </img>
                                <span className="mx-2 fw-light">Sharon Carter</span>
                            </div>
                            <Image
                                priority
                                src={linkIcon}
                                width={18}
                                height={18}
                                className="mx-1 ml-auto align-self-center"
                                alt=""
                            />
                        </CardTitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                    </CardBody>
                </Card>
                <CardText>
                    <small className="text-muted">
                        Last updated 3 hours ago
                    </small>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default CardSharePreview;