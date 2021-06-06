import React from 'react'

export default class GenerateClass extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('INI ADALAH PROPS CLASS COMPO GENERATE',this.props)
        const {
            generateColor
        } = this.props
        console.log('INI ADALAH',generateColor)
        const arrColors = []
        for (let a = 0; a < 5; a++) {
            let hexaColors = '#'
            for (let i = 0; i < 6; i++ ) {
                hexaColors += generateColor.charAt(Math.floor(
                    Math.random() * generateColor.length
                ))   
            }
            arrColors.push(hexaColors)
        }
        console.log('ARR COLORS ARRAY',arrColors)
        return (
            <div>
                {
                    arrColors.map((items, idx) => {
                        const styled = {
                            backgroundColor: items,
                            margin: 5,
                            padding: 10,
                            color: 'white'
                        }
                        return (
                            <div key={idx} style={styled} className="colors-wrapper">
                                <p>{items}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}