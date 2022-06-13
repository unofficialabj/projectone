import React from 'react'

const index = () => {
  return (
    <div className="footer">
        <img src="logo.png" alt="logo-foot" width="200px" id="logo-foot" />
        <div style={{margin: '0px 0px 0px 20x'}}>
          <h3 style={{textAlign: 'left', margin: '-25px 0px 0px 20px'}}>Social Media</h3>
          <div style={{display: 'flex'}}>
            <div><img src="fb.png" style={{textAlign: 'left', margin: '0px -10px 0px 22px', width: '25px', display: 'block'}} /></div>
            <div><a href="https://www.facebook.com/unofficial.abj" style={{margin: '10px'}}>Facebook</a></div>
          </div>
          <div style={{display: 'flex'}}>
            <div><img src="insta.png" style={{textAlign: 'left', margin: '0px -12px 0px 25px', width: '18px', display: 'block'}} /></div>
            <div><a href="https://www.instagramk.com/unofficial.abj" style={{margin: '10px'}}>Instagram</a></div>
          </div>
          <div style={{display: 'flex'}}>
            <div><img src="tw.png" style={{textAlign: 'left', margin: '0px -10px 0px 25px', width: '20px', display: 'block'}} /></div>
            <div><a href="https://www.twitter.com/unofficial.abj" style={{margin: '10px'}}>Twitter</a></div>
          </div>
          <div style={{display: 'flex'}}>
            <div><img src="in.png" style={{textAlign: 'left', margin: '0px -10px 0px 22px', width: '25px', display: 'block'}} /></div>
            <div><a href="https://www.linkedin.com/in/anish-bhakta-7b1a0a190/" style={{margin: '10px'}}>Linkedin</a></div>
          </div>
        </div>
        <hr style={{color: 'black'}} /> 
        <ul className="list1">
          <li>©Anish Bhakta Joshi</li>
          <li>copyright © 2021</li>
          <li>Biratnagar, Nepal</li>
        </ul>
      </div>
  )
}

export default index