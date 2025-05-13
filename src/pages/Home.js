import React from 'react'
// import { Link } from 'react-router-dom'
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

        <section className='about-us'>
            <div className="left">
                <h1>C'est quoi <br />Beriverse Academy ?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laudantium perspiciatis tempora deleniti nesciunt sunt, tempore, veniam, amet fuga ducimus dignissimos! Ea nihil sit possimus harum error laudantium nesciunt maiores?</p>

            </div>

            <div className="right">
                <img src="3D BA logo.png" alt="" />
            </div>
        </section>

        <section className='courses-section'>
            {/* <div className="title">
                <h1>Nos Formations</h1>
                <p>Nous proposons des formations dans les domaines du Développement, Design, Big Data & Marketing Digital.</p>
            </div> */}
            <div className="courses">
                <Courses image="bigdata.jpg" title="Développement & Data" description="Deviens développeur ou data analyst prêt pour les défis du 21e siècle." />
                <Courses image="Design.jpg" title="Design" description="Crée des expériences visuelles qui marquent les esprits." />
                <Courses image="mark.jpg" title="Marketing Digital" description="Apprends à capter l’attention et à convertir avec les outils d’aujourd’hui." />
            </div>
        </section>
        
        <section>

        </section>

        <section className="upcoming">
            <div className="upcoming-items">
                <div className="upcoming-text">
                    <h1>Nos Evènements <span><br />à Venir</span></h1>
                    <p>
                    Participez à nos évènements pour non seulement rencontrer de nouvelles 
                    personnes avec des l'expertise mais aussi acquérir des connaissances.
                    </p>
                </div>

                <div className="upcoming-cards">
                    <div className="upcoming-left">
                        <h5>A VENIR...</h5>
                        <h2>Summer Camp</h2>
                        <p>Un camp pas comme les autres ! Plonge dans l’univers du code, du design, du big data et du marketing digital à travers des ateliers stylés, des défis créatifs et des vibes de ouf. 
                        Cet été, deviens la version la plus skillée de toi-même.</p>
                        <button>En Savoir Plus</button>
                    </div>
                </div>
            </div>
        </section>

        <section className="community">
            <div className="community-text">
                <h1>Rejoignez la Communauté <br />Beriverse Academy</h1>
                <p>
                </p>
                <button>Rejoindre</button>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default Home