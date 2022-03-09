import React, { useEffect } from 'react';
import { addScript, removeScript, useUpdateEffect } from './util'

export interface EmbedProps {
    websiteId: number;
    url?: string|false;
    id?: number|string|false;
    title?: string;
    loadMode?: string;
    clickId?: string;
    language?: string;
    sso?: object;
    palette?: object;
    authorEmail?: string;
    onEvent?: (type: string, data: object) => void
}

const Embed: React.FC<EmbedProps> = (

    {
        /**
         * Website Configuration
         */
        websiteId,

        /**
         * Page configurations
         */
        url = false,
        id = false,
        title,
        loadMode,
        clickId,
        language,
        sso,
        palette,
        authorEmail,
        onEvent

    }

) => {

    /**
     * Add the script on the first render and if one of the following changes:
     *  websiteId - a new website, which is unusual but possible
     *  id - page identifier changed, definitely a new page, so reload
     *  language - page language changed, no way to internally refresh the language, so reload the iframe
     *  sso - SSO config just changed. This is a very common change. Reload with new config
     *  
     * Other page properties are not worth reloading
     */
    useEffect(() => {

        (window as any).HYVOR_TALK_WEBSITE = websiteId;
        (window as any).HYVOR_TALK_CONFIG = {
            url,
            id,
            title,
            loadMode,
            clickId,
            language,
            sso,
            palette,
            authorEmail,
            onEvent
        };

        const embedScriptId = 'ht-embed-script';

        if (document.getElementById(embedScriptId)) {
            removeScript(embedScriptId);
        }

        addScript('//talk.hyvor.com/web-api/embed.js', embedScriptId);

    }, [websiteId, id, language, sso])

    /**
     * When palette is updated, use hyvor_talk.setPalette instead of reloading the iframe
     * @source https://talk.hyvor.com/docs/dynamic-colors
     */
    useUpdateEffect(() => {

        (window as any).hyvor_talk && (window as any).hyvor_talk.setPalette(palette);

    }, [palette])


    return <div id='hyvor-talk-view' />;

}

export default Embed;