import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CartSaver – Recover Abandoned Carts with Exit-Intent",
  description: "Detect when customers are about to leave checkout and offer personalized incentives. Recover lost revenue automatically for your Shopify store."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b84b79fc-1943-415f-a9e1-adbabc91ffb5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
