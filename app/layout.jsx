import React from "react";
import "@/assets/global.css";
import "@/assets/nav.css";

export const metadata = {
  title: "Martin Spassov | Portfolio",
  keywords: "Martin, Spassov, Portfolio, Personal, Website, Product Management",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
