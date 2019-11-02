import React from 'react'
import './Surprise.css'
import {connect} from 'react-redux'

const Surprise = ({surprise}) => {
    return(
        <div className={'conteiner'}>
            <div className={'surprise'}>
                <h2>Surprise For</h2>
                <div className={"redline"}></div>
            </div>
            <div className={'herorhim'}>
                {surprise.map(elem => {
                    return(
                        <div className={'special'}>
                            <div className={'icon'}>
                                <img src={elem.src} alt=""/>
                                <div className={'scalex'}>
                                    <h2> {elem.gender} </h2>
                                    <h5> {elem.text} </h5>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        surprise: state.surprise
    }
}

export default connect(mapStateToProps)(Surprise)