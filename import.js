import React from 'react';
import Person from "./export";

export function foo1() {
    const address = {
        city: "Seoul"
    };
    const props = {
        address: address,
        contact: {
        }
    };
    return <Person {...props}/>; // alarm: no 'age' and 'address.country' / name has default prop
}
