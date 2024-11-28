import { Fragment, useEffect, useState } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import SliderHome from "../components/Slider";
import { imageData } from "../utils/products";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useWindowScrollToTop();
  
  const getImageUrl = (productName) => {
    const matchedImage = imageData.find((item) => item.imageName === productName);
    return matchedImage ? matchedImage.image : null; // Return image URL or null if not found
  };
  useEffect(() => {


    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        const updatedProducts = data.map((product) => ({
          ...product,
          imageUrl: getImageUrl(product.name) || product.imageUrl, // Update imageUrl if found, else keep the existing one
        }));
        setProducts(updatedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  useEffect(()=>{console.log(products)},[products])

  // Filter products based on categories
  const discountProducts = products.filter((item) => item.ratings >= 4.5); // Example criteria for discounts
  const newArrivalData = products.filter(
    (item) => item.category === "Running" || item.category === "Cycling"
  );
  const bestSales = products.filter((item) => item.category === "Camping");

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }


  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discountProducts}
      />
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} />
    </Fragment>
  );
};

export default Home;
