import React from "react";

const RootLayout = ({ children }) => {
  return (
    <main className="w-full max-w-[1950px] px-2 md:px-6 lg:px-10 min-h-dvh bg-subtle-light">
      {children}
    </main>
  );
};

export default RootLayout;
