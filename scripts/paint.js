import { getColor, setColor } from "./database.js"

const paints = getColor()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            setColor(parseInt(event.target.value))
        }
    }
)



export const Colors = () => {
    let html = "<ul>"
    for (const paint of paints) {
        html += `<li>
            <input type="radio" name="paint" value="${paint.id}" /> ${paint.style}
        </li>`
    }

    html += "</ul>"
    return html
}