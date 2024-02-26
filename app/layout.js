import { Baloo_Paaji_2 } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Baloo_Paaji_2({ subsets: ["latin"] });

export const metadata = {
  title: "FShare.com",
  description: "File sharing app || Anywhere share",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>

  );
}
