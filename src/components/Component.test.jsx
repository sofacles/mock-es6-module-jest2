
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Component from "./Component";
import * as useCatSvcHook from './CatService';


test("spyOn an es6 module", async () => {
    const mockHook = jest.spyOn(useCatSvcHook, 'getCatFact');
    mockHook.mockImplementation(() => ({ fact: "mocked" }));

    render(
        <Component />
    );

    const myDiv = await screen.findByTestId("my-div")
    expect(myDiv).toHaveTextContent("mocked"); // works! 
});