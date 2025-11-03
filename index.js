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

/* Ocultar elementos fuera de los filtros */

const jobs = document.querySelectorAll(".job-content")

function aplicarFiltro(){
    jobs.forEach(job => {
        const textP = job.querySelector("p").innerText
        if(!textP.includes(filterValue) && filterValue != "All locations"){
            job.classList.add("hidden")
        }else{
            job.classList.remove("hidden")
        }
    })
}

/* Modifica filtro */

function modificarFiltros(filter){
    const filterValues = document.querySelectorAll(".filters-values p")
    filterValues.forEach(p => {
        if(p.innerText.toLowerCase().includes(filter) && !filterValue.includes("All")){
            p.querySelector("span").innerText = " " + filterValue
        }else{
            p.querySelector("span").innerText = " All"
        }
    })
}

/* Aplica resultados filtros */

const filterResults = document.querySelector("section.filters")
let filterValue

filterResults?.addEventListener("change", (e) => {
    const selectValue = e.target.value
    const selectId = e.target.id
    filterValue = selectValue
    modificarFiltros(selectId)
    aplicarFiltro()
})


