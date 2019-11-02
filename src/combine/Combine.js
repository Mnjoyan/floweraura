import {combineReducers} from 'redux'
import navbar from '../reducers/navbar/Navbar'
import navbarHover from '../reducers/navbarhover/NavbarHover'
import sectiononeflowers from '../reducers/sectiononereducer/SectionOneReducer'
import sectiontworeducer from '../reducers/sectiontworeducer/SectionTwoReducer'
import sectionthreereducer from '../reducers/sectionthreereducer/SectionThreeReducer'
import surprise from '../reducers/Surprise'
import sectionthreetwo from '../reducers/sectionthreetwo/SectionThreeTwoReducer'
import samday from '../reducers/samday/SamDayReducer'
import assesment from '../reducers/assesment/Assesment'
import aboutus from '../reducers/aboutus/AboutUsReducer'


export default combineReducers({
    navbar,
    navbarHover,
    sectiononeflowers,
    sectiontworeducer,
    sectionthreereducer,
    surprise,
    sectionthreetwo,
    samday,
    assesment,
    aboutus
})