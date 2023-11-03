
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

import envelopeIcon from "../../public/envelope-solid.svg";
import envelopeOpenIcon from "../../public/envelope-open-solid.svg";

import pollIcon from "../../public/square-poll-vertical-solid.svg";

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
    Badge,
    Progress,
    Spinner
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
                    </div>
                    <div className="border-start m-0 p-0 col-4 pt-3">
                        <div className="px-3 pb-3">
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
                        <Card body className="mx-3 p-0 m-0">
                            <CardTitle tag="h3" className="d-flex justify-content-between px-3 py-2 border-bottom m-0">
                                <span>Messages</span>
                            </CardTitle>
                            <div className="p-0 m-0 pt-0" style={{ overflowY: 'auto', height: '50vh' }}>
                                <div className="border-bottom px-3 py-3">
                                    <div className="d-flex justify-content-between align-self-center">
                                        <div>
                                            <img
                                                src="https://static.fotor.com/app/features/img/aiface/advance/2.png"
                                                alt="..."
                                                className="rounded-circle"
                                                width={35}
                                                height={35}
                                            >
                                            </img>
                                            <span className="mx-2 fw-light">Victor Timely</span>
                                        </div>
                                        <Image
                                            className="align-self-center"
                                            priority
                                            src={envelopeIcon}
                                            width={15}
                                            height={15}
                                        />
                                    </div>
                                    <div className="pt-2">
                                        <span className="fw-light small">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </span>
                                    </div>
                                    <span style={{ fontSize: '12px' }} className="text-muted fw-light">Wed, 30 Oct 2023 at 17:41</span>
                                </div>
                                <div className="border-bottom px-3 py-3">
                                    <div className="d-flex justify-content-between align-self-center">
                                        <div>
                                            <img
                                                src="https://instasize.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmunkee%2Fimage%2Fupload%2Fw_1000%2Cc_fill%2Car_1%3A1%2Cg_auto%2Cr_max%2Fv1681855894%2Finstasize-website%2Flearn%2Fblonde-woman-selfie-instagram-influencer.webp&w=828&q=75"
                                                alt="..."
                                                className="rounded-circle"
                                                width={35}
                                                height={35}
                                            >
                                            </img>
                                            <span className="mx-2 fw-light">Caroline Danvers</span>
                                        </div>
                                        <Image
                                            className="align-self-center"
                                            priority
                                            src={envelopeOpenIcon}
                                            width={15}
                                            height={15}
                                        />
                                    </div>
                                    <div className="pt-2">
                                        <span className="fw-light small">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </span>
                                    </div>
                                    <span style={{ fontSize: '12px' }} className="text-muted fw-light">Wed, 30 Oct 2023 at 13:27</span>
                                </div>
                                <div className="border-bottom px-3 py-3">
                                    <div className="d-flex justify-content-between align-self-center">
                                        <div>
                                            <img
                                                src="https://assets-global.website-files.com/650865454c2393ac25711ff7/650865454c2393ac25714a3e_The%20best%20selfie%20Ideas%20for%20sm%20pfp.jpeg"
                                                alt="..."
                                                className="rounded-circle"
                                                width={35}
                                                height={35}
                                            >
                                            </img>
                                            <span className="mx-2 fw-light">Colleen Wing</span>
                                        </div>
                                        <Image
                                            className="align-self-center"
                                            priority
                                            src={envelopeOpenIcon}
                                            width={15}
                                            height={15}
                                        />
                                    </div>
                                    <div className="pt-2">
                                        <span className="fw-light small">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </span>
                                    </div>
                                    <span style={{ fontSize: '12px' }} className="text-muted fw-light">Tue, 29 Oct 2023 at 10:22</span>
                                </div>
                                <div className="border-bottom px-3 py-3">
                                    <div className="d-flex justify-content-between align-self-center">
                                        <div>
                                            <img
                                                src="https://instasize.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmunkee%2Fimage%2Fupload%2Fw_1000%2Cc_fill%2Car_1%3A1%2Cg_auto%2Cr_max%2Fv1682630058%2Finstasize-website%2Flearn%2Fblonde-girl-sitting-down-pink-jacket.webp&w=828&q=75"
                                                alt="..."
                                                className="rounded-circle"
                                                width={35}
                                                height={35}
                                            >
                                            </img>
                                            <span className="mx-2 fw-light">Yelena Belova</span>
                                        </div>
                                        <Image
                                            className="align-self-center"
                                            priority
                                            src={envelopeOpenIcon}
                                            width={15}
                                            height={15}
                                        />
                                    </div>
                                    <div className="pt-2">
                                        <span className="fw-light small">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </span>
                                    </div>
                                    <span style={{ fontSize: '12px' }} className="text-muted fw-light">Mon, 28 Oct 2023 at 12:01</span>
                                </div>
                                <div className="border-bottom px-3 py-3">
                                    <div className="d-flex justify-content-between align-self-center">
                                        <div>
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
                                        <Image
                                            className="align-self-center"
                                            priority
                                            src={envelopeOpenIcon}
                                            width={15}
                                            height={15}
                                        />
                                    </div>
                                    <div className="pt-2">
                                        <span className="fw-light small">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </span>
                                    </div>
                                    <span style={{ fontSize: '12px' }} className="text-muted fw-light">Fri, 25 Oct 2023 at 11:56</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Dashboard