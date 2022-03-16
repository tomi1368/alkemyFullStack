import React from 'react'
import { Link } from 'react-router-dom'
import "./Hero.scss"
const Hero = () => {
  return (
    <div className='hero-grid'>
      <div className='hero-grid__info'>
        <h1 className='hero-grid__info__title'>A wallet app that wins</h1>
        <p className='hero-grid__info__description'>My Wallet app shows you everything you want to see in order to understand where you've been spending your money</p>
        <Link className='hero-grid__info__btn' to={"/register"}>Create your Account</Link>
      </div>
      <div className='hero-grid__image'>
        <img src="https://32173j2csrp24depwt3pfa37-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/savings_piggy_bank.svg" alt="" />
      </div>
    </div>
  )
}

export default Hero