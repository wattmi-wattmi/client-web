import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Wattmi Wattmi',
        short_name: 'Wattmi',
        description: 'A chat application with search-intensive features',
        start_url: '/',
        display: 'fullscreen',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/icons/web-app-manifest-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icons/web-app-manifest-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
        orientation : 'portrait'
    }
}