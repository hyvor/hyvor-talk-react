import HyvorTalk from 'hyvor-talk-react'
import React from 'react';

export default class BlogPage extends React.Component {

    render() {

        return (
            <div className="blog-content">
                <h1>The Ultimate Guide To POMODORO Technique</h1>
        
                <content>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. 
                
                Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.</content>
        
                <HyvorTalk.Embed 
                    websiteId={14}
                    id="pomodoro"
                />
            </div>
        )

    }

}