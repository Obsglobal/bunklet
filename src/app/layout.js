import { Open_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Bunklet",
  description: "The Number One Real Estate Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>{children}</body>
      <ToastContainer position="bottom-right" />
    </html>
  );
}
