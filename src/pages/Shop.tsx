// src/pages/Shop.tsx
import React from "react";
import Products from "../components/Products"; // Your new recipes page

interface ShopPageProps {
  isDarkMode: boolean;
}

const ShopPage: React.FC<ShopPageProps> = ({ isDarkMode }) => {
  return (
    <main className="pt-20">
      <Products isDarkMode={isDarkMode} />
    </main>
  );
};

export default ShopPage;
