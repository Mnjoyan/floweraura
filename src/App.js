import React, {Component} from 'react'
import './App.css'
import logo from './AppImg/logo-new.npg'
import Inputs from "./components/inputs/Inputs";
import Navbar from './navbar/Navbar'
import HeaderSlider from "./components/headerSlider/HeaderSlider";
import SectionOne from "./components/sectionone/SectionOne";
import SectionTwo from "./components/sectiontwo/SectionTwo";
import SectionThree from "./components/sectionthree/SectionThree";
import Surprise from "./components/Surprise/Surprise";
import SectionThreeTwo from "./components/sectionthree/sectionthreetwo/SectionThreeTwo";
import SamDay from "./components/samday/SamDay";
import Assessment from './components/assesment/Assesment'
import AboutUs from "./components/aboutus/AboutUs";
import Footer from "./components/footer/Footer";

export default class App extends Component {
  state = {
      h:0
  }


    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.h);
        }
        window.scroll(0, window.pageYOffset - 30);
    }


    scrollhandler = () => {

        let h = setInterval(this.scrollStep.bind(this), .00001)
        this.setState({h:h})

    }
  render() {
    return(
        <div>
            <header>
                <div className={'head'}>
                    <div className="container">
                        <div className={'logo_search'}>
                            <div className={'logo'}>
                                <img src={logo} title="Home"/>
                            </div>
                            <div className="searchPanel">
                                <div className={'gifts'}>
                                    <div className={'ties'}>
                                        <div className={'franchies'}>
                                            <a href=""> Franchise</a>
                                        </div>
                                        <div className={'mid'}>
                                            <a href="">
                                                <i className="fa fa-gift"></i> <span> Corporate gifts </span>
                                            </a>
                                        </div>
                                        <div className='phoneNumber'>
                                            <i className="fa fa-phone"></i> <span> +91-9650062220 </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Inputs />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar />
                <HeaderSlider />
            </header>
            <section className="sectionone">
                <div className="container">
                    <SectionOne />
                </div>
            </section>

            <div onClick={()=>{{this.scrollhandler()}
            }} className={'backtotop'}>
                <div>
                    <i className="fa fa-angle-up"></i>
                </div>
                <p>Back</p>
                <p>To Top</p>
            </div>

            <section className="sectiontwo">
                <div className="container">
                    <SectionTwo />
                </div>
            </section>
            <section className="sectionthree">
                <div className="container">
                    <SectionThree />
                    <SectionThreeTwo />
                </div>
            </section>
            <section className="threeth">
                <div className="container">
                    <Surprise />
                </div>
            </section>
            <section className="sectionthree">
                <div className="container">
                    <SectionThree />
                    <SectionThreeTwo />
                </div>
            </section>
            <section className="samday">
                <div className="container">
                    <SamDay />
                    <div>
                        <Assessment />
                    </div>
                </div>
            </section>
            <section className="aboutus">
                <div className="container">
                    <AboutUs />
                </div>
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>

    )
  }
}