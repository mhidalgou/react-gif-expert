
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid=({categoria})=>{

    const {imagenes, estaCargando}=useFetchGifs(categoria);
    //console.log({imagenes,estaCargando});

  

    return(
        <>
            <h3>{categoria}</h3>
            {
                estaCargando &&(<h2>Cargando...</h2>)
            }

            <div className="card-grid" >
                {
                    imagenes.map((imagen)=>(
                        //llama al componemte GifItem para el despliegue
                        <GifItem 
                            key={imagen.id} 
                            {...imagen}
                        />
                    ))

                }

            </div>
        </>
    )
}