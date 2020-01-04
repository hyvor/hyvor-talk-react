import React from 'react'
import PropTypes from 'prop-types'
import { addScript, removeScript } from './util'

/**
 * Embeds Hyvor Talk thread on a web page
 */
export default class Embed extends React.Component {
  setVariables() {
    window.HYVOR_TALK_WEBSITE = this.props.websiteId
    window.HYVOR_TALK_CONFIG = {
      url: this.props.url || false,
      id: this.props.id || false,
      loadMode: this.props.loadMode || 'default'
    }
  }

  addScript() {
    if (document.getElementById('ht-embed-script')) {
      removeScript('ht-embed-script')
    }
    addScript('//talk.hyvor.com/web-api/embed', 'ht-embed-script')
  }

  componentDidMount() {
    this.setVariables()
    this.addScript()
  }

  render() {
    return <div id='hyvor-talk-view' />
  }
}

Embed.propTypes = {
  websiteId: PropTypes.number.isRequired,
  url: PropTypes.any,
  id: PropTypes.any,
  loadMode: PropTypes.any
}
