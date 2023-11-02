
"use client";
import CustomSidebar from "../components/Sidebar";
import CustomNavbar from "../components/Navbar";

import Image from "next/image";
import instagramIcon from "../../public/instagram.svg";
import twitterIcon from "../../public/twitter.svg";
import mediumIcon from "../../public/medium.svg";
import linkedinIcon from "../../public/linkedin.svg";

import approvedIcon from "../../public/check-solid.svg";
import editIcon from "../../public/pen-solid.svg";
import rejectIcon from "../../public/rectangle-xmark-solid.svg";

import commentIcon from "../../public/message-regular.svg";
import linkIcon from "../../public/link-solid.svg";

import {
    Table,
    Col,
    Card,
    CardTitle,
    CardText,
    CardBody,
    CardImg,
    ListGroup,
    ListGroupItem,
    Button,
    Badge
} from "reactstrap";

function Dashboard() {
    return (
        <main className="row m-0">
            <div className="col-3 p-3 m-0 border-end">
                <CustomSidebar />
            </div>
            <div className="col p-0 m-0">
                <CustomNavbar />
                <div className="row p-0 m-0">
                    <div className="col-8 pt-2" style={{ overflowY: "auto", height: "95vh" }}>
                        <div className="d-flex justify-content-end">
                            <div>
                                <Button
                                    color="dark"
                                    className="mx-2"
                                >
                                    Accept All
                                </Button>
                            </div>
                            <div>
                                <Button
                                    className="dark"
                                    outline
                                >
                                    Refect All
                                </Button>
                            </div>
                        </div>
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
                                        <span className="mx-2 fw-light small">Wed, 30 Dec 2023 at 18:07</span>
                                        <Badge
                                            color="dark"
                                            pill
                                            className="mx-2"
                                        >
                                            Text Post
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
                                <CardText className="mb-3">
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <CardText>
                                    <small className="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </CardText>
                            </CardBody>
                        </Card>
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
                                        <span className="mx-2 fw-light small">Mon, 2 Dec 2023 at 10:30</span>
                                        <Badge
                                            color="dark"
                                            pill
                                            className="mx-2"
                                        >
                                            Comment
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
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-auto text-center flex-column d-none d-sm-flex">
                                        <div class="row h-25">
                                            <div class="col border-end">&nbsp;</div>
                                            <div class="col">&nbsp;</div>
                                        </div>
                                        <h5 class="m-1">
                                            {/* <span class="badge rounded-pill bg-dark">&nbsp;</span> */}
                                            <Image
                                                priority
                                                src={commentIcon}
                                                width={20}
                                                height={20}
                                            />
                                        </h5>
                                    </div>
                                    <div class="col py-2">
                                        <Card className="border-dark">
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
                                                <CardText class="card-text d-flex justify-content-between">
                                                    <Badge color="dark" pill className="mx-1">
                                                        AI
                                                    </Badge>
                                                    <Badge color="dark" pill className="mx-1">
                                                        Marqueting
                                                    </Badge>
                                                    <Badge color="dark" pill className="mx-1">
                                                        Writters
                                                    </Badge>
                                                    <Badge color="dark" pill className="mx-1">
                                                        Articles
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
                    </div>
                    <div className="border-start m-0 p-0 col-4">
                        <div className="p-3">
                            <ListGroup>
                                <ListGroupItem>
                                    <Image
                                        priority
                                        src={instagramIcon}
                                        width={24}
                                        height={24}
                                    />
                                    <span className="mx-2">Instagram</span>
                                    <Badge pill>
                                        14
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Image
                                        priority
                                        src={twitterIcon}
                                        width={24}
                                        height={24}
                                    />
                                    <span className="mx-2">Twitter</span>
                                    <Badge pill>
                                        2
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Image
                                        priority
                                        src={mediumIcon}
                                        width={24}
                                        height={24}
                                    />
                                    <span className="mx-2">Medium</span>
                                    <Badge pill>
                                        6
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Image
                                        priority
                                        src={linkedinIcon}
                                        width={24}
                                        height={24}
                                    />
                                    <span className="mx-2">Linkedin</span>
                                    <Badge pill>
                                        5
                                    </Badge>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Dashboard