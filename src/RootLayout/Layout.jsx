import React from "react";
import Footer from "../component/containers/Footer";

const RootLayout = ({ children }) => {
  return (
    <main className="w-full max-w-[1950px] min-h-dvh bg-subtle-light">
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
