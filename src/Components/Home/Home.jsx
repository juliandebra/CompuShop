import React from 'react'

import  CarouselComponent  from './Carousel/CarouselComponent';
import './Home.css'
import Intel from '../img/intel.png'
import Amd from '../img/amd.png'
import Nvidia from '../img/nvidia.png'


const Home = () => {

    return (
        <div>
            <section >
                <CarouselComponent />
            </section>
            
            <div className="procesadores" > 
                <button  className="buttonShop">Get Started!</button>
                <section className="logo-procesadores" >
                    <img src={Intel} alt="intel" className="intel" color="grey" />   
                    <img src={Amd} alt="amd" className="amd" />  
                </section> 
            </div>
            <section className="video" >
                <img src={Nvidia} alt="nvidia" className="nvidia" />
            </section>
                
            

        </div>
    )
}

export default Home



