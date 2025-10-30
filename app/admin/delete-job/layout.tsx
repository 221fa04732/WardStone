import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik, Inter } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "WARDSTONE - Delete job",
    description: "Next-generation Space Defense Technology",
};

export default function DeleteJobLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<div className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} ${inter.variable} antialiased`}>{children}
        </div>
    );
}