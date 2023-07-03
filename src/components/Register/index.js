import TopicContext from '../../context/TopicContext'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Beauty',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <TopicContext.Consumer>
    {value => {
      const {
        userName,
        topicListName,
        changeName,
        changeTopic,
        changeRegister,
        submittedErrorMsg,
      } = value
      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      const onChangeRegister = event => {
        changeRegister(event)
        const {history} = props
        history.push('/')
      }

      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
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
        </div>
      )
    }}
  </TopicContext.Consumer>
)

export default Register
