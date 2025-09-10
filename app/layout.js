import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Next.js Intern Project",
  description: "Basic Next.js setup with routing and components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <Navbar />
        <main style={{ padding: "20px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
