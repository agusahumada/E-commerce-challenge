import React, { useEffect, useState } from 'react';
import axios from "axios";

const initialState = {
    categories: [],
    slides: [],
    products: [],
    filteredProducts: [],
    filters: []
}

const DataContext = React.createContext();

const DataProvider = ({children}) => {
    
    const [ state, setState ] = useState(initialState);

    useEffect( () => {
        axios.get('http://remote.fizzmod.com/menu.json')
        .then((response)=>{
            setState((prevState) => ({
                ...prevState,
                categories: response.data.menu.categories,
              }));
        });

    }, []);

    useEffect( () => {
        axios.get('http://remote.fizzmod.com/body.json')
        .then((response)=>{
            setState((prevState) => ({
                ...prevState,
                slides: response.data.slides,
                products: response.data.products,
                filters: response.data.filters,
                filteredProducts: response.data.products
            }));
        });

    }, []);

    return(
        <DataContext.Provider
            value={[state, setState]}
        >
            {children}
        </DataContext.Provider>
    );
}

export {DataContext, initialState, DataProvider};