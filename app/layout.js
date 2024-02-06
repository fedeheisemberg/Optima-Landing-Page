import { Inter } from "next/font/google";
import "./globals.css";
import "./old.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Optima Consulting & Management",
  description: "Somos una empresa de Finanzas Cuantitativas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200`}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
