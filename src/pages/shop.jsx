/*Home page of the window */
import React from 'react'
import Hero from '../components/Hero/hero'
import Popular from "../components/Popular/Popular.jsx";
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections.jsx'
import NewsLetter from '../components/NewsLetter/NewsLetter.jsx';

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}


export default Shop