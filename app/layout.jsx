import React from "react";
import "@/assets/global.css";
import "@/assets/nav.css";
import "@/assets/hero.css";
import "@/assets/about.css";
import "@/assets/technologies.css";
import "@/assets/footer.css";
import "@/assets/experience.css";
import "@/assets/contact.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Martin Spassov | Portfolio",
  keywords: "Martin, Spassov, Portfolio, Personal, Website, Product Management",
};

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const MainLayout = ({ children }) => {
  return (
    <html>
      <body className={`${poppinsFont.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
