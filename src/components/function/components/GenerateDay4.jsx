import React from 'react'

const GenerateDay4 = ({colorsHexaArr}) => {
    console.log('ini components hexaColor ayo',colorsHexaArr)
    return (
        <div>
            {
                colorsHexaArr.map((items, idx) => {
                    const styles = {
                        backgroundColor: items,
                        margin: 5,
                        padding: 10,
                        color: 'white'
                    }
                    return (
                        <div className="colors-wrapper" key={idx} style={styles}>
                            <p>{items}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GenerateDay4
