import React, { useContext } from "react";
import { getCatFact } from "./CatService";

const Component = () => {
  const {fact} = getCatFact(); 
    return <div data-testid="my-div">{fact}</div>
}

export default Component;