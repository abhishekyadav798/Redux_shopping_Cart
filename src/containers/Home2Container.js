import { connect } from 'react-redux'
import Home2 from '../components/Home2'
import { addToCart,removeToCart} from '../services/actions/action'

const mapStateToProps = state =>({
//   cartData :state
})

const mapDispatchToProps = dispatch =>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home2)
// export default Home