import React from 'react'

class Portfolio extends React.Component {
  render () {
    return (
      <div className="portfolio">
        <h1 className="portfolioHeader">My Projects</h1>

          <div className="portfolioItem">
            <div className="portfolioItemTitle"><h1>Community Sharing</h1></div>
            <div className="portfolioItemDetails">
              <div className="portfolioItemImage"><img src={"/img/community-sharing-home.png"} /></div>
              <div className="portfolioItemDesc">
                Community Sharing was an app designed by my team in our final week of Enspial Dev Academy BootCamp. It uses Javascript on both the front and back-end, and takes use of such frameworks and modules as React, Redux, Express, SuperAgent, and Knex. The main aim of our application was to build a product that could allow residents within Wellington to lend items and borrow items from each. The founding ideas behind this was to combat climate change and consumerism by buying less and sharing more.
              </div>
            </div>
          </div>

          <div className="portfolioItem">
            <div className="portfolioItemTitle"><h1>Sign Here</h1></div>
            <div className="portfolioItemDetails">
              <div className="portfolioItemImage"><img   src={"/img/sign-here-home.png"} /></div>
              <div className="portfolioItemDesc">
                SignHere is a personal project that is currently in progress. The aim of the application is to  eliminate the need for permission slips in the school setting. Permission Slips used to cost my school $75+ everytime I would print a set for a year level based trip, it caused more waste, and students would often lose them. This project is built using HTML5, CSS3, and Javascript. The key frameworks and modules are: React, Redux, Express, SuperAgent, Knex, and Signature_Pad.
              </div>
            </div>
          </div>



      </div>
    )
  }
}

export default Portfolio
