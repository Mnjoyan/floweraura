import rose from '../../components/sectionthree/sectionthreeimg/2017-10-04.webp'
import rose2 from '../../components/sectionthree/sectionthreeimg/2017-10-04 (1).webp'
import kitkat from '../../components/sectionthree/sectionthreeimg/amusing-kitkat-cake-9954020ca-A.webp'
import love from '../../components/sectionthree/sectionthreeimg/Divine Love_0.webp'
import cake from '../../components/sectionthree/sectionthreeimg/enchanting-oreo-cake-9954040ca-B.webp'
import germanycake from '../../components/sectionthree/sectionthreeimg/germany-forest-cake-9954100ca-A.webp'
import tender from '../../components/sectionthree/sectionthreeimg/Tender-Heart.webp'
import thrilled from '../../components/sectionthree/sectionthreeimg/thrilled-choconilla-cake-9954060ca-D (1).webp'

const initialSectionThree = {
        flowerone: [
                {id: 0, src: rose, pretty: 'Black Forest', price: 'Rs.449', today: 'Earliest Delivery: '},
                {id: 1, src: rose2, pretty: 'Amusing KitKat', price: 'Rs.699', today: 'Earliest Delivery: '},
                {id: 2, src: kitkat, pretty: 'Pinnaple Cake', price: 'Rs.701', today: 'Earliest Delivery: '},
                {id: 3, src: thrilled, pretty: 'Enchating Cake', price: 'Rs.523', today: 'Earliest Delivery: '},
        ],
        flowertwo: [
                {id: 0, src: love, pretty: 'Pristin Love', price: 'Rs.415', today: 'Earliest Delivery: '},
                {id: 1, src: cake, pretty: 'Orchid N Roses', price: 'Rs.685', today: 'Earliest Delivery: '},
                {id: 2, src: germanycake, pretty: 'Chocolate & Rose', price: 'Rs.785', today: 'Earliest Delivery: '},
                {id: 3, src: tender, pretty: 'Bloom In Love', price: 'Rs.652', today: 'Earliest Delivery: '},
        ],
        flowerthree: [
                {id: 0, src: rose, pretty: 'Black Forest', price: 'Rs.449', today: 'Earliest Delivery: '},
                {id: 1, src: rose2, pretty: 'Amusing KitKat', price: 'Rs.699', today: 'Earliest Delivery: '},
                {id: 2, src: kitkat, pretty: 'Pinnaple Cake', price: 'Rs.701', today: 'Earliest Delivery: '},
                {id: 3, src: thrilled, pretty: 'Enchating Cake', price: 'Rs.523', today: 'Earliest Delivery: '},
        ]

}

export default (state = initialSectionThree, action) => {
    return state
}