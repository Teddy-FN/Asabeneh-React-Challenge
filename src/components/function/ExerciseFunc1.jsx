import React from 'react'

export const ExerciseFunc1 = (props) => {
    console.log('INI PROPS FUNCTION',props)
    // Destructuring props
    const {
        arrImage
    } = props
    return (
        <div className="card-wrapper">
            <section className="tag-logo-wrapper">
                <h1>{props.title}</h1>
            </section>
            <section className="img-technologies-wrapper">
                {
                    arrImage.map((items, idx) => {
                        return (
                            <div className="card-logo" key={idx}>
                                <img src={items} alt="logo" />
                            </div>
                        )
                    })
                }
            </section>
            <footer>
                <small>Test</small>
            </footer>
        </div>
    )
}

ExerciseFunc1.defaultProps = {
    title : 'Front End Technologies'
}