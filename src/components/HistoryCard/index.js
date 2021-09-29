import './index.css'

const HistoryCard = props => {
  const {details, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const onClickDeleteId = () => {
    onDelete(id)
  }

  return (
    <li className="list-container">
      <div className="title-container">
        <p className="time">{timeAccessed}</p>
        <div className="image-container">
          <img src={logoUrl} alt="domain logo" className="domain-image" />
          <div className="title-url-container">
            <p className="title">{title}</p>
            <p className="title">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        testid="delete"
        onClick={onClickDeleteId}
        className="delete-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryCard
