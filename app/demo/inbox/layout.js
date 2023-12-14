"use client"

import { usePathname } from 'next/navigation';

export default function Layout(props) {
    const router = usePathname();
    const isModalActive = router.startsWith("/demo/interaction/");

    return (
        <div>
            {isModalActive ? props.modal : props.children}
        </div>
    )
}
