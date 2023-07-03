import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Register from './components/Register'

import NotFound from './components/NotFound'
import TopicContext from './context/TopicContext'
import './App.css'

class App extends Component {
  state = {
    userName: '',
    topicListName: '',
    isregistered: true,
    submittedErrorMsg: false,
  }

  changeName = name => {
    this.setState({userName: name})
  }

  changeTopic = topic => {
    this.setState({topicListName: topic})
  }

  changeRegister = event => {
    event.preventDefault()
    const {userName} = this.state
    if (userName !== '') {
      this.setState(prevState => ({
        isregistered: !prevState.isregistered,
        userName: '',
        topicListName: '',
        submittedErrorMsg: false,
      }))
    } else {
      this.setState(prevState => ({
        submittedErrorMsg: !prevState.submittedErrorMsg,
      }))
    }
  }

  render() {
    const {userName, topicListName, isregistered} = this.state
    return (
      <TopicContext.Provider
        value={{
          userName,
          topicListName,
          isregistered,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          changeRegister: this.changeRegister,
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
}

export default App
