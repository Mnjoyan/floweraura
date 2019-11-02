import React, {Component} from 'react'
import './Inputs.css'

export default class Inputs extends Component {
    state = {
        showcity: false
    }
    showCity = () => {
        this.setState({
            showcity: true
        })
        console.log(this.state.showcity)
    }
    hideCity = () => {
        this.setState({showcity: false})
    }
    render() {
        return(
                <div className={'usermenu'}>
                    {this.state.showcity ? <div className={'showcity'}>
                                                <div className={'biggrey'}>
                                                    <span onClick={this.hideCity}> <i className="fa fa-times"></i> </span>
                                                </div>
                                            </div> : null}
                <div className={'choosedelivery'} onClick={this.showCity}>
                    <i className="fa fa-map-marker"></i>
                    <input type="text" placeholder={'Choose Delivery City'}/>
                    <i className="fa fa-chevron-down"></i>
                </div>
                <div className={'searchforgifts'}>
                    <input type="text" placeholder={'Search for gifts, flowers...'}/>
                </div>
                <div className={'sign'}>
                    <i className="fa fa-user"></i> <span>Sign In</span>
                </div>
                <div className={'track'}>
                    <i className="fa fa-credit-card"></i> <span> Track Order </span>
                </div>
                <div className={'mycart'}>
                    <i className="fa fa-shopping-cart"></i> <span> My Cart </span> <span className={'zero'}> 0 </span>
                </div>
            </div>
        )
    }
}