import { Inter } from "next/font/google";
import "./globals.css";
import "./old.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import GoogleAnalytics from "./google-analytics"; // DESCOMENTAR PARA ACTIVAR GOOGLE ANALYTICS
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Optima Consulting & Management",
  description:
    "Somos una empresa de Data Science aplicado a Finanzas Empresariales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200`}>
        {/* <GoogleAnalytics /> */}{" "}
        {/* DESCOMENTAR PARA ACTIVAR GOOGLE ANALYTICS */}
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
