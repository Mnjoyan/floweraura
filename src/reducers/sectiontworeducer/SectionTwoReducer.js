import sorry from '../../components/sectiontwo/sectiontwoimg/sorry.webp'
import anniversary from '../../components/sectiontwo/sectiontwoimg/anniversary.webp'
import birthday from '../../components/sectiontwo/sectiontwoimg/birthday.webp'
import congratulation from '../../components/sectiontwo/sectiontwoimg/Congratulation.webp'
import love from '../../components/sectiontwo/sectiontwoimg/Love-and-Affection.webp'


const initialSectionTwo = [
    {id: 0, src: sorry, title: 'Anniversary'},
    {id: 1, src: anniversary, title: 'Birthday'},
    {id: 2, src: birthday, title: 'Congratulations'},
    {id: 3, src: congratulation, title: 'Love & Affection'},
    {id: 4, src: love, title: 'Sorry'}
]

export default (state = initialSectionTwo, action) => {
    return state
}