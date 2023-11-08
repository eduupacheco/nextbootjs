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

function CardURLPreview() {
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
                        <span className="mx-2 fw-light small">On Hold</span>
                        <Badge
                            color="dark"
                            pill
                            className="mx-2"
                        >
                            Share
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
                <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                <Card className="mb-3">
                    <CardBody>
                        <CardTitle tag="h6" className="align-self-center d-flex justify-content-between w-100">
                            <div>
                                <img
                                    src="https://www.immobiliariasantmarti.com/wp-content/uploads/2018/03/profile-img-1.jpg"
                                    alt="..."
                                    className="rounded-circle"
                                    width={35}
                                    height={35}
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

export default CardURLPreview;