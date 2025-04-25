import React from "react";
import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Auth_Context_Provider from "@/contexts/contexts.auth";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased`}
    >
    <Auth_Context_Provider>
        {children}
    </Auth_Context_Provider>
    </body>
    </html>
  );
}
const APP_NAME = "Wattmi Wattmi";
const APP_DEFAULT_TITLE = "Wattmi Wattmi";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata: Metadata = {
    applicationName: APP_NAME,
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: APP_DEFAULT_TITLE,
        startupImage: [
            '/ios-splash-screens/640x1136.png', // iPhone 5/SE (640x1136)
            { url: '/ios-splash-screens/375x667.png', media: '(device-width: 375px) and (device-height: 667px)' }, // iPhone 6/7/8
            { url: '/ios-splash-screens/414x736.png', media: '(device-width: 414px) and (device-height: 736px)' }, // iPhone 6+/7+/8+

            // Notched iPhones (X/XS/11 Pro/12/13/14/15)
            { url: '/ios-splash-screens/375x812.png', media: '(device-width: 375px) and (device-height: 812px)' }, // iPhone X/XS/11 Pro/12/13 Mini/14
            { url: '/ios-splash-screens/390x844.png', media: '(device-width: 390px) and (device-height: 844px)' }, // iPhone 12/13/14 (standard)
            { url: '/ios-splash-screens/428x926.png', media: '(device-width: 428px) and (device-height: 926px)' }, // iPhone 12/13/14 Pro Max

            // iPhone XR/11 (same width as Plus, but taller)
            { url: '/ios-splash-screens/414x896.png', media: '(device-width: 414px) and (device-height: 896px)' },

            // iPhone 14 Pro/15 (Dynamic Island)
            { url: '/ios-splash-screens/393x852.png', media: '(device-width: 393px) and (device-height: 852px)' }, // iPhone 14 Pro/15 Pro
            { url: '/ios-splash-screens/430x932.png', media: '(device-width: 430px) and (device-height: 932px)' },
            { url: '/ios-splash-screens/768x1024.png', media: '(device-width: 768px) and (device-height: 1024px)' },
        ],
    },
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        type: "website",
        siteName: APP_NAME,
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
    twitter: {
        card: "summary",
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
};

export const viewport: Viewport = {
    themeColor: "#FF57B4",
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
};
