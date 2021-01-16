import React, { Component } from 'react'
import Routes from '../routes/routes'
import Header from './Header'
import Footer from './Footer'
// import { endpoint } from '../services/endpointFile'

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  setUser(user) {
    this.setState({ user })
  }

  clearUser() {
    this.setState({ user: null })
  }

  render() {
    const { user } = this.state
    return (
      <>
        <main className="container">
          <Header user={user} />
          <Routes
            user={user}
            setUser={this.setUser}
            clearUser={this.clearUser}/>
          <Footer />
        </main>
      </>
    )
  }
}

export default Container;