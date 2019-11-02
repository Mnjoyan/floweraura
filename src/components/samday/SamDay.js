import React from 'react'
import {connect} from 'react-redux'

const SamDay = ({surprise}) => {
    return(
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

    )
}

const mapStateToProps = state => {
    return {
        surprise: state.samday
    }
}

export default connect(mapStateToProps)(SamDay)