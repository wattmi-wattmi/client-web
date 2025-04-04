'use client';
import React from 'react'

export default function RegisterSw() {
    React.useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker
                    .register('/service-worker.js', { scope: '/' })
                    .then((reg) => console.log('[SW] Registered:', reg))
                    .catch((err) => console.error('[SW] Registration failed:', err));
            });
        }
    }, []);
    return null;
}
