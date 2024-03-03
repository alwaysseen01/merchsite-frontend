import './app.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from '../header/header';
import Main from '../main/main';
import CategoryContext from '../../contexts/categoryContext';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
      fetch('http://159.89.21.118:8080/api/category')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setCategories(data);
                setCategoriesLoading(false);
            })
            .catch(error => {
                console.error('An error occured while trying to get CATEGORIES!', error);
            });
    }, []);

  return (
    <BrowserRouter>
      <CategoryContext.Provider value={{ categories, categoriesLoading }}>
        <Header />
        <Main />
      </CategoryContext.Provider>
    </BrowserRouter>
  );
};

export default App;
