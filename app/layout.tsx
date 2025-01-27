import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Naija Classroom",
  description: "An E-learning platform for Nigerian students and lecturers",
  icons: {
    icon: [
      {
        url: '/Naijaclassroom 2.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/Naijaclassroom 2.svg',
    apple: '/Naijaclassroom 2.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        suppressHydrationWarning 
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
