import React from 'react'

export default class ExerciseClass2 extends React.Component {
   constructor(props) {
       super(props)
   }

   render() {
       console.log('INI PROPS',this.props)
       const {
        title, subTitle, inputName
       } = this.props
       return(
           <div className="card-wrapper subsricbe-text">
               <section className="subrcribe-wrapper">
                   
                   <h1>{title}</h1>
                    <p>{subTitle}</p>
               </section>
               <section className="input-wrapper">
                    <form>
                        <div className="input-user-wrapper">
                            {
                                inputName.map((items,idx) => {
                                    return (
                                        <input placeholder={items} key={idx} />
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
}

ExerciseClass2.defaultProps = {
    title: 'subscribe',
    subTitle: 'Sign up with your email address to receive news and updates'
}