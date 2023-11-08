import Image from "next/image";

import approvedIcon from "../../../public/check-solid.svg";
import editIcon from "../../../public/pen-solid.svg";
import rejectIcon from "../../../public/rectangle-xmark-solid.svg";
import pollIcon from "../../../public/square-poll-vertical-solid.svg";

import {
    Card,
    CardTitle,
    CardText,
    CardBody,
    Badge,
    Progress
} from "reactstrap";

function CardPollPreview() {
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
                        <span className="mx-2 fw-light small">Mon, 27 Sep 2023 at 10:05</span>
                        <Badge
                            color="dark"
                            pill
                            className="mx-2"
                        >
                            Poll
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
                    <div class="row g-0 m-0 p-0">
                        <CardBody>
                            <CardTitle h6>What is your favourite color?</CardTitle>
                            <div className="d-flex justify-content-between">
                                <label>Red</label>
                                <span className="text-muted small">15%</span>
                            </div>
                            <Progress
                                className="mb-2"
                                color="black"
                                value={15}
                            />
                            <div className="d-flex justify-content-between">
                                <label>Blue</label>
                                <span className="text-muted small">20%</span>
                            </div>
                            <Progress
                                className="mb-2"
                                color="black"
                                value={20}
                            />
                            <div className="d-flex justify-content-between">
                                <label>Green</label>
                                <span className="text-muted small">60%</span>
                            </div>
                            <Progress
                                className="mb-2"
                                color="black"
                                value={60}
                            />
                            <div className="d-flex justify-content-between">
                                <label>Red</label>
                                <span className="text-muted small">5%</span>
                            </div>
                            <Progress
                                className="mb-2"
                                color="black"
                                value={5}
                            />
                            <CardText>
                                <Image
                                    priority
                                    src={pollIcon}
                                    width={20}
                                    height={20}
                                />
                                <small className="text-muted mx-1">
                                    0 Votes
                                </small>
                            </CardText>
                        </CardBody>
                    </div>
                </Card>
                <CardText>
                    <small className="text-muted">
                        Last updated 5 days ago
                    </small>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default CardPollPreview;