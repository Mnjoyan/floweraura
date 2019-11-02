import React, {Component} from 'react'
import {connect} from 'react-redux'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


class SectionThreeTwo extends Component {
    render() {
        return(
            <div className={'gray'}>
                <div className={'view'}>
                    <div className={'viewflower'}>
                        <h2>Cakes</h2>
                        <div className={'underscores'}></div>
                    </div>
                    <div className={'allview'}>
                        <a href=""> View All </a>
                    </div>
                </div>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={40}
                    totalSlides={3}

                >
                    <ButtonBack className={'chevronleft'}>
                        <div className={'relonleft'}>
                            <i className="fa fa-chevron-left"></i>
                        </div>
                    </ButtonBack>
                    <Slider>
                        <Slide index={0}><div className={'dfl'}>
                            {this.props.gifts.flowerone.map(elem => {
                                return(
                                    <div className={`slides`} id={`slid${elem.id}`}>
                                        <img src={elem.src} alt="" className={`f${elem.id}`}/>
                                        <div className={'white'}>
                                            <div className={'bellowflower'}>
                                                <div className={'pretty'}> <h2> {elem.pretty} </h2>  </div>
                                                <div> <h3> <b>  {elem.price} </b> </h3> </div>
                                                <div> <p> {elem.today} <span className="greenshadow">Today</span>  </p> </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}</div>
                        </Slide>
                        <Slide index={1}>
                            <div className={'dfl'}>
                                {this.props.gifts.flowertwo.map(elem => {
                                    return(
                                        <div className={`slides`} id={`slid${elem.id}`}>
                                            <img src={elem.src} alt="" className={`f${elem.id}`}/>
                                            <div className={'white'}>
                                                <div className={'bellowflower'}>
                                                    <div className={'pretty'}> <h2> {elem.pretty} </h2>  </div>
                                                    <div> <h3> <b>  {elem.price} </b> </h3> </div>
                                                    <div> <p> {elem.today} <span className="greenshadow">Today</span> </p> </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}</div>
                        </Slide>
                        <Slide index={2}>
                            <div className={'dfl'}>
                                {this.props.gifts.flowerthree.map(elem => {
                                    return(
                                        <div className={`slides`} id={`slid${elem.id}`}>
                                            <img src={elem.src} alt="" className={`f${elem.id}`}/>
                                            <div className={'white'}>
                                                <div className={'bellowflower'}>
                                                    <div className={'pretty'}> <h2> {elem.pretty} </h2>  </div>
                                                    <div> <h3> <b>  {elem.price} </b> </h3> </div>
                                                    <div> <p> {elem.today} <span className="greenshadow">Today</span>  </p> </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}</div>
                        </Slide>
                    </Slider>

                    <ButtonNext className={'chevronright'} onClick={this.incTotal}>
                        <div>
                            <i className="fa fa-chevron-right"></i>
                        </div>
                    </ButtonNext>
                </CarouselProvider>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gifts: state.sectionthreetwo
    }
}

export default connect(mapStateToProps)(SectionThreeTwo)