import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Favourite beauty Spa Niamey - Centre de Bien-être Premium au Niger',
  description: 'Centre de massage professionnel à Niamey, Niger. Massage thérapeutique, kinésithérapie, épilation, drainage lymphatique, soins esthétiques. Quartier Recasement, 3ème latérite. Appelez +227 81 83 65 71',
  keywords: [
    'massage Niamey',
    'massage Niger',
    'kinésithérapie Niamey',
    'épilation Niamey',
    'drainage lymphatique Niger',
    'centre bien-être Niamey',
    'massage thérapeutique Niger',
    'soins esthétiques Niamey',
    'spa Niamey',
    'relaxation Niger',
    'massage professionnel Niamey',
    'kinésithérapeute Niger',
    'centre massage Niamey',
    'bien-être Niger',
    'massage femme Niamey',
    'massage homme Niger',
    'épilation définitive Niamey',
    'soins visage Niger',
    'pédicure Niamey',
    'manucure Niger',
    'favourite massage',
    'centre esthétique Niamey'
  ].join(', '),
  authors: [{ name: 'Favourite beauty Spa' }],
  creator: 'Favourite beauty Spa',
  publisher: 'Favourite beauty Spa',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://favourite-beauty-spa.com',
    siteName: 'Favourite beauty Spa',
    title: 'Favourite beauty Spa - Centre de Massage Professionnel à Niamey, Niger',
    description: 'Centre de massage et kinésithérapie premium à Niamey. Services professionnels de massage, épilation, drainage lymphatique et soins esthétiques au Niger.',
    images: [
      {
        url: '/image/favourite-massage-niamey.jpg',
        width: 1200,
        height: 630,
        alt: 'Favourite beauty Spa - Centre de bien-être à Niamey, Niger'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Favourite beauty Spa - Centre de Massage à Niamey, Niger',
    description: 'Centre de massage professionnel à Niamey. Massage thérapeutique, kinésithérapie, épilation et soins esthétiques au Niger.',
    images: ['/image/favourite-massage-niamey.jpg']
  },
  alternates: {
    canonical: 'https://favourite-beauty-spa.com'
  },
  other: {
    'geo.region': 'NE-8',
    'geo.placename': 'Niamey',
    'geo.position': '13.5116;2.1254',
    'ICBM': '13.5116, 2.1254'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="geo.region" content="NE-8" />
        <meta name="geo.placename" content="Niamey" />
        <meta name="geo.position" content="13.5116;2.1254" />
        <meta name="ICBM" content="13.5116, 2.1254" />
        <meta name="theme-color" content="#8B1538" />
        <meta name="msapplication-TileColor" content="#8B1538" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="favourite Massage" />
        <link rel="canonical" href="https://favourite-beauty-spa.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}