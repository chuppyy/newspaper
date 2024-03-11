import GoogleAnalytics from "@/components/GoogleAnalytics";
//import CookieBanner from "@/components/cookiebanner";
import Navbar from "@/components/navbars";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
       {/* <GoogleAnalytics GA_MEASUREMENT_ID='G-YSM71MQHG7'/> */}
      </header>
      <main>

        {children}
        {/* <CookieBanner /> */}
        </main>
      <footer>
        <p>© {new Date().getFullYear()} - TKT</p>
      </footer>
    </div>
  );
};

export default Layout;
