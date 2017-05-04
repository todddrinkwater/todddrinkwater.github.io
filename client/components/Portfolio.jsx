import React from 'react'

class Portfolio extends React.Component {
  render () {
    return (
      <div className="portfolio">
        <h1 className="portfolioHeader">My Projects</h1>

          <div className="portfolioItem">
            <div className="portfolioItemTitle"><h1>Community Sharing</h1></div>
            <div className="portfolioItemDetails">
              <div className="portfolioItemImage"><img   src={"/img/community-sharing-home.png"} /></div>
              <div className="portfolioItemDesc">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</div>
            </div>
          </div>

          <div className="portfolioItem">
            <div className="portfolioItemTitle"><h1>Sign Here</h1></div>
            <div className="portfolioItemDetails">
              <div className="portfolioItemImage"><img   src={"/img/sign-here-home.png"} /></div>
              <div className="portfolioItemDesc">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</div>
            </div>
          </div>



      </div>
    )
  }
}

export default Portfolio
