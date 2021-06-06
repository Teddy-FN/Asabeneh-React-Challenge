import React from 'react'
import GenerateClass from './Components/GenerateClass'
export default class GenerateColors extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log('INI PROPS GENERATE CLASS Compo', this.props)
        const {
            generateColor
        } = this.props
        console.log('INI COLOR',generateColor)
        return (
            <div className="card-wrapper">
                <section className="generate-title">
                    <h1>{this.props.title}</h1>
                </section>
                <section className="color-wrapper">
                    <GenerateClass generateColor={generateColor} />
                </section>
            </div>
        )
    }
}

GenerateColors.defaultProps = {
    title: 'Generate Color Class Components'
}