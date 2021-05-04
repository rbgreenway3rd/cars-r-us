import { getColor, setColor } from "./database.js"

const paint = getColor()



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