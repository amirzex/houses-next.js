"use client";

import { usePathname } from "next/navigation";
import Header from "@/component/header/page";
import Footer from "@/component/footer/page";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isPanel = pathname.startsWith("/panel");

    return (
        <>
            {!isPanel && <Header />}
            {children}
            {!isPanel && <Footer />}
        </>
    );
}
