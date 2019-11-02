import React from 'react'
import './Navbar.css'
import {connect} from 'react-redux'

const Navbar = ({titles, hover}) => {
    return(
        <div className={'navbar'}>
            <div className="navbarcontainer">
                <ul className={'navbartitle'}>
                    {titles.map(elem => {
                        return(
                                <li key={elem.id} className={`lists${elem.id}`}>
                                    <a href="" className={'navbarlia'}> {elem.title} <i className="fa fa-chevron-down"></i> </a>
                                    <span className={`child${elem.id}`}> {hover.map(elem => {
                                        return(
                                            <div className={'generalhover'}>
                                                <div className={'bolder'}>
                                                    <div>
                                                        <div className={'elemname'}>
                                                            <b>{elem.name}  </b>
                                                        </div>
                                                        {elem.items.map(elem => {
                                                            return(
                                                                <a href="" className={'liststext'}> {elem} </a>
                                                            )
                                                        })}
                                                    </div>
                                                <div>
                                                    <div className={'elemname'}>
                                                        <b> {elem.nametwo} </b>
                                                    </div>
                                                    {elem.itemstwo.map(elem => {
                                                        return(
                                                            <a href="" className={'liststext'}> {elem} </a>
                                                        )
                                                    })}
                                                </div>
                                                </div>
                                            </div>
                                        )
                                    })} </span>
                                </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        titles: state.navbar,
        hover: state.navbarHover
    }
}

export default connect(mapStateToProps)(Navbar)