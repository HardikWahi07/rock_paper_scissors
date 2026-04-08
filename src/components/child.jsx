import React from "react";
import { use, useState } from "react";


export default function Child ({count, setcount}) {
    let a = 1231241241
    return (
        <>
            <button onClick={() => {
                setcount(a)
            }}>Fetch Value of A</button>
        </>
    )
}