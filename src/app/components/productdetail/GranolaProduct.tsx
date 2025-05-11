import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GranolaProduct = ({ productId }: { productId: string }) => {
  const [selectedSize, setSelectedSize] = useState("400g");
  const [isFlipped, setIsFlipped] = useState(false);

  const productData = {
    name: "CHOCOLATE VANILLA",
    description:
      "When you start your day with chocolate from Sulawesi, vanilla, creamy cashew nuts and crunchy granola clusters only from YAVA – you won’t be able to resist SmileAllDay!",
    sizes: ["400g", "200g", "90g"],
    images: {
      front: {
        "400g": "/product/depan400gr.png",
        "200g": "/product/depan200gr.png",
        "90g": "/product/depan90gr.png",
      },
      back: {
        "400g": "/product/belakang.png",
        "200g": "/product/belakang200gr.png",
        "90g": "/product/belakang90gr.png",
      },
    },
    icons: [
      "/icons/bre.png",
      "/icons/snk.png",
    ],
    ingredients: [
      "Cashews",
      "Cocoa from Sulawesi",
      "Lontar Sugar",
      "Source of Dietary Fiber",
      "Contains 53mg Inulin/serving",
    ],
    shareIcons: [
      "/icons/share-twitter.png",
      "/icons/share-facebook.png",
      "/icons/gmail.png",
    ],
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="container mx-auto px-4 max-w-screen-xl bg-[#F9F5F0] pt-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-8">
        <ol className="flex items-center space-x-2">
          <li><a href="#" className="hover:text-red-500">Home</a></li>
          <li>/</li>
          <li>Our Foods</li>
        </ol>
      </nav>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Info */}
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-wider font-wildwords-lower-bold text-[#4B1A1B]">GRANOLA</p>
          <div className="mt-1 flex flex-col">
            <span className="text-2xl md:text-4xl font-wildwords-lower-bold bg-gradient-to-r from-[#FEB519] via-[#FE8301] to-[#F31212] bg-clip-text text-transparent">
              CHOCOLATE
            </span>
            <span className="text-xl md:text-2xl font-wildwords-lower-bold mt-1 text-[#4B1A1B]">
              VANILLA
            </span>
          </div>

          {/* Size Selector */}
          <div className="flex gap-2 mt-4">
            {productData.sizes.map((size) => (
              <button
                key={size}
                onClick={() => {
                  setSelectedSize(size);
                  setIsFlipped(false);
                }}
                className={`cursor-pointer transition-transform duration-300 ${
                  selectedSize === size ? "scale-110" : ""
                }`}
              >
                <Image
                  src={`/icons/${size}.png`}
                  alt={`${size} Icon`}
                  width={40}
                  height={40}
                />
              </button>
            ))}
          </div>

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed px-4 text-[#4B1A1B]">
            {productData.description}
          </p>

          {/* Icons */}
          <div className="flex space-x-3 mt-4">
            {productData.icons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="Usage Icon"
                className="w-10 h-10"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            ))}
          </div>

          {/* Buy Now */}
          <button className="mt-6 bg-red-500 hover:bg-red-600 text-white text-sm px-6 py-2 rounded-full shadow">
            BUY NOW
          </button>
        </div>

        {/* Center Image */}
        <div className="md:col-span-4 flex flex-col items-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 relative"
          >
            <Image
              src={
                isFlipped
                  ? productData.images.back[selectedSize]
                  : productData.images.front[selectedSize]
              }
              alt={`Granola ${selectedSize}`}
              width={480}
              height={480}
              className="object-contain transition-transform duration-500 ease-in-out"
            />

            {!isFlipped && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <button onClick={handleFlip}>
                  <Image
                    src="/icons/putar.png"
                    alt="Flip Icon"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            )}
          </motion.div>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-sm font-semibold uppercase mb-2 text-[#4B1A1B]">INGREDIENTS</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {productData.ingredients.map((item) => (
              <span key={item} className="bg-orange-200 text-orange-700 text-xs px-2 py-1 rounded-full">
                {item}
              </span>
            ))}
          </div>

          <p className="text-xs leading-relaxed text-[#4B1A1B]">
            Oats (39.5%), Palm Sugar (17.8%), Cashew Nuts (12.3%), Brown Rice (10.9%), Coconut Oil (8.1%), Cocoa Powder (2.1%), Sea Salt (1.2%), Cocoa Mass (0.3%), Sodium Hydrogen Carbonate Raising Agent (0.1%), Natural Vanilla Flavor, Vanilla Paste (0.01%). Contains allergens, see bold ingredients list. Manufactured on equipment that also processes peanuts and tree nuts.
            <br />
            No Preservatives, No Synthetic Colors, No Flavor Enhancers.
          </p>

          <div className="flex items-center gap-2 mt-3">
            <p className="text-xs text-[#4B1A1B]">Share:</p>
            {productData.shareIcons.map((icon, index) => (
              <a key={index} href="#">
                <img src={icon} alt="Share Icon" className="w-5 h-5" style={{ filter: "brightness(0) invert(1)" }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GranolaProduct;
