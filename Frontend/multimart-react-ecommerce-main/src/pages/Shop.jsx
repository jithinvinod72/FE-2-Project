import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState,useEffect } from "react";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import { imageData } from "../utils/products";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";


const Shop = () => {
  const [products, setProducts] = useState([]);
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
        
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);
  useEffect(()=>console.log("...",products),[products]);
  useWindowScrollToTop();

  return (
    <Fragment>
      <Banner title="Our Products" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={products} />
            </Col>
            <Col md={8}>
              <SearchBar setFilterList={products} />
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={products} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;
