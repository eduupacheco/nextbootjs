"use client";
import React, { useState } from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    Card,
} from 'reactstrap';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

import logo from '@/images/logo.png';
import inboxIcon from '@/icons/inbox-solid.svg';
import inboxIconActive from '@/icons/inbox-solid-white.svg';
import approvedIcon from '@/icons/check-solid.svg';
import approvedIconActive from '@/icons/check-solid-white.svg';
import historyIcon from '@/icons/hourglass-half.svg';
import historyIconActive from '@/icons/hourglass-half-white.svg';
import settingsIcon from '@/icons/gear-solid.svg';
import settingsIconActive from '@/icons/gear-solid-white.svg';

export default function CustomSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Card className='p-1 no-border'>
            <Nav
                card
                pills
                vertical
                style={{ height: '90vh' }}
            >
                <div className='d-flex justify-content-center mb-4 mt-5'>
                    <Image
                        priority
                        src={logo}
                        width={120}
                        height={120}
                        alt=""
                    />
                </div>
                <NavItem>
                    <NavLink
                        className='text-dark'
                        href="/inbox"
                        active={pathname == '/inbox'}
                        onClick={(e) => {
                            e.preventDefault();
                            router.push('/inbox')
                        }}
                    >
                        <Image
                            priority
                            src={pathname == '/inbox' ? inboxIconActive : inboxIcon}
                            width={24}
                            height={24}
                            className='mx-3'
                            alt=""
                        />
                        <span>Inbox</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className='text-dark'
                        href="/approved"
                        active={pathname == '/approved'}
                        onClick={(e) => {
                            e.preventDefault();
                            router.push('/approved')
                        }}
                    >
                        <Image
                            priority
                            src={pathname == '/approved' ? approvedIconActive : approvedIcon }
                            width={24}
                            height={24}
                            className='mx-3'
                            alt=""
                        />
                        <span>Approved</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className='text-dark'
                        href="/history"
                        active={pathname == '/history'}
                        onClick={(e) => {
                            e.preventDefault();
                            router.push('/history')
                        }}
                    >
                        <Image
                            priority
                            src={pathname == '/history' ? historyIconActive : historyIcon }
                            width={24}
                            height={24}
                            className='mx-3'
                            alt=""
                        />
                        <span>History</span>
                    </NavLink>
                </NavItem>
                <NavItem className='mt-auto'>
                    <NavLink
                        className='text-dark'
                        href="/settings"
                        active={pathname.startsWith('/settings')}
                        onClick={(e) => {
                            e.preventDefault();
                            router.push('/settings')
                        }}
                    >
                        <Image
                            priority
                            src={pathname.startsWith('/settings') ? settingsIconActive : settingsIcon }
                            width={24}
                            height={24}
                            className='mx-3'
                            alt=""
                        />
                        <span>Settings</span>
                    </NavLink>
                </NavItem>
            </Nav>
        </Card>
    );
}