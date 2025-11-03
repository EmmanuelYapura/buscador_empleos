/* Logica para botones */

const searchResults = document.querySelector(".search-results")

searchResults?.addEventListener("click", (e) => {
    const element = e.target
    if(element.classList.contains("btn-apply-job")){
        element.textContent = "Aplicado!"
        element.classList.add("is-applied")
        element.disabled = true
    }
})