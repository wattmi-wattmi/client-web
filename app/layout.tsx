import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import RegisterSw from "@/app/components/register-sw";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                <RegisterSw />
            </body>
        </html>
    );
}

export const metadata: Metadata = {
    title: 'Wattmi Wattmi',
    description: 'A chat application with search-intensive features',
    applicationName: 'Wattmi Wattmi',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'black-translucent',
        title: 'Wattmi Wattmi',
    },
    formatDetection: {
        telephone: false,
    },
    manifest: '/manifest.json',
    icons: {
        icon: '/icons/favicon.ico',
        shortcut: '/icons/favicon.ico',
        apple: [
            '/icons/apple-touch-icon.png',
            { url: '/icons/touch-icon-ipad.png', sizes: '152x152' },
            { url: '/icons/touch-icon-iphone-retina.png', sizes: '180x180' },
            { url: '/icons/touch-icon-ipad-retina.png', sizes: '167x167' },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'Wattmi Wattmi',
        description: 'A chat application with search-intensive features',
        // creator: '@DavidWShadow',
        // images: ['https://yourdomain.com/icons/android-chrome-192x192.png'],
    },
    openGraph: {
        type: 'website',
        title: 'Wattmi Wattmi',
        description: 'A chat application with search-intensive features',
        siteName: 'Wattmi',
        // url: 'https://yourdomain.com',
        // images: ['https://yourdomain.com/icons/apple-touch-icon.png'],
    },
    other: {
        'msapplication-TileColor': '#2B5797',
        'msapplication-tap-highlight': 'no',
    },
};

export const viewport: Viewport = {
    themeColor: '#000000',
}
