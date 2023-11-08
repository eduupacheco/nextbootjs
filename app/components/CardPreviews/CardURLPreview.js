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
                        <span className="mx-2 fw-light small">Fri, 3 Nov 2023 at 13:00</span>
                        <Badge
                            color="dark"
                            pill
                            className="mx-2"
                        >
                            URL Post
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
                        <div class="col-md-4">
                            <img
                                src='https://www.wallsauce.com/images/blogs/office-wallpapers/Abstract-wallpaper-in-office.jpg'
                                className="img-fluid rounded-start"
                                style={{
                                    height: 180
                                }}
                            />
                        </div>
                        <div class="col-md-8">
                            <CardBody>
                                <CardTitle h6>Designing an Office Space that Prioritizes Your Health and Well-Being</CardTitle>
                                <CardText className="small fw-light">From setting up your workstation to taking walks, there are many ways office workers can create a healthier workspace.</CardText>
                                <CardText class="card-text d-flex justify-content-between">
                                    <small className="text-muted">
                                        ohsonline.com
                                    </small>
                                    <Image
                                        priority
                                        src={linkIcon}
                                        width={18}
                                        height={18}
                                        className="mx-1"
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