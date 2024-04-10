import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { Metadata } from "next";
import { WalletProvider } from "~~/components/eth/WalletProvider";
import "~~/styles/globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const metadata: Metadata = {
  title: "Next App",
  description: "Next.js app with Wagmi SDK",
};

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
          <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
