import React from 'react';
import './App.css';

// Import Image
import Reacts from './assets/img/reactAtom.png'
// import Images
import Html from './assets/img/html.png'
import Css from './assets/img/css-3.png'
import Js from './assets/img/javascript.png'
import AtomReact from './assets/img/reactAtom.png'
import CheckList from './assets/img/checklist.png'
import ClockIcon from './assets/img/clock.png'
import Teddy from './assets/img/bear.png'
// import Class
import ExerciseClass1 from './components/class/ExerciseClass1'
import ExerciseClass2 from './components/class/ExerciseClass2'
import GenerateColors from './components/class/GenerateColors'

// Import Fucntioan Comp
import {ExerciseFunc1} from './components/function/ExerciseFunc1'
import {ExerciseFunc2} from './components/function/ExerciseFunc2'
import {GenerateColor} from './components/function/GenerateColor'
import CardProfile from './components/function/CardProfile'

export default class App extends React.Component {
  render() {
    console.log('INI PROPS', this.props)
    const arrayImage = [
      Html, Css, Js, AtomReact
    ]

    // Exercise 3
    const datasUser = {
      name: {
        firstName: 'Teddy',
        lastName: 'Ferdian'
      },
      jobs : [
        { text: 'Software Engginer', value: '01'},
        { text: 'Chef', value: '02'},
        { text: 'Marketing', value: '03'},
        { text: 'Software Engginer', value: '04'},
        { text: 'Software Engginer', value: '05'}
      ],
      skills : [
        'HTML', 'CSS', 'JavaScript', 'React', 'GIT', 'Node', 'React Native'
      ],
      dates: new Date()
    }
    const user = {...datasUser, 
      profilePicture: this.props.imgsProfile, 
      cheskList: CheckList,
      clockIcons: ClockIcon
    } 
    console.log('INI DATA USERs',user)

    return (
      <div className="container">
        <header className="header-wrapper">
          <h1>{this.props.dataUser.title}</h1>
          <div className="title-wrapper">
            <div className="img-wrapper">
              <img src={this.props.dataUser.images} alt="logo"/>
            </div>
            <h1>{this.props.dataUser.author.name}</h1>
          </div>
        </header>
        <main className="main-wrapper">
          <aside className="left-wrapper">
            <section>
                <h1>{this.props.functions.title}</h1>
              <section className="card-exercise-wrapper">
                <h3>{this.props.functions.functionsnal}</h3>
                <section>
                    <ExerciseFunc1 arrImage={arrayImage}/>
                </section>
              </section>
              <section className="card-exercise-wrapper">
                <ExerciseFunc2 inputName={this.props.inputText}/>
              </section>
              <section className="card-exercise-wrapper">
                <GenerateColor generateColor={this.props.generateColor}/>
              </section>
              <section className="card-exercise-wrapper"> 
                  <CardProfile userData={user}/>
              </section>
            </section>
          </aside>
          <aside className="right-wrapper">
            <section>
                <h1>{this.props.classComponents.title}</h1>
              <section className="card-exercise-wrapper">
                <h3>{this.props.classComponents.classFunctions}</h3>
                <section >
                  <ExerciseClass1 arrImage={arrayImage}/>
                </section>
              </section>
              <section className="card-exercise-wrapper">
                <ExerciseClass2 inputName={this.props.inputText}/>
              </section>
              <section className="card-exercise-wrapper">
                <GenerateColors generateColor={this.props.generateColor}/>
              </section>
            </section>
          </aside>
        </main>
        <footer className="footer-wrapper">
          <div>
            <p>CopyRight@ {this.props.dataUser.dates.getFullYear()}</p>
          </div>
        </footer>
      </div>
    );
  }
}

App.defaultProps = {
  dataUser : {
    title: '30 Days Challenge React - js',
    author: {
      name: 'Asabeneh'
    },
    images: Reacts,
    names: {
      firstName: 'Teddy Ferdian',
      lastName: 'Abrar Amrullah'
    },
    dates: new Date(),
  },
  functions: {
    title: 'Function Components',
    functionsnal: 'Exercise 1'
  },
  classComponents: {
    title: 'Class Components',
    classFunctions: 'Exercise 1'
  },



  // Exercise 2 
  inputText : [
    'First name', 'Last name', 'Email'
  ],
  // Exercise 3
  generateColor : '0123456789abcdef',
  // Execise 4 
  imgsProfile: Teddy
}