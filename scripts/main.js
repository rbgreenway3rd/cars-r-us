import { cars_r_us } from "./cars-r-us.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = cars_r_us()
}

renderAllHTML();

document.addEventListener("stateChanged", event => {
    if (event.target.name === "orderButton") {
        console.log("State of data has changed. Regenerating HTML...")
        renderAllHTML()
    }
})