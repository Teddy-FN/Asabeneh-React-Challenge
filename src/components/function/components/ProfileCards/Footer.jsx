import React from 'react'

function Footer({date, clock }) {
    console.log('INI DATES FOOTER',date)
    const showDate = (date) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        const month = months[date.getMonth()]
        console.log('INI BULAN KAK',month)
    }
    return (
        <footer>
            <img src={clock} alt="clock-icons" />
            <p>{showDate(date)}</p>
        </footer>
    )
}

export default Footer
