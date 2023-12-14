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
                        href="/demo/inbox"
                        active={pathname == '/demo/inbox'}
                        onClick={(e) => {
                            e.preventDefault();
                            router.push('/demo/inbox')
                        }}
                    >
                        <Image
                            priority
                            src={pathname == '/demo/inbox' ? inboxIconActive : inboxIcon}
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
                        href="/demo/approved"
                        active={pathname == '/demo/approved'}
                        onClick={(e) => {
                            e.preventDefault();
                            router.push('/demo/approved')
                        }}
                    >
                        <Image
                            priority
                            src={pathname == '/demo/approved' ? approvedIconActive : approvedIcon }
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
                        href="/demo/history"
                        active={pathname == '/demo/history'}
                        onClick={(e) => {
                            e.preventDefault();
                            router.push('/demo/history')
                        }}
                    >
                        <Image
                            priority
                            src={pathname == '/demo/history' ? historyIconActive : historyIcon }
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
                        href="/demo/settings"
                        active={pathname.startsWith('/demo/settings')}
                        onClick={(e) => {
                            e.preventDefault();
                            router.push('/demo/settings')
                        }}
                    >
                        <Image
                            priority
                            src={pathname.startsWith('/demo/settings') ? settingsIconActive : settingsIcon }
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