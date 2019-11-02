import React, {Component} from 'react'
import cacke from './HeaderSliderImg/cake-desktop.webp'
import flower from './HeaderSliderImg/Flower-new.webp'
import plant from './HeaderSliderImg/plant-desktop.webp'
import './HeaderSlider.css'

export default class HeaderSlider extends Component {
    state = {
        num: 1,
    }
    SliderHandler = () => {
        this.state.num += 1
        if(this.state.num > 3) {
            this.state.num = 1
        }
        this.setState({})
    }
    SliderLeftHandler = () => {
        this.state.num -= 1
        if(this.state.num === 0) {
            this.state.num = 3
        }
        Math.abs(this.state.num)
        this.setState({})
    }
    componentWillMount = setInterval(() => {
            this.SliderHandler()

    }, 10000)
    firstChangeHandler = () => {
        this.state.num = 1
        this.setState({})
}
    secondChangeHandler = () => {
        this.state.num = 2
        this.setState({})
    }
    thirdChangeHandler = () => {
        this.state.num = 3
        this.setState({})
    }
    render() {
        return(
            <div className={'sliderbar'} onMouseMove={this.StopSliderHandler}>
                <img src={this.state.num === 1 ?
                    cacke : this.state.num === 2 ?
                    flower : this.state.num === 3 ?
                    plant : null}
                    alt="" className={'sliderimg'}/>
                <div className={'changeslider'}>
                    <div className={'btngroup'}>
                        <button className={'sliderbtn'} onClick={this.SliderLeftHandler}> <i className="fa fa-chevron-left"></i> </button>
                        <button className={'sliderbtn'} onClick={this.SliderHandler}> <i className="fa fa-chevron-right"></i> </button>
                    </div>
                    <div className={'slidertitle'}>
                        <h2> {this.state.num === 1 ? 'Toothsome Cakes' : this.state.num === 2 ? 'Green Gifts' : this.state.num === 3 ? 'Splendid Blooms' : null} </h2>
                        <h5> {this.state.num === 1 ? 'Frosted With Love' : this.state.num === 2 ? 'Show Your Care With Plants' : this.state.num === 3 ? 'Personalized Gifts Celebrations' : null} </h5>
                        <div className={'giftnow'}>
                            <a href="">Gift Now</a>
                        </div>
                    </div>
                </div>
                <div className={'underslider'}>
                <div onClick={this.firstChangeHandler} className={'change'} style={this.state.num === 1 ? {backgroundColor: 'white'} : null}></div>
                <div onClick={this.secondChangeHandler} className={'change2'} style={this.state.num === 2 ? {backgroundColor: 'white'} : null}></div>
                <div onClick={this.thirdChangeHandler} className={'change3'} style={this.state.num === 3 ? {backgroundColor: 'white'} : null}></div>
            </div>
            </div>
        )
    }
    }
