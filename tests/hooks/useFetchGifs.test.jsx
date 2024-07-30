import { renderHook , waitFor} from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


describe('Pruebas en el hook useFetchGifs',()=>{

    test('debe de regresar el estado inicial',()=>{
        //el estado inicial sería un arreglo de imagenes vació y estacargando=verdadero

        const {result} = renderHook(()=> useFetchGifs('One Punch'));
        console.log(result);
        const {imagenes, estaCargando}= result.current;

        expect(imagenes.length).toBe(0);
        expect(estaCargando).toBeTruthy();
        //useFetchGifs();
        


    });

    test('debe de regresar el un arreglo de imagenes y estaCargando en falso',async()=>{
        

        const {result} = renderHook(()=> useFetchGifs('One Punch'));
        await waitFor(
            ()=> expect(result.current.imagenes.length).toBeGreaterThan(0)
        )
        console.log(result);

        const {imagenes, estaCargando}=result.current;
        expect(imagenes.length).toBeGreaterThan(0);
        expect(estaCargando).toBeFalsy();
        //useFetchGifs();
        


    })
})