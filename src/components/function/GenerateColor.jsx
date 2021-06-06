import React from 'react'

import './style/generetaColor.css'
// Import
import GenerateDay4 from './components/GenerateDay4'


export const GenerateColor = (props) => {
    console.log('GENERATE COLOR',props)
    // Destruturing 
    const {
        generateColor
    } = props

    let arrs = []
    for (let i = 0; i < 5; i++) {
        let hexaColor = '#'
        for (let a = 1; a <= 6; a++) {
            hexaColor += props.generateColor.charAt(Math.floor(
                Math.random() * props.generateColor.length
            ))
            console.log('INI HEXA COLOR',hexaColor)
        }
        arrs.push(hexaColor)
    }
    console.log('INI ARRAY HEXACOLOR',arrs)
    return (
        <div className="card-wrapper">
            <section className="generate-title">
                <h1>{props.title}</h1>
            </section>
            <section className="color-wrapper">
                <GenerateDay4 colorsHexaArr={arrs} />
            </section>
        </div>
    )
}

GenerateColor.defaultProps = {
    title : 'Generate Color Function Components'
}