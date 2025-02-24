import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './styles/style.css'
import Courses from '../components/Courses/Courses'
import Coming from '../components/Coming/Coming'

function Home() {
  return (
    <div>
        <Nav />
        <Header />

        <section className='courses-section'>
            <div className="text">
                <h1>Découvrez <br />Nos Formations</h1>
                <div className="line"></div>
            </div>

            <div className="courses-card">
                <Courses 
                image="front.png" 
                title="Frontend Development" 
                description="Créez des sites web modernes et 
                interactifs avec HTML, CSS, JavaScript et React." 
                />

                <Courses 
                image="lg.jpg" 
                title="Introduction à la Programmation" 
                description="Apprenez les bases du code et de 
                la logique avec des langages accessibles comme Python." 
                />

                <Courses 
                image="design.jpg" 
                title="Graphic Design" 
                description="Maîtrisez les outils essentiels pour créer
                des visuels impactants et professionnels." />

                <Courses 
                image="montage.jpeg" 
                title="Motion Design" 
                description="Créez des animations dynamiques et 
                montez des vidéos percutantes et professionelles." />

                <Courses 
                image="bln.jpg" 
                title="La 3D avec Blender" 
                description="Initiez-vous à la modélisation et à 
                l'animation 3D avec le logiciel open-source Blender." />

                <Courses 
                image="ml.png" 
                title="Introduction au Machine Learning" 
                description="Découvrez les concepts clés du Machine Learning 
                et créez vos premiers modèles" />

                <Courses image="lyz.jpg" title="Analyse de Données" description="" />
                <Courses image="rs.jpg" title="Marketing des Réseaux Sociaux" description="" />
            </div>
        </section>
        
        <section className="bootcamp">
            <div className="bootcamp-items">
                <h1>Bootcamps</h1>
                <p>
                Nous organisons des séances intensives pour t’aider à maîtriser 
                rapidement les compétences clés du digital. À travers des sessions 
                structurées, des défis pratiques et un accompagnement dédié, nos 
                bootcamps te plongent dans un apprentissage immersif en Développement, 
                Marketing Digital, Data, IA, Cybersécurité & Design.
                </p>
            </div>
        </section>

        <section className="upcoming">
            <div className="upcoming-items">
                <div className="upcoming-text">
                    <h1>Nos Evènements <span>à Venir...</span></h1>
                    <p>
                    Participez à nos évènements pour non seulement rencontrer de nouvelles 
                    personnes avec des l'expertise mais aussi acquérir des connaissances.
                    </p>
                </div>

                <div className="upcoming-cards">
                    <Coming image="" type="Webinaire" title="Les Métiers du digital et opportunités" date="1 Mars, 2025" />
                    <Coming image="" type="Webinaire" title="Bonjour" date="1 Mars, 2025" />
                    <Coming image="" type="Webinaire" title="Bonjour" date="1 Mars, 2025" />
                </div>
            </div>
        </section>

        <section className="community">
            <div className="community-text">
                <h1>Rejoignez la Communauté <br />Beriverse Academy</h1>
                <p>Chez Beriverse Academy, apprendre, c’est aussi échanger. 
                Intégrez une communauté engagée où apprenants, formateurs et 
                professionnels partagent connaissances, conseils et opportunités.
                Posez vos questions, échangez sur vos projets et progressez ensemble. 
                Que vous débutiez ou soyez expert, vous n’êtes pas seul.</p>
                <button>Rejoindre</button>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default Home