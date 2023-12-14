import Image from "next/image";

import approvedIcon from "@/icons/check-solid.svg";
import editIcon from "@/icons/pen-solid.svg";
import rejectIcon from "@/icons/rectangle-xmark-solid.svg";
import mediumIcon from "@/icons/medium.svg";

import {
    Card,
    CardTitle,
    CardText,
    CardBody,
    Badge,
} from "reactstrap";

function CardBlogPreview() {
    return (
        <Card className="my-2">
            <CardBody>
                <CardTitle tag="h6" className="d-flex justify-content-between">
                    <div className="d-flex align-self-center">
                        <div style={{ position: "relative" }}>
                            <Image
                                priority
                                src={mediumIcon}
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
                            <span className="mx-2 fw-light small">Fri, 17 Aug 2023 at 12:35</span>
                            <Badge
                                color="dark"
                                pill
                                className="mx-2"
                            >
                                Blog
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
                <Card className="mb-3">
                    <div className="row g-0 m-0 p-0">
                        <div className="col-md-4">
                            <img
                                src='https://static.instatext.io/prod/uploads/2021/01/19083558/instatext_children_education-scaled.jpg'
                                className="img-fluid rounded-start"
                                style={{
                                    height: 180
                                }}
                                alt=""
                            />
                        </div>
                        <div className="col-md-8">
                            <CardBody>
                                <CardTitle h5>How to create a blog for Medium and make it professional?</CardTitle>
                                <CardText className="small fw-light">Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.</CardText>
                                <CardText className="card-text">
                                    <Badge color="light" pill className="border text-dark mx-1">
                                        AI
                                    </Badge>
                                    <Badge color="light" pill className="border text-dark mx-1">
                                        Marqueting
                                    </Badge>
                                    <Badge color="light" pill className="border text-dark mx-1">
                                        Writters
                                    </Badge>
                                    <Badge color="light" pill className="border text-dark mx-1">
                                        Article
                                    </Badge>
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <CardText>
                    <small className="text-muted">
                        Last updated 3 days ago
                    </small>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default CardBlogPreview;