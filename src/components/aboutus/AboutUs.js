import React from 'react'
import './AboutUs.scss'
import {connect} from 'react-redux'


const AboutUs = ({text}) => {
    return(
        <div className={'about'}>
            <h2 className={'generalabout'}>#1 Online Flower Delivery Portal In India</h2>
                {text.map(elem => {
                    return(
                        <div className={'textsection'}>
                            <h3>{elem.title}</h3>
                            <p>{elem.text}</p>
                        </div>
                    )
                })}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        text: state.aboutus
    }
}

export default connect(mapStateToProps)(AboutUs)