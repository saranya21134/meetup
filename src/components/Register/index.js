import {useContext, useState} from 'react'
import {withRouter} from 'react-router-dom'
import TopicContext from '../../context/TopicContext'

const Register = ({history}) => {
  const {userName, topicListName, changeName, changeTopic} = useContext(
    TopicContext,
  )
  const [submittedErrorMsg, setSubmittedErrorMsg] = useState(false)

  const onChangeName = event => {
    changeName(event.target.value)
  }

  const onChangeTopic = event => {
    changeTopic(event.target.value)
  }

  const onChangeRegister = event => {
    event.preventDefault()

    if (userName.trim() !== '') {
      setSubmittedErrorMsg(false)
      history.push('/')
    } else {
      setSubmittedErrorMsg(true)
    }
  }

  return (
    <div>
      <h1>Let us join</h1>
      <form className="list-form" onSubmit={onChangeRegister}>
        <label htmlFor="task" className="label">
          NAME
        </label>
        <input
          type="text"
          id="task"
          value={userName}
          onChange={onChangeName}
          className="input"
          placeholder="YOUR NAME"
        />
        <label className="input-label" htmlFor="select">
          TOPICS
        </label>
        <select
          id="select"
          className="input"
          value={topicListName}
          onChange={onChangeTopic}
        >
          {topicsList.map(eachOption => (
            <option key={eachOption.id} value={eachOption.displayText}>
              {eachOption.displayText}
            </option>
          ))}
        </select>
        <button type="submit" className="button">
          Register Now
        </button>
        {submittedErrorMsg && <p>Please enter your name</p>}
      </form>
    </div>
  )
}

export default withRouter(Register)
