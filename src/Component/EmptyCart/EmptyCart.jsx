import Emptycart from '../../assets/images/emptycart.png';
import './EmptyCart.css';

const EmptyCart=()=>{
    return(<section className="emptycart">
        <div className='empty-cart-container'>
            <img src={Emptycart} alt='empty-cart-img'/>
        </div>
       <p className='empty-font'>Looks like you have not added anything yet. <br/>Go ahead Explore Top Bestsellings.</p>
    </section>)
}

export default EmptyCart;