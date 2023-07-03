import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {useState} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import TopicContext from './context/TopicContext'
import './App.css'

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

const App = () => {
  const [userName, setUserName] = useState('')
  const [topicListName, setTopicListName] = useState(topicsList[0].displayText)
  const [isRegistered, setIsRegistered] = useState(true)

  const changeName = name => {
    setUserName(name)
  }

  const changeTopic = event => {
    setTopicListName(event.target.value)
  }

  const changeRegister = () => {
    setIsRegistered(!isRegistered)
  }

  return (
    <TopicContext.Provider
      value={{
        userName,
        topicListName,
        isRegistered,
        changeName,
        changeTopic,
        changeRegister,
      }}
    >
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </>
    </TopicContext.Provider>
  )
}

export default App
