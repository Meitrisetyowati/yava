"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const categories = [
    { name: "All Products", image: "/icons/all-products.png" },
    { name: "Granola", image: "/icons/granola.png" },
    { name: "Biscuits", image: "/icons/biscuits.png" },
    { name: "Bar", image: "/icons/bar.png" },
    { name: "Popcorn", image: "/icons/popcorn.png" },
    { name: "Puffs", image: "/icons/puffs.png" },
    { name: "Cashews", image: "/icons/cashews.png" },
  ];

  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        padding: "5rem 0 3rem",
        fontFamily: `'Poppins', sans-serif`,
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          padding: "0 1rem",
        }}
      >
        {/* Title */}
        {activeCategory !== "All Products" && (
          <h1
            style={{
              fontSize: "2.25rem",
              lineHeight: "2.5rem",
              marginBottom: "2rem",
              fontWeight: "bold",
              fontFamily: `'WildWords', cursive`,
            }}
          >
            <span style={{ color: "#4B1A1B" }}>DISCOVER</span>
            <br />
            <span style={{ color: "#F31212" }}>YOUR PERFECT CRUNCH</span>
          </h1>
        )}

        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
            width: "100%", // Ensure full width of the container
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <input
              type="text"
              placeholder="Find your perfect crunch..."
              style={{
                flex: 1, // Take up remaining space
                height: "40px",
                padding: "0 1rem",
                border: "none",
                outline: "none",
                fontSize: "1rem",
                fontFamily: `'Poppins', sans-serif`,
                backgroundColor: "transparent",
              }}
            />
            <button
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#F31212",
                border: "none",
                outline: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                style={{ width: "20px", height: "20px" }}
              >
                <path d="M19.707 19.707l-3.86-3.859a8.08 8.08 0 1 0-1.414 1.414l3.859 3.86a1.002 1.002 0 0 0 1.414 0 1.002 1.002 0 0 0 0-1.414Zm-13.707 0a11.078 11.078 0 0 1 1.414-1.414l-3.859-3.86a1.002 1.002 0 0 0-1.414 0 1.002 1.002 0 0 0 0 1.414l3.86 3.859Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Category Icons */}
        <div style={{ marginTop: "2rem" }}>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              overflowX: "auto",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE 11
              WebkitOverflowScrolling: "touch",
              paddingBottom: "0.5rem",
              justifyContent: "center",
            }}
            className="hide-scrollbar"
          >
            {categories.map((categoryObj) => (
              <div
                key={categoryObj.name}
                onClick={() => setActiveCategory(categoryObj.name)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: "100px",
                  cursor: "pointer",
                  opacity: activeCategory === categoryObj.name ? 1 : 0.6,
                  transition: "all 0.3s ease",
                }}
              >
                {/* Transparent Card with Icon */}
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    boxShadow: activeCategory === categoryObj.name
                      ? "0 4px 12px rgba(0,0,0,0.3)"
                      : "0 2px 5px rgba(0,0,0,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.75rem",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <Image
                    src={categoryObj.image}
                    alt={categoryObj.name}
                    width={45}
                    height={45}
                    style={{
                      objectFit: "contain",
                      transition: "transform 0.3s ease",
                    }}
                    onError={(error) =>
                      console.error("Error loading icon:", error)
                    }
                  />
                </div>
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#000",
                    fontFamily: `'Poppins', sans-serif`,
                    textTransform: "capitalize",
                    textAlign: "center",
                  }}
                >
                  {categoryObj.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;