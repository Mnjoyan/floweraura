import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Assesment.css'
import {connect} from 'react-redux'


class Assessment extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={20}
                totalSlides={3}
            >
                <ButtonBack className={'leftside'}>
                    <div>
                        <i className="fa fa-chevron-left"></i>
                    </div>
                </ButtonBack>
                <ButtonNext className={'rightside'}>
                    <div>
                        <i className="fa fa-chevron-right"></i>
                    </div>
                </ButtonNext>
                <Slider>
                    <Slide index={0}>
                        <div className={'assesment'}>
                            {this.props.review.one.map(elem => {
                                return(
                                    <div key={elem.id} className={'childassesment'}>
                                        <div className={'information'}>
                                            <div>
                                                <div className={'pagetitle'}>
                                                    <h2> {elem.title} </h2>
                                                    <div className={'icons'}>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                    </div>
                                                </div>
                                                <div className={'datenow'}>
                                                    <h4> {elem.text} </h4>
                                                    <p> {elem.date} </p>
                                                </div>
                                                <div className={'recommends'}>
                                                <span className={'farthumbs'}>
                                                    <i className="fa fa-thumbs-up"></i>
                                                </span>
                                                    Recommends
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <i className="fa fa-thumbs-up finger"></i>
                                    </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Slide>
                    <Slide index={1}>
                        <div className={'assesment'}>
                            {this.props.review.two.map(elem => {
                                return(
                                    <div key={elem.id} className={'childassesment'}>
                                        <div className={'information'}>
                                            <div>
                                                <div className={'pagetitle'}>
                                                    <h2> {elem.title} </h2>
                                                    <div className={'icons'}>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                    </div>
                                                </div>
                                                <div className={'datenow'}>
                                                    <h4> {elem.text} </h4>
                                                    <p> {elem.date} </p>
                                                </div>
                                                <div className={'recommends'}>
                                                <span className={'farthumbs'}>
                                                    <i className="fa fa-thumbs-up"></i>
                                                </span>
                                                    Recommends
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <i className="fa fa-thumbs-up finger"></i>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Slide>
                    <Slide index={2}>
                        <div className={'assesment'}>
                            {this.props.review.one.map(elem => {
                                return(
                                    <div key={elem.id} className={'childassesment'}>
                                        <div className={'information'}>
                                            <div>
                                                <div className={'pagetitle'}>
                                                    <h2> {elem.title} </h2>
                                                    <div className={'icons'}>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                        <span> <i className="fa fa-star"></i> </span>
                                                    </div>
                                                </div>
                                                <div className={'datenow'}>
                                                    <h4> {elem.text} </h4>
                                                    <p> {elem.date} </p>
                                                </div>
                                                <div className={'recommends'}>
                                                <span className={'farthumbs'}>
                                                    <i className="fa fa-thumbs-up"></i>
                                                </span>
                                                    Recommends
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <i className="fa fa-thumbs-up finger"></i>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Slide>
                </Slider>
            </CarouselProvider>
        );
    }
}

const mapStateToProps = state => {
    return {
        review: state.assesment
    }
}

export default connect(mapStateToProps)(Assessment)