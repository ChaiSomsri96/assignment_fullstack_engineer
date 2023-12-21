import React, { ReactNode } from 'react';
import Head from "next/head";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>Simple Application</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="pt-10 md:pt-[120px]">
                {children}
            </div>
        </>
    );
}