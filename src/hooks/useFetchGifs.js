import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs=(categoria)=>{

    const [imagenes, setImagenes]= useState([]);
    const [estaCargando,setEstaCargando]= useState([true]);

    const obtenerImagenes=async()=>{
        const nuevaImagenes=await getGifs(categoria);
        setImagenes(nuevaImagenes);
        setEstaCargando(false);
    }
    //se actualiza el html solo si se modifica la categoria
    //las promesas no se pueden usar con useEffect
    useEffect(()=>{
       obtenerImagenes();
    },[]) ;

    return {
       imagenes:imagenes,
       estaCargando: estaCargando
    }
}