import cakeone from '../../components/sectionone/sectiononeimg/cake.webp'
import combo from '../../components/sectionone/sectiononeimg/Combo.webp'
import flowerweb from '../../components/sectionone/sectiononeimg/Flowers.webp'
import platdesk from '../../components/sectionone/sectiononeimg/plant-desktop-home.webp'
import giftweb from '../../components/sectionone/sectiononeimg/gifts.webp'

const initialSectionOne = [
    {id: 0, src: cakeone, text: 'Flowers'},
    {id: 1, src: combo, text: 'Cakes'},
    {id: 2, src: flowerweb, text: 'Combos'},
    {id: 3, src: platdesk, text: 'Plants'},
    {id: 4, src: giftweb, text: 'Gifts'},
]

export default (state = initialSectionOne, action) => {
    return state
}