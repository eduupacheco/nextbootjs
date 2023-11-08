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

function CardBlogPreview() {
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
                        <span className="mx-2 fw-light small">Fri, 17 Aug 2023 at 12:35</span>
                        <Badge
                            color="dark"
                            pill
                            className="mx-2"
                        >
                            Blog
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
                <Card className="mb-3">
                    <div class="row g-0 m-0 p-0">
                        <div class="col-md-4">
                            <img
                                src='https://static.instatext.io/prod/uploads/2021/01/19083558/instatext_children_education-scaled.jpg'
                                className="img-fluid rounded-start"
                                style={{
                                    height: 180
                                }}
                            />
                        </div>
                        <div class="col-md-8">
                            <CardBody>
                                <CardTitle h5>How to create a blog for Medium and make it professional?</CardTitle>
                                <CardText className="small fw-light">Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.</CardText>
                                <CardText class="card-text">
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