import './App.css'
import { Component } from 'react'
import UserClass from "./user/UserClass"
import UserFunction from "./user/UserFunction"
import UserChildren from "./user/UserChildren"
//import { UserClass, UserFunction, UserChildren } from "./user"

const users = [
  { name: 'Ante', years: 34, },
  { name: 'Marko', years: 37 },
  { name: 'Tereza', years: 25 },
];

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users: [
        { name: 'Ante', years: 34, },
        { name: 'Marko', years: 37 },
        { name: 'Tereza', years: 25 },
       ],
       tekst: "Uvećaj godine"
    }
  }

  uvecajGodine = () => {
    const newUsers = this.state.users.map(user => {
      return {...user, years: user.years + 30}
    })
    this.setState({users: newUsers})
  }
  render() {
    const {users, tekst} = this.state
    return (
      <>
        <h1>State</h1>
        <UserClass name={users[0].name} years={users[0].years} />
        <UserFunction name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>
          {tekst}
        </UserChildren>
        <button onClick={this.uvecajGodine}>Godina više</button>
      </>
    )
  }
}

export default App