import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Foodie",
    template: "%s | Foodie",
  },
  description: "Best Fast Food in BD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="container mx-auto py-5 flex justify-between items-center">
          <h3 className="text-3xl font-bold">
            <Link href={"/"}>Foodie</Link>
          </h3>
          <div className="space-x-6">
            <button className="btn">
              <Link href={"/foods"}>Foods</Link>
            </button>
            <button className="btn">
              <Link href={"/reviews"}>Reviews</Link>
            </button>
          </div>
        </header>

        <main className="py-8 container mx-auto">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
