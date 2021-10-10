import React from 'react'
import Content from './Content/Content';
import Navbar from './Navbar/Navbar';
import Posts from './Posts/Posts';
import Topcontent from './TopContent/Topcontent'
import Usercontent from './Usercontent/Usercontent'

function HomePage() {
    return (
        <>
            <Navbar />
            <Topcontent />
            <Usercontent />
            <Content />
            <Posts />
        </>
    )
}

export default HomePage;
