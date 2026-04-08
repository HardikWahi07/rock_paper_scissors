import React from "react";
import { use, useState } from "react";
import Child from "./child";

export default function Parent () {
    let [c, setcount] = useState(0);
    return (
        <>
            <p>{c}</p>
            <Child count={c} setcount={setcount} />
        </>
    )
}