// ProductDetail.tsx
"use client";

import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GranolaProduct from "../../components/productdetail/GranolaProduct";

const availableProducts = ["1", "2", "3", "4"];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const id = params.id;

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat halaman dimuat
  }, []);

  if (!availableProducts.includes(id)) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Produk Tidak Ditemukan</h1>
          <p className="mt-2 text-gray-600">Produk dengan ID <strong>{id}</strong> belum tersedia.</p>
          <button
            onClick={() => window.history.back()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar /> {/* Pastikan Navbar tidak punya margin bawah berlebih */}
      
      {/* Main content - Hapus padding-top dan padding-bottom berlebih */}
      <main className="bg-[#F9F5F0] min-h-screen">
        <GranolaProduct productId={id} />
      </main>

      <Footer /> {/* Pastikan Footer tidak punya margin-top berlebih */}
    </>
  );
}