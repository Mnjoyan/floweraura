import React from 'react'
import './SectionOne.css'
import {connect} from 'react-redux'


const SectionOne = ({flowers}) => {

    return(
        <div className={'flowerssection'}>
            {flowers.map(elem => {
                return(
                    <div key={elem.id} className={'sectiononeitems'}>
                        <div className={'flowersscale'}>
                            <img src={elem.src}/>
                        </div>
                        <div className={'overflowers'}>
                            <h2> {elem.text} </h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        flowers: state.sectiononeflowers
    }
}

export default connect(mapStateToProps)(SectionOne)