import "../styles/question.scss"

function Question({
  content,
  author,
  children
}) {
  return (
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          { children }
        </div>
      </footer>
    </div>
  )
}

export default Question;