import React from 'react'
import {plans,features} from '../Data'
import ReactCardPlan from './ReactCardPlan';
import { Link } from 'react-router-dom'
import "../App.css"
import Hero from './Hero';
import Header from './Header'
import  Footer  from './Footer';



function ReactPricingCard() {
    console.log(plans);
    console.log(features);
    return (
      <>
     <Header/>
      <Hero/>
        <div  className="pricing py-5">
        
        <div className="container">
           
        <h2 className='container'>Pricing List</h2>
            <div className="row">
          
                {
                    plans.map((plan,index) => {
                        return <ReactCardPlan key ={index} plan = {plan} features={features} />
                    })
                }
              
            </div>
        </div>
        </div>
    <Footer/>
        </>
    )
}

export default ReactPricingCard
