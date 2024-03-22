import { Open_Sans } from "next/font/google";
import "./globals.css";

const OpenSans = Open_Sans ({ subsets: ["latin"] });

export const metadata = {
  title: "Obsglobal",
  description: "The Nigeria Number One Real Estate Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>{children}</body>
    </html>
  );
}
