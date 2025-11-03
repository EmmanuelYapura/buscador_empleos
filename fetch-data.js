/* obteniendo datos del json */
const container = document.querySelector(".job-listing")

fetch("/data.json")
.then(response => response.json())
.then(jobs => {
    jobs.forEach(job => {
        const article = document.createElement("article")
        article.className = "job-content"
        article.dataset.modalidad = job.data.modalidad

        article.innerHTML = `
            <div>
                <h5>FEATURED</h5>
                <h3>${job.title}</h3>
                <p>${job.company} | ${job.location}</p>
                <button class="btn-apply-job">Apply</button>
            </div>
            <img src="./hero.png" width="120" height="100" alt="img-job" />
        `

        container.appendChild(article)
    })
})