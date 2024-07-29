import { useState } from  'react'
export const AgregarCategoria=({onNuevaCategoria})=>{

    const [valorEntrada, setValorEntrada]=useState('')
    // el valorEntrada tiene como valor 'Primer punch'
    const alCambiarEntrada=({target})=>{
        //console.log(target.value);
        setValorEntrada(target.value);
    }
    const onSubmit=(evento)=>{
        evento.preventDefault();
        //para controlar que se digite algo:
        if(valorEntrada.trim().length<=1) return;
      
        onNuevaCategoria(valorEntrada.trim());
        setValorEntrada('');

    }

    return(
        <form onSubmit={onSubmit}>
            <input
                type ="text"
                placeholder="Buscar gifs"
                value={valorEntrada}
                onChange={alCambiarEntrada}
                //manda un evento el cual tiene como propiedad un target
            />
        </form>
    )
}