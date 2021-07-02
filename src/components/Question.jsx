import "../styles/question.scss"

function Question({
  content,
  author,
  isAnswered = false,
  isHighLighted = false,
  children,
}) {
  return (
    <div className={`question ${isAnswered ? 'answered' : ''} ${(isHighLighted && !isAnswered) ? 'highlighted' : ''}`}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  )
}

export default Question;