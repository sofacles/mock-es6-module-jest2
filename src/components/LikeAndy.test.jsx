
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import * as useCatSvcHook from './CatService';
import Component from "./Component";


test("mock an es6 module", async () => {
    useCatSvcHook.getCatFact = jest.fn(() => ({fact: "mocked"}))
    
    render(
        <Component />
    );
    
    const myDiv = await screen.findByTestId("my-div")
    expect(myDiv).toHaveTextContent("mocked");
});