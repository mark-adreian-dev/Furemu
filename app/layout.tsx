import type { Metadata } from "next";
import { Inter } from "next/font/google";

import 'swiper/css';
import 'swiper/css/pagination';
import "@/app/globals.css";

const inter = Inter({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ["latin"],
  variable: "--font-inter",
  preload: false
});

export const metadata: Metadata = {
  title: "Heroku",
  description: "Heroku, your friendly anime dictionary find details on your favorite anime, manga and more",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en" className="scrollbar-thin scrollbar-thumb-accent scrollbar-track-darker-blue scrollbar-thumb-rounded-full bg-darker-blue">
      <body className={`bg-darker-blue ${inter.variable} relative`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}