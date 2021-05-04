import { Colors } from "./paint.js"
import { Technologies } from "./technology.js"

export const cars_r_us = () => {
    return /*html*/`
        <h1>Cars R Us</h1>
        
        <article class="options">
            <section class="options__paints">
                <h2>Colors</h2>
                ${Colors()}
            </section>
            <section class="options__technology">
                <h2>Technology</h2>
                ${Technologies()}
            </section>
    `
}