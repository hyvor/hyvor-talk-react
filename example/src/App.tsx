import React, { useState } from 'react'

import BlogPage from './BlogPage'
import Listing from './Listing'

export default function App() {

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