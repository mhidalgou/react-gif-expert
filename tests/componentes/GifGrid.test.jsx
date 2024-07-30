import { GifGrid } from "../../src/componentes/GifGrid";
import { render, screen } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { exact } from "prop-types";

jest.mock("../../src/hooks/useFetchGifs");


describe('Pruebas en <GrifGrid/>',()=>{

    const categoria='One Punch';

    test('debe de mostrar el loading inicialmente',()=>{

        useFetchGifs.mockReturnValue({
            imagenes: [],
            estaCargando: true

        });
        
        render (<GifGrid categoria={categoria}/>);
        screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(categoria));


    });

    test('debe mostrar items cuando se cargan las imágenes useFetchsGifs',()=>{

        const gifs=[
            {
                id:'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id:'123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }

        ]

        useFetchGifs.mockReturnValue({
            imagenes: gifs,
            estaCargando: false

        });
        render (<GifGrid categoria={categoria}/>);
        screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);



    })


});