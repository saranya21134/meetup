import {Link} from 'react-router-dom'
import {useContext} from 'react'
import TopicContext from '../../context/TopicContext'

const Home = () => {
  const {userName, topicListName, isRegistered} = useContext(TopicContext)

  return (
    <div>
      {isRegistered ? (
        <div>
          <h1>Welcome to Meetup</h1>
          <p>Please register for the topic</p>

          <Link to="/register" className="button">
            Register
          </Link>
        </div>
      ) : (
        <div>
          <h1>Hello {userName}</h1>
          <p>Welcome to {topicListName}</p>
        </div>
      )}
    </div>
  )
}

export default Home
