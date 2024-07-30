import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/componentes/GifItem"

describe('Pruebas en <GifItem/>',()=>{

    const title ='Saitama';
    const url   ='https://one-punch.com/saitama.jpg';

    test ('debe de hacer match con el snapshot',()=>{
        const {container} = render(<GifItem title ={title} url={url}/>);
        expect (container).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el url y el alt indicado',()=>{
        render(<GifItem title={title} url={url}/>);
        //screen.debug();
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
        
    })
});