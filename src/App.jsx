import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Guitars from "./pages/Guitars";
import Card from './components/card/Card'
// Database
import guitarData from "./db/GuitarDB";
// import ProductPage from "./pages/ProductPage";


function App() {
  const[selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState("");
    const size = 0;
    
    // Input Filter
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }

    const filteredItems = guitarData.filter((guitar) => guitar.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
    );

    // Radio Filters
    const handleChange = (e) => {
      setSelectedCategory(e.target.value);
    }

    // Button Filters
    const handleClick = (e) => {
      setSelectedCategory(e.target.value);
    }

    // Filtered Data
    function filteredData (guitarData, selected, query) {
      let filteredProducts = guitarData;

      // filtering input items
      if (query) {
        filteredProducts = filteredItems;
      }

      // selected filter
      if (selected) {
        filteredProducts = filteredProducts.filter(
          ({ guitarType, color, brandName, price, title }) => 
          guitarType === selected || 
          color === selected || 
          brandName === selected || 
          price <= selected || 
          title === selected
        );
      }

      return filteredProducts.map(({ serialNumber, title, brandName, modelName, guitarType, numberOfStrings, prevPrice, price, color, image, material }) => (
        <Card 
          key={serialNumber}
          title={title}
          brandName={brandName}
          modelName={modelName}
          guitarType={guitarType}
          numberOfStrings={numberOfStrings}
          prevPrice={prevPrice}
          price={price}
          color={color}
          image={image}
          material={material}
        />
      ))
    }

    const result = filteredData(guitarData, selectedCategory, query);

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home size={size}/> } />
        <Route 
          path="guitars" 
          element={ 
            <Guitars 
              size={size} 
              handleChange={handleChange} 
              query={query} 
              handleInputChange={handleInputChange} 
              handleClick={handleClick} 
              result={result}
            /> 
          } 
        />
      </Routes>
    </>
  )
}

export default App
