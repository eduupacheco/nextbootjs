import Image from "next/image";

import approvedIcon from "@/icons/check-solid.svg";
import editIcon from "@/icons/pen-solid.svg";
import rejectIcon from "@/icons/rectangle-xmark-solid.svg";
import linkIcon from "@/icons/link-solid.svg";
import twitterIcon from "@/icons/twitter.svg";

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
                            <span className="mx-2 fw-light small">Fri, 3 Nov 2023 at 13:00</span>
                            <Badge
                                color="dark"
                                pill
                                className="mx-2"
                            >
                                URL Post
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
                    <div className="row g-0 m-0 p-0">
                        <div className="col-md-4">
                            <img
                                src='https://www.wallsauce.com/images/blogs/office-wallpapers/Abstract-wallpaper-in-office.jpg'
                                className="img-fluid rounded-start"
                                style={{
                                    height: 180
                                }}
                                alt=""
                            />
                        </div>
                        <div className="col-md-8">
                            <CardBody>
                                <CardTitle tag="h6">Designing an Office Space that Prioritizes Your Health and Well-Being</CardTitle>
                                <CardText className="small fw-light">From setting up your workstation to taking walks, there are many ways office workers can create a healthier workspace.</CardText>
                                <CardText className="card-text d-flex justify-content-between">
                                    <small className="text-muted">
                                        ohsonline.com
                                    </small>
                                    <Image
                                        priority
                                        src={linkIcon}
                                        width={18}
                                        height={18}
                                        className="mx-1"
                                        alt=""
                                    />
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <CardText>
                    <small className="text-muted">
                        Last updated 6 mins ago
                    </small>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default CardURLPreview;