import React from 'react'
import Footer from './components/ProfileCards/Footer'
import Header from './components/ProfileCards/Header'

function CardProfile({userData, title}) {
    console.log('USER DATA PADA CARD PROFILE',userData)
    const {
        dates,
        jobs,
        name,
        profilePicture,
        skills,
        cheskList,
        clockIcons
    } = userData
    return (
        <div className="container">
            <header>
                <h1>{title}</h1>
            </header>
            <main className="card-wrapper">
                <article>
                    <section>
                        <Header 
                            job={jobs} 
                            name={name} 
                            profileImg={profilePicture} 
                            skill={skills}
                            check={cheskList}
                        />    
                    </section>
                    <section>
                        <Footer 
                            date={dates}
                            clock={clockIcons}
                        />
                    </section>
                </article>
            </main>
        </div>
    )
}

CardProfile.defaultProps = {
    title: 'Card Profile User'
}

export default CardProfile
