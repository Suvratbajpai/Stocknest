import React from 'react';

function Stats() {
    return ( 
        <div className='container p-4'>
            <div className='row p-5 '>
                <div className='col-6 p-5'>
                    <h1 className='fs-1 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust StockNest with ₹3.5+ lakh crores worth of equity investments</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications.High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-4'>The StockNest Universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem.Our investmets in 30+ fintech startups offer you tailored services specific to your needs</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you to do better with your money</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' style={{width:"100%"}}/>
                    <div className='text-center'>
                        <a className='mx-5' style={{textDecoration:"none"}}>Explore Our Products <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        <a className='' style={{textDecoration:"none"}}>Try Kite demo  <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;