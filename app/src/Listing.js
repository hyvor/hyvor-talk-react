import React from 'react';
import HyvorTalk from 'hyvor-talk-react'

export default function Listing() {

    return (
        <div className="listing">
            <ListItem 
                title="The Ultimate Guide To POMODORO Technique"
                description="The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s."
                hyvorTalkId="pomodoro"
            />
            <ListItem 
                title="Diffused Mode Vs Focused Mode Thinking"
                description="Focus, as we traditionally define it, is doing one task or project, while minimizing time and attention on anything else."
                hyvorTalkId="diffused"
            />
        </div>
    )

}

function ListItem(props) {

    return (
        <div className="list-item">
            <h1>{props.title}</h1>
            <div className="description">{props.description}</div>
            <div> <HyvorTalk.CommentCount websiteId={14} id={props.hyvorTalkId} /> </div>
        </div>
    )

}