import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/public/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Render Current Active Page (e.g., Home Page) */}
      <Home />

      {/* Global Footer (Visible on all pages) */}
      <Footer />
    </div>
  );
}
