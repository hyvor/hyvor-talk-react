import React, { Component } from 'react'

import BlogPage from './BlogPage.js'
import Listing from './Listing.js'

export default class App extends Component {

  state = {
    section: 'blog'
  }

  activateBlog() {
    this.setState({section: 'blog'})
  }
  activateListing() {
    this.setState({section: 'listing'})
  }



  render () {
    return (
      <div>
        <header>
          <span onClick={() => this.activateListing()}>Listing</span>
          <span onClick={() => this.activateBlog()}>Blog Page</span>
        </header>
        { 
          this.state.section === "blog" ? <BlogPage /> : <Listing />
        }
      </div>
    )
  }
}
