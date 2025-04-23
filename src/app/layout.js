import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { AuthProvider } from "@/components/context/auth";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamwithCollision";

export const metadata = {
  title: "Top5Shots - Compare & Advertise",
  description: "Find the best websites for comparison and ad campaigns.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-white min-h-screen flex flex-col overflow-x-hidden">
       
       
        <AuthProvider>
          <Navbar />
          <Breadcrumb />
          <main className="flex-grow w-full px-4 sm:px-8 mx-auto max-w-7xl">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
