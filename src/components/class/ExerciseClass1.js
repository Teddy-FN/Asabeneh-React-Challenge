import React from 'react'
// CSS styling
import '../style/class/ExercieClassOne.css'



export default class ExerciseClass1 extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log('INI PADA SEBUAH CLASS COMPO',this.props)
        // Coba Destruturing props
        const {
            arrImage
        } = this.props
        return(
            <div className="card-wrapper">
                <section className="tag-logo-wrapper">
                    <h1>{this.props.title}</h1>
                </section>
                <section className="img-technologies-wrapper">
                    {
                        arrImage.map((items, idx) => {
                            return (
                                <div className="card-logo" key={idx}>
                                    <img src={items} alt="logo"/>
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
}

ExerciseClass1.defaultProps = {
    title : 'Front End Technologies',
    dates: new Date()
}