import { render, screen, fireEvent } from '@testing-library/react';
import { AgregarCategoria } from '../../src/componentes/AgregarCategoria';

describe('Pruebas en <AgregarCategoria/>',()=>{

    test('debe de cambiar el valor de la caja de texto',()=>{

        render (<AgregarCategoria onNuevaCategoria={()=>{}}/>);
        //screen.debug();
        const input = screen.getByRole('textbox'); //asi se busca el input
        fireEvent.input(input,{target:{value:'Saitama'}}); //fireEvent dispara el evento input
        screen.debug();   
        expect(input.value).toBe('Saitama');



    })
});