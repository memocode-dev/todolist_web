import type {Metadata} from "next";
import {Inter as FontSans} from 'next/font/google';
import '../css/globals.css';
import {cn} from '@/lib/utils';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: 'ToDo List',
    description: 'Todo List For Web',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={cn(
                'flex flex-col min-h-screen bg-background font-sans',
                fontSans.variable
            )}
        >
        {children}
        </body>
        </html>
    );
}
