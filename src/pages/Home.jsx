import React from 'react'
import Header from '/src/components/Header.jsx'
import MidSection from '/src/components/MidSection.jsx'
import photo from '/src/assets/images/LashTech_round.png'
import lashes01 from '/src/assets/images/eyelashExtensions_01.png'
import lashes02 from '/src/assets/images/eyelashExtensions_02.png'
import lashes03 from '/src/assets/images/eyelashExtensions_03.png'
import lashes04 from '/src/assets/images/eyelashExtensions_04.png'
import lashes05 from '/src/assets/images/eyelashExtensions_05.png'
import lashes06 from '/src/assets/images/eyelashExtensions_06.png'
import lashes07 from '/src/assets/images/eyelashExtensions_07.png'
import lashes08 from '/src/assets/images/eyelashExtensions_08.png'
import lashlift01 from '/src/assets/images/lashLift_client01_before.png'
import lashlift02 from '/src/assets/images/lashLift_client1_after.png'
import lashlift03 from '/src/assets/images/lashLift_client2_before.png'
import lashlift04 from '/src/assets/images/lashLift_client2_after.png'
import Testimonial from '/src/components/Testimonial.jsx'




export function Home() {

   return(
            <main className="page-content">
                <Header 
                    title="LASH LIFT & EXTENSIONS" 
                    tagline="Enjoy elegant, effortless & naturally beautiful lashes from beach walks to evenings out."               
                />
                <MidSection layout="grid"/>
                <section className="hello-lash-tech">
                    <div className="hello-lash-tech-items">
                        <h2 className="welcome-text">Hello I'm Joanna, your Eyelash Technician.</h2>
                        <img src={ photo } alt="photo of the eyelash technician smiling"/>
                        <h3>My clients favour a natural, classic & elegant style. I enjoy creating gorgeous lashes which you feel could be your own.</h3>
                    </div>
                </section>
                <section className="lash-gallery">
                    <h2>Classic eyelash extensions</h2>
                    <div className="lash-grid">
                        <img src={lashes01} alt="One of eight pictures of eyelash extensions applied to one eye."/>
                        <img src={lashes02} alt="One of eight pictures of eyelash extensions applied to one eye."/>
                        <img src={lashes03} alt="One of eight pictures of eyelash extensions applied to one eye."/>
                        <img src={lashes04} alt="One of eight pictures of eyelash extensions applied to one eye."/>
                        <img src={lashes05} alt="One of eight pictures of eyelash extensions applied to one eye."/>
                        <img src={lashes06} alt="One of eight pictures of eyelash extensions applied to one eye."/>
                        <img src={lashes07} alt="One of eight pictures of eyelash extensions applied to one eye."/>
                        <img src={lashes08} alt="One of eight pictures of eyelash extensions applied to one eye."/>
                    </div>
               
                    <h2>Lash Lift/Lamination</h2>
                    <div className="lash-lift-grid">
                        <div className="lift">
                            <h4>Before</h4>
                            <img src={lashlift01} alt="Photo of lashes before lash lift."/>
                        </div>
                        <div className="lift">
                            <h4>After lash lift</h4>
                            <img src={lashlift02} alt="Photo of lashes after lash lift."/>
                        </div>
                    </div>
                    <div className="lash-lift-grid">
                        <div className="lift">
                            <h4 id="image-title">Before</h4>
                            <img src={lashlift03} alt="Photo of lashes before lash lift."/>
                        </div>
                        <div className="lift">
                            <h4>After lash lift</h4>
                            <img src={lashlift04} alt="Photo of lashes after lash lift."/>
                        </div>  
                    </div>
                </section>
                <section className="testimonial-section">
                    <h2>Client Testimonials</h2>
                    <Testimonial 
                        content="I've never felt so beautiful as my wedding day thanks to you x x x."
                        clientName="🩷 Joanna H"
                    />
                    <Testimonial
                        content="Jo takes extra care with my lashes, she knows the classic, natural look I am after and has amazing attention to detail. I love my lashes after Jo does them, they save me so much time doing my make up!"
                        clientName="🩷 Megan W"
                    />
                    <Testimonial 
                    content="They are beautiful 🤩 Thank you so much 🙏😁"
                    clientName="🩷 Lisa P"
                    />
                    <Testimonial
                        content="I have been so impressed with how natural looking they are yet they really do make my eyes stand out. I would certainly recommend these type of lashes to my friends and I will definitely be a regular customer."
                        clientName="🩷 Maria R"
                    />
                    <Testimonial
                    content="They look so long and lush but also completely natural. Jo really made me feel at ease throughout and was very professional, she knows her stuff. Would highly recommend. ⭐️⭐️⭐️⭐️⭐️"
                    clientName="🩷 Jo C"
                    />
                    <Testimonial 
                    content="Jo is undoubtably the best lash artist.  She is extremely conscientious, professional and has a great personality."
                    clientName="🩷 Marina B"
                    />
                </section>
            </main>
    )
}

export default Home