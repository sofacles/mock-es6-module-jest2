
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Component from "./Component";


test("mock an es6 module", async () => {
    const mockCatFact = jest.fn();

    mockCatFact.mockImplementation(() => ({fact: "mocked"}));
    
    
    jest.mock('./CatService', () => ({
        __esModule: true, 
        default: "mockedDefaultExport",
        getCatFact: mockCatFact
      }));
    
    
    render(
        <Component />
    );
    
    const myDiv = await screen.findByTestId("my-div")
    expect(myDiv).toHaveTextContent("mocked");//Fails! value not mocked
});