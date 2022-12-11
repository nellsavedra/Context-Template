/**
 * Plantilla básica para crear un Context en React
 */

import React, {useState} from "react";
import { createContext, useContext } from "react";

// Definimos el contexto
export const Context = createContext({});

// Creamos el wrapper del Provider
export const myContext = ({ children }) => {
	//Definimos nuestro estado
	const [store, setStore] = useState({});
	
	// Retornamos el Provider con el estado que será global con la función que lo actualiza
	return <Context.Provider value={{store, setStore}}>{children}</Context.Provider>;
};

// Creamos la función para acceder a nuestro contexto
export const useMyContext = () => {
	return useContext(Context);
};