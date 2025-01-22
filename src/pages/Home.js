import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './styles/style.css'
import Courses from '../components/Courses/Courses'

function Home() {
  return (
    <div>
        <Nav />
        <Header />

        <section className='about'>
            <h1>
                Découvrez Nos <span>Formations</span>
            </h1>
            <p>Rejoignez nos bootcamps dès maintenant</p>
        </section>

        <section className='courses-section'>
            <div className="courses-links">
                <Link to="">Informatique</Link>
                <Link to="">Design</Link>
                <Link to="">Marketing</Link>
                <Link to="">IA</Link>
            </div>

            <div className="courses-card">
                <Courses image="" title="Python" description="Lorem ipsum" />
                <Courses image="" title="JavaScript" description="Lorem ipsum" />
                <Courses image="" title="Fondamentaux C#" description="Lorem ipsum" />
                <Courses image="" title="Software Engineering" description="Lorem ipsum" />
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default Home