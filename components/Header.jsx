import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo2.png'
import {UilShoppingBag} from '@iconscout/react-unicons'
import { useStore } from '../store/store'

export default function Header() {
     const state =useStore((state)=>state)
    //  state 
     console.log(state)
    const items = useStore((state)=>state.cart.pizzas.length)
    return (
    <div className={css.header}>
       {/* logo */}
       <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50}/>
        <span>Pizza Mania</span>
       </div>

       {/* Menu  */}
       <ul className={css.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact us</li>
       </ul>
       {/* cart  */}
       <div className={css.rightSide}>
        <div className={css.cart}>
            <UilShoppingBag size={35} color="#2E2E2E"/>
            <div className={css.badge}>
                {items}
            </div>
        </div>
       </div>

    </div>
    )
  }
  