import './ArticleEmpleo.css'

function ArticleEmpleo ({info}) {
    return(
        <article>
            <img
              src={info.src}
              alt={`empleo-popular-${info.id}`}
            />
            <h4>{info.title}</h4>
            <p>{info.subtitle}</p>
          </article>
    )
}

export default ArticleEmpleo