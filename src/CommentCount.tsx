import React, { useEffect } from 'react';
import { addScript, removeScript } from './util';

export interface CommentCountProps {
  id: string;
  websiteId: number;
  mode?: string;
  language?: string;
}

const CommentCount: React.FC<CommentCountProps> = ({
    /**
     * Website Configurations
     */
    websiteId,

    /**
     * Comment count span configurations
     */
    id,
    mode,
    language


} : CommentCountProps) => {

    (window as any).HYVOR_TALK_WEBSITE = websiteId;

    useEffect(() => {

        const scriptId = 'ht-comment-count-script';

        if (document.getElementById(scriptId)) {
            removeScript(scriptId);
        }
        addScript('//talk.hyvor.com/web-api/count.js', scriptId);

    }, [id, mode, language]);

    const props = {
        'data-talk-id': id,
        'data-talk-mode': mode || 'default',
        'data-talk-language': language
    };

    return <span {...props} />;
};

export default CommentCount;