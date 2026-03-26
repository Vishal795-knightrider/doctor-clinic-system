import './globals.css';

export const metadata = {
  title: 'MediCare Clinic — Dr. Vishal Kashyap',
  description: 'Expert medical care with compassion. Book your appointment today.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
