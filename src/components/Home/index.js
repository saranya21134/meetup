import TopicContext from '../../context/TopicContext'

import './index.css'

const Home = props => {
  const onClickregister = () => {
    const {history} = props
    history.push('/register')
  }

  return (
    <TopicContext.Consumer>
      {value => {
        const {userName, topicListName, isregistered} = value

        return (
          <div>
            {isregistered ? (
              <div>
                <h1>Welcome to Meetup</h1>
                <p>Please register for the topic</p>

                <button
                  type="button"
                  className="button"
                  onClick={onClickregister}
                >
                  Register
                </button>
              </div>
            ) : (
              <div>
                <h1>Hello {userName}</h1>
                <p>Welcome to {topicListName}</p>
              </div>
            )}

            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </div>
        )
      }}
    </TopicContext.Consumer>
  )
}

export default Home
