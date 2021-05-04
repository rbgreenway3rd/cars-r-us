import { getTechnology, setTechnology } from "./database.js"

const technologies = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<ul>"

    for (const technology of technologies) {
        html += `<li>
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.style}
        </li>`
    }

    html += "</ul>"
    return html
}