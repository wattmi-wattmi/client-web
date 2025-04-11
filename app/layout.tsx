import type {Metadata, Viewport} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import RegisterSw from "@/components/register-sw";
import "./globals.css";
import Head from "next/head";
import Auth_Context_Provider from "@/contexts/auth-context";

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
        <Head>
            <link
                rel="apple-touch-startup-image"
                href="/icons/splash-640x1136.png"
                media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/splash-750x1334.png"
                media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            />
        </Head>

        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
            <Auth_Context_Provider>
                {children}
            </Auth_Context_Provider>
            <RegisterSw/>
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
            {url: '/icons/touch-icon-ipad.png', sizes: '152x152'},
            {url: '/icons/touch-icon-iphone-retina.png', sizes: '180x180'},
            {url: '/icons/touch-icon-ipad-retina.png', sizes: '167x167'},
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
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover',
    userScalable: false

}
