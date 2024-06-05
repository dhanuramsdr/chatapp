import React from 'react'
import { Link } from 'react-router-dom'

function ReactCardPlan({plan,features}) {
    return (
        <div className="col-sm-3">

           
            <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{plan.plan}</h5>
                    <h6 class="card-price text-center"> ₹{plan.Fee}<span class="period">/month</span></h6>
                    <p class="card-title text-muted text-uppercase text-center"> ₹{plan.Fee2}<span class="period">/year</span></p>
                    <hr />
                    <Link to="/register"> <button class="btn btn-block btn-primary text-uppercase" >Subscribe</button></Link><br/>
                    <ul class="fa-ul">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            {
                                plan.plan !== "FREE" ? <strong>{plan.user}</strong> : plan.user
                            }
                            
                        </li>
                        <li><span class="fa-li"><i class="fas fa-check"></i></span>{plan.storage}</li>
                        {
                            features.map((feature,index) => {
                                return <React.Fragment key = {index} >
                                    {
                                        plan.feature_flags[index] !== 0 
                                        ?
                                        <li>
                                            <span class="fa-li"><i class="fas fa-check"></i></span>
                                            {
                                            feature === "Free Subdomain" && plan.plan === "PRO" ?
                                                <><strong>Unlimited</strong> {feature} </>:  feature
                                            }
                                        </li> 
                                        :
                                        <li class="text-muted">
                                            <span class="fa-li"><i class="fas fa-times"></i></span>
                                            {
                                            feature === "Free Subdomain" && plan.plan === "PRO" ?
                                            <><strong>Unlimited</strong> {feature} </> :  feature
                                            }
                                        </li>
                                    }
                                </React.Fragment>
                            })
                        }
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default ReactCardPlan
