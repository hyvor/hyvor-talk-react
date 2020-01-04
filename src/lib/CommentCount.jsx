import React from 'react'
import PropTypes from 'prop-types'
import { addScript, removeScript } from './util'

export default class CommentCount extends React.Component {
  componentDidMount() {
    var scriptId = 'ht-comment-count-script'
    if (document.getElementById(scriptId)) {
      removeScript(scriptId)
    }

    addScript('//talk.hyvor.com/web-api/count/', scriptId)
  }

  render() {
    return <span data-talk-id={this.props.id} mode={this.props.mode || 'default'} />
  }
}

CommentCount.propTypes = {
  id: PropTypes.any,
  mode: PropTypes.any
}
