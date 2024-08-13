import { Open_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";


const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Bunklet",
  description: "The Number One Real Estate Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={OpenSans.className}>{children}</body>        
      </StoreProvider>
    </html>
  );
}
