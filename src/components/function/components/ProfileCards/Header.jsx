import React from 'react'

function Header({ job, name, profileImg, skill, check }) {
    console.log('INI JOB',job)
    console.log('INI NAME',name)
    console.log('INI PROFILE',profileImg)
    console.log('INI SKILLS',skill)
    return (
        <header>
            <section className="logo-wrapper">
                <img src={profileImg} alt="profile-user"/>
            </section>
            <section>
                <h4>{name.firstName} {name.lastName}</h4>
                <img src={check} alt="CheckList" />
            </section>
        </header>
    )
}

export default Header
