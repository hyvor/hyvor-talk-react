import './App.css';
import React, { useState } from 'react'

import BlogPage from './BlogPage.js'
import Listing from './Listing.js'

export default function App(){
    const [section, setSection] = useState('listing');

    function activateBlog() {
        setSection('blog')
    }
    function activateListing() {
        setSection('listing')
    }

    return (
        <div>
        <header>
            <span onClick={() => activateListing()}>Listing</span>
            <span onClick={() => activateBlog()}>Blog Page</span>
        </header>
        { 
            section === "blog" ? <BlogPage /> : <Listing />
        }
        </div>
    )
}
