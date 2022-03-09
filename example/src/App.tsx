import React, { useState } from 'react'

import BlogPage from './BlogPage'
import Listing from './Listing'
import Palette from './Palette';

export default function App() {

    const [section, setSection] = useState(<Listing />);

    return (
        <div>
        <header>
            <span onClick={() => setSection(<Listing />)}>Listing</span>
            <span onClick={() => setSection(<BlogPage />)}>Blog Page</span>
            <span onClick={() => setSection(<Palette />)}>Palette</span>
        </header>

        { section }

        </div>
    )

}