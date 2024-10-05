
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Component from "./Component";
import { getCatFact } from "./CatService";


test("mock an es6 module", async () => {
   getCatFact.mockImplementation(() => ({fact: "mocked"}));
    // get me "TypeError: _CatService.getCatFact.mockImplementation is not a function"
    
    render(
        <Component />
    );
    
    const myDiv = await screen.findByTestId("my-div")
    expect(myDiv).toHaveTextContent("mocked");//Fails! value not mocked
});