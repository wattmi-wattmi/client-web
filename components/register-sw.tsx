'use client';
import React from 'react'

export default function RegisterSw() {
    React.useEffect(() => {
        console.log('[SW] Initializing...');
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then((reg) => console.log('[SW] Registered:', reg))
                .catch((err) => console.error('[SW] Registration failed:', err));
        } else {
            console.warn('[SW] Service Worker not supported.');
        }
    }, []);
    return null;
}
