
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/css/styles.css';

import CustomSidebar from '../components/Sidebar';
import CustomNavbar from '../components/Navbar';

import Image from "next/image";

import instagramIcon from "../../public/instagram.svg";
import twitterIcon from "../../public/twitter.svg";
import mediumIcon from "../../public/medium.svg";
import linkedinIcon from "../../public/linkedin.svg";

import envelopeIcon from "../../public/envelope-solid.svg";
import envelopeOpenIcon from "../../public/envelope-open-solid.svg";

import {
    Card,
    CardTitle,
    ListGroup,
    ListGroupItem,
    Badge,
} from "reactstrap";

export default function DemoLayout({ children }) {
    return (
        <main className="row m-0">
            <div className="col-3 p-3 m-0 border-end">
                <CustomSidebar />
            </div>
            <div className="col p-0 m-0">
                <CustomNavbar />
                <div className="row p-0 m-0">
                    <div className="col-8 pt-2" style={{ overflowY: "auto", height: "95vh" }}>
                        {children}
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
        </main>
    )
}