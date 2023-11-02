"use client";
import React, { useState } from 'react';
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
    Card,
} from 'reactstrap';

import Image from 'next/image';
import logo from '../../public/logo.png';
import inboxIcon from '../../public/inbox-solid.svg'
import approvedIcon from '../../public/check-solid.svg'
import historyIcon from '../../public/medium.svg'
import settingsIcon from '../../public/gear-solid.svg'

function CustomSidebar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Card className='p-4'>
            <Nav
                card
                pills
                vertical
                style={{ height: '90vh' }}
            >
                <div className='d-flex justify-content-center mb-4'>
                    <Image
                        priority
                        src={logo}
                        width={150}
                        height={150}
                    />
                </div>
                <NavItem>
                    <NavLink
                        className='text-dark'
                        href="#"
                        active
                    >
                        <Image
                            priority
                            src={inboxIcon}
                            width={24}
                            height={24}
                            className='mx-3'
                        />
                        <span>Inbox</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className='text-dark'
                        href="#"
                    >
                        <Image
                            priority
                            src={approvedIcon}
                            width={24}
                            height={24}
                            className='mx-3'
                        />
                        <span>Approved</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className='text-dark'
                        href="#"
                    >
                        <Image
                            priority
                            src={historyIcon}
                            width={24}
                            height={24}
                            className='mx-3'
                        />
                        <span>History</span>
                    </NavLink>
                </NavItem>
                <NavItem className='mt-auto'>
                    <NavLink
                        className='text-dark'
                        href="#"
                    >
                        <Image
                            priority
                            src={settingsIcon}
                            width={24}
                            height={24}
                            className='mx-3'
                        />
                        <span>Settings</span>
                    </NavLink>
                </NavItem>
            </Nav>
        </Card>
    );
}

export default CustomSidebar;