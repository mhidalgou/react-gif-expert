import { render, screen, fireEvent } from '@testing-library/react';
import { AgregarCategoria } from '../../src/componentes/AgregarCategoria';

describe('Pruebas en <AgregarCategoria/>',()=>{

    test('debe de cambiar el valor de la caja de texto',()=>{

        render (<AgregarCategoria onNuevaCategoria={()=>{}}/>);
        //screen.debug();
        const input = screen.getByRole('textbox'); //asi se busca el input

        fireEvent.input(input,{target:{value:'Saitama'}}); //fireEvent dispara el evento input
        //screen.debug();   
        expect(input.value).toBe('Saitama');
    })

    test('debe de llamar onNuevaCategoria si el input tiene un valor',()=>{

        const valorEntrada='Saitama'        ;
        const onNuevaCategoria=jest.fn();
        //mock= simulación
        
        render (<AgregarCategoria onNuevaCategoria={onNuevaCategoria}/>);
        const input=screen.getByRole('textbox');
        const form =screen.getByRole('form');

        fireEvent.input(input,{target:{value:valorEntrada}}); //fireEvent dispara el evento input
        fireEvent.submit(form);
        screen.debug();
        expect(input.value).toBe('');
        expect(onNuevaCategoria).toHaveBeenCalled();
        expect(onNuevaCategoria).toHaveBeenCalledTimes(1);
        expect(onNuevaCategoria).toHaveBeenCalledWith(valorEntrada);
        
    });

    test('no debe de llamar al onNuevaCategoria si el input está vacio',()=>{
       
        const onNuevaCategoria=jest.fn();
        //mock= simulación
        
        render (<AgregarCategoria onNuevaCategoria={onNuevaCategoria}/>);
        const form =screen.getByRole('form');
        
        fireEvent.submit(form);
        screen.debug();
        expect(onNuevaCategoria).not.toHaveBeenCalled();
        expect(onNuevaCategoria).toHaveBeenCalledTimes(0);
        

    })

});
