import { GifExpertApp } from "../src/GifExpertApp";
import { render, screen } from "@testing-library/react";

describe('Pruebas en <GifExpertApp/>',()=>{

    test('should be',()=>{
        render (<GifExpertApp/>);
        screen.debug();

    })

});