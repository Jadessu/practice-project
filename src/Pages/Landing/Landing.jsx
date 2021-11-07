import React from 'react'
import Banner from './components/Banner/Banner'
import Categories from "./components/Categories/Categories"
import SecondaryBanner from "./components/SecondaryBanner/SecondaryBanner"
import Footer from '../../components/Footer/Footer'

function Landing() {
    return (
        <div>
            <Banner/>
            <Categories/>
            <SecondaryBanner/>
            <Footer/>
        </div>
    )
}

export default Landing
