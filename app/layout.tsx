import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "LeaduxAI.id — AI Pinterest Publisher",
  description: "Публикуй пины в 1 клик с помощью AI. Автоматическая генерация, оптимизация и публикация контента в Pinterest.",
  keywords: ["pinterest", "AI", "publisher", "automation", "social media", "marketing"],
  authors: [{ name: "LeaduxAI" }],
  creator: "LeaduxAI.id",
  metadataBase: new URL("https://leaduxai.id"),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://leaduxai.id",
    title: "LeaduxAI.id — AI Pinterest Publisher",
    description: "Публикуй пины в 1 клик с помощью AI",
    siteName: "LeaduxAI.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeaduxAI.id — AI Pinterest Publisher",
    description: "Публикуй пины в 1 клик с помощью AI",
    creator: "@leaduxai",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
