import './JobCard.css'

export function JobCard({ job }){

    function mostrar(e){
        console.log(e)
        const element = e.target
        element.textContent = "Aplicado!"
        element.classList.add("is-applied")
        element.disabled = true
    }

    return (
        <article className='job-content'>
            <div>
                <h3>{job.title}</h3>
                <p>{job.company} | {job.location}</p>
                <button onClick={mostrar} className="btn-apply-job">Apply</button>
            </div>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1M9MvgQA3h5RkFX-UoIY6nUD9fABUo8dt_ZCu0WQ2fAqIQornVsOjpIjb4dIjzFYhc176_qlAbKetepzWYtfolq9VKEtXwyRmaViyOwxHg9upqzbw4clewcHhbpgcQxCB7Y4dRQ3QA7jfKOonmMa28851LxpKT5flpjgih2gntckf_bleVuKF_bFLS0LRMG4Md6OM-Pa4gTXPh9wvNU1YaONRXef4mv30JsvoqEbgAEatOMrR5jLB0iwznS5gd8cs7ay0P4g2qeY" alt="img-job" />
        </article>
    )
}