import React from 'react'

const TopicContext = React.createContext({
  userName: '',
  topicList: 'Arts and Culture',
  isregistered: true,

  changeName: () => {},
  changeTopic: () => {},
  changeRegister: () => {},
})

export default TopicContext
