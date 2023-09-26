import Header from "@/components/header/Header";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import GoToTopButton from "@/components/reusable/gototop/GoToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PropFund",
  description:
    "way to invest in Real Estate , Start growing your passive income today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoToTopButton />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
