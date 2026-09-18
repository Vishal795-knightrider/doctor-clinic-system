import './globals.css';

export const metadata = {
  title: 'MediCare Clinic — Dr. Vishal Kashyap | Smart Digital Healthcare',
  description: 'Next-generation outpatient healthcare, zero waiting room delays, and certified clinical care in Moradabad.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#06080e] text-slate-100 min-h-screen selection:bg-blue-600 selection:text-white">{children}</body>
    </html>
  );
}

