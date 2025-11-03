/* Ocultar elementos fuera de los filtros */

function aplicarFiltro(){
    const jobs = document.querySelectorAll(".job-content")
    jobs.forEach(job => {
        const modalidad = job.dataset.modalidad

        if(filterValue != modalidad && filterValue != ""){
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
        if(p.innerText.toLowerCase().includes(filter) && filterValue != ""){
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