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
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
