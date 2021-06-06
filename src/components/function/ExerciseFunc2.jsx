import React from 'react'
import '../style/Function/Exercise2.css'

export const ExerciseFunc2 = (props) => {
    console.log('INI PROPS FUNCTION 2',props)
    const titles = props.title
    const subTitles = props.subTitle
    console.log('SUBBBB',subTitles)

    // desctruting input map 
    const {
        inputName
    } = props

    return (
        <div className="card-wrapper subsricbe-text">
            <section className="subrcribe-wrapper">
                <h1>{titles.toUpperCase()}</h1>
                <p>{subTitles}</p>
            </section>
            <section className="input-wrapper">
                <form>
                    <div className="input-user-wrapper">
                        {
                            inputName.map((items, idx) => {
                                return (
                                    <input type="text" placeholder={items} key={idx} />
                                )
                            })
                        }
                    </div>
                    <div className="btn-wrapper">
                        <button>TEXT</button>
                    </div>
                </form>
            </section>
        </div>
    )
}
ExerciseFunc2.defaultProps = {
    title: 'subscribe',
    subTitle: 'Sign up with your email address to receive news and updates'
}
