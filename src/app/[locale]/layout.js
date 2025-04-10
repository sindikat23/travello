import { Geist, Geist_Mono, Volkhov } from "next/font/google";
import "./globals.css";
import Layout from "@/Layout/Layout";
import { Poppins } from 'next/font/google'
import { NextIntlClientProvider , hasLocale } from "next-intl";
const popins = Poppins({
  display: 'block',
  weight: ['100', '200', '400', '500', '600', '700',],
  subsets: ['latin'],
  variable: "--font-popins",
})
const volkhov = Volkhov({
  display: 'block',
  weight: ['400', '700',],
  subsets: ['latin'],
  variable: "--font-volkhov",
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params }) {
  const param = await params
  console.log(param);

  return (
    <html lang="" className={`${popins.variable} ${volkhov.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} popins antialiased bg-white dark:bg-gray-950 text-black dark:text-white`}
      >
        <Layout>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </Layout>
      </body>
    </html>
  );
}
