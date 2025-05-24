import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Simple Calculator',
    short_name: 'Simpcalcy',
    description:
      'a simple calculator that performs addition, substraction, multiplication and division',
    start_url: '/',
    display: 'standalone',
    background_color: 'white',
    theme_color: 'white',
    icons: [
      {
        src: '/android-chrome-192x192.png', // Path to a 192x192 icon
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png', // Path to a 512x512 icon
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png', // Standard favicon size
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png', // Smaller favicon size
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png', // Apple touch icon for iOS devices
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/maskable_icon.png', // A maskable icon for Android adaptive icons
        sizes: 'any', // Or specify common sizes like '512x512'
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
