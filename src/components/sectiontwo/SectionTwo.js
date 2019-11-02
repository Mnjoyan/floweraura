import React, {Component} from 'react'
import './SectionTwo.css'
import {connect} from 'react-redux'

class SectionTwo extends Component {

    state = {
        istrue: false,
    }
    rightHandler = () => {
        this.setState({
            istrue: true
        })
    }
    leftHandler = () => {
        this.setState({
            istrue: false
        })
    }
    render() {
        return(
            <div className={'sectiontwogeneral'}>
                <div className={'browse'}>
                    <h2>Browse By Occasion</h2>
                </div>
                <div className={'open'}>
                    <div className={'underscore'}></div>
                    <div className={'congratulations'}>
                        <div className={'btnleftabsolute'}>
                        </div>
                        {this.props.some.map((elem, index) => {
                            return(
                                <div key={index}  className={'lovers'} style={this.state.istrue ? {marginLeft: -348} : !this.state.istrue ? {marginRight: -348} : null}>
                                    <img src={elem.src} alt=""/>
                                    <div className={'elemtitle'}>
                                        <h3> {elem.title} </h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={'here'}>
                        <div className={'jl1'}>
                            <button onClick={this.leftHandler}> <i className="fa fa-chevron-left" /> </button>
                        </div>
                        <div className={'jl2'}>
                            <button onClick={this.rightHandler}><i className="fa fa-chevron-right" /> </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        some: state.sectiontworeducer
    }
}

export default connect(mapStateToProps)(SectionTwo)