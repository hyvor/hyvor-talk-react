import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { addScript, removeScript } from './util'

/**
 * Embeds Hyvor Talk thread on a web page
 */
export default function Embed(props){
    function setVariables() {
        window.HYVOR_TALK_WEBSITE = props.websiteId
        window.HYVOR_TALK_CONFIG = {
            url: props.url || false,
            id: props.id || false,
            title: props.title || document.title,
            loadMode: props.loadMode || 'default',
            language: props.language || null,
            sso: props.sso || null,
            palette: props.palette || null
        }
    }

    useEffect(() => {
        setVariables();

        if (document.getElementById('ht-embed-script')) {
            removeScript('ht-embed-script')
        }
        addScript('//talk.hyvor.com/web-api/embed', 'ht-embed-script')
    },[]);

    return (<div id='hyvor-talk-view' />);
}

Embed.propTypes = {
    websiteId: PropTypes.number.isRequired,
    url: PropTypes.any,
    id: PropTypes.any,
    title: PropTypes.string,
    loadMode: PropTypes.any,
    language: PropTypes.string,
    sso: PropTypes.object,
    palette: PropTypes.object
}
