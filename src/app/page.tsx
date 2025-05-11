"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  return (
    <main className="min-h-screen">
      <Navbar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <HeroSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <ProductList activeCategory={activeCategory} />
      <Footer />
    </main>
  );
}