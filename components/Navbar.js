"use client"
import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Input
} from "reactstrap";

function CustomNavbar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="border-bottom p-0 m-0" style={{ height: "5vh" }}>
                <NavbarBrand></NavbarBrand>
                <img
                    src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                    alt="..."
                    class="rounded-circle"
                    width={35}
                    height={35}>
                </img>
            </Navbar>
        </div>
    );
}

export default CustomNavbar;