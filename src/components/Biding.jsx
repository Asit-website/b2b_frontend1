import React from 'react'
import son from '../image/son.svg'
import Footer from '../common/Footer'
import yt from '../image/yt.svg'
const Biding = () => {
    return (
        <>
        <div className="main_budget">
            <div className="budget_man">
                <div className="budget_under">
                    <div className="budget_flex">
                        <div className="budget_left">
                            <div className="budget_content">
                                <h2>Construction Project <br /> Bidding Opportunities</h2>
                                <p>We connect contractors with a wide range of <br /> construction projects.</p>
                            </div>
                        </div>
                        <div className="budget_right">
                            <div className="budget_pro">
                                <img src={son} alt="son" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Biding
