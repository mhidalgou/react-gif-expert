import { useState } from "react"
import { AgregarCategoria, GifGrid } from "./componentes";
//ver componentes/index.js para ver archivo barril


export const GifExpertApp=()=>{

    const [categorias, setCategorias]= useState(['One Punch']);
    const onAgregarCategoria=(nuevaCategoria)=>{
        //console.log(nuevaCategoria)
        if (categorias.includes(nuevaCategoria)) return;

        setCategorias([nuevaCategoria,...categorias]);
    }

    return(
        <>
            <h1>GifExpertApp</h1>
            <AgregarCategoria onNuevaCategoria={onAgregarCategoria}/>
      
            {
                categorias.map((categoria)=>(
                    <GifGrid 
                        key={categoria} 
                        categoria={categoria}/>
                ))
            }
        </>
    )}