import React from 'react'
import "./aboutme.scss"

export default function Aboutme() {
  return (
    <div className="aboutme" id="aboutme">
        <div className="left">
        <div className="blankContainer">

        </div>
            <div className="imgContainer">
                <img src="assets/aboutmeimg.jpeg" alt="" />
            </div>
        </div>
        <div className="right">
            <div className="containerA">
                <h2>About me</h2>
                <p>Currently I'm 25 years old and I have recently concluded my masters degree in Informatics Engineering. I have a pet bird named Apollo, who I care about fondly, and in my free time I like to explore new technologies that interest me, ranging from computer graphics, Photoshop, Unity and, most recently, web development.</p>
            </div>
            <div className="containerB">
                <h2>Academic Progress</h2>
                <p>I started my bachelor's degree in Informatics Engineering in the University of Coimbra in 2015, where I had my first contact with programming. In this course I developed a liking for some aspects of programming such as basic problem-solving, Object Oriented Programming and Computater Graphics.
                     Additionally, I also learned to work with others since the course heavily relies on group projects.</p>
                <p>In 2019 I began my masters degree in Informatics Engineering on the field of Intelligent Systems in the University of Coimbra, where I solidified what I learned in the past years and explored some concepts that peaked my interest such as machine learning, pattern recognition and mobile computing, more specifically, Android Programming.</p>
                <p>I consider that these two years were very important for me, in the sense that they helped me develop a habit of learning by myself for myself.</p>
            </div>
        </div>
        
    </div>
  )
}
