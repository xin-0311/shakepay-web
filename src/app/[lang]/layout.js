import { Inter } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "./globals.css";
import {unstable_setRequestLocale} from 'next-intl/server';
import { locales } from "@/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "shakepayPro",
};

export default async function RootLayout({ children,  params: { locale } }) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" href="/assets/favicon.png"></link>
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}
