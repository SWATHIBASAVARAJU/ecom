import React, { useEffect, useState } from "react";

import Reactl from './blue1.png'
const ProductList = [{
  id: 1,
  ImageUrl: Reactl,
  title: 'Modern Villa with Pool',
  loction: 'East Side, New York',
  home: 'Villa / Entire home'
},
{
  id: 2,
  ImageUrl: Reactl,
  title: 'Modern Villa with Pool',
  loction: 'East Side, New York',
  home: 'Villa / Entire home'
},
{
  id: 3,
  ImageUrl: Reactl,
  title: 'Modern Villa with Pool',
  loction: 'East Side, New York',
  home: 'Villa / Entire home'
},
{
  id: 1,
  ImageUrl: Reactl,
  title: 'Modern Villa with Pool',
  loction: 'East Side, New York',
  home: 'Villa / Entire home'
},
{
  id: 2,
  ImageUrl: Reactl,
  title: 'Modern Villa with Pool',
  loction: 'East Side, New York',
  home: 'Villa / Entire home'
},
{
  id: 3,
  ImageUrl: Reactl,
  title: 'Modern Villa with Pool',
  loction: 'East Side, New York',
  home: 'Villa / Entire home'
}

]
const Wprentals = () => {
  const [list, setlist] = useState([])
  useEffect(() => {
    setlist([...ProductList])
  }, [])
  return (
    <div className="rental container-fluid">
      <div className="img2">
        <h1 className="wp">Beautiful Cabin to Rent</h1>
        <h4 className="col-lg-7 img5">Cozy home in summerlin only 1.5 miles to red rock resort and
          Downtown summerlin with ample shopping, dining and entertainment
          Red rock canyon state park is located less than 10miles away to
          enjoy hiking and rock clibing.more shopping dining daining and
          enatertainment located in tivoli village and boca park which is 2.5 miles
        </h4>
      </div>
      <ul className=" mg p-0 d-flex row">
        {list.map((eachProduct) => {
          return (
            <li className="p1 col-xl-4 " key={eachProduct.id}>
              <img className="img11" src={eachProduct.ImageUrl} alt="fifgh" />
              <h5>{eachProduct.title}</h5>
              <p>{eachProduct.loction}</p>
              <p>{eachProduct.home}</p>
            </li>
          )
        })}
      </ul>
      <h1 className="page3">Best places to visit​</h1>
      <p>The most trendy cities and areas in the world</p>
      <div className="headdiv">
        
        <img src="https://www.worldatlas.com/r/w1200/upload/82/95/82/shutterstock-538921720.jpg"  width="300" height="350"/>  
        <img src="https://i.insider.com/5c0aaf0af87e1e1b6c1ae2e6?width=750&format=jpeg&auto=webp" width="300" height="350"/>
        <img src="https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-bangkok-thailand.jpg" width="300" height="350"/> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnlXMOgdnG2kp0Yskq6G7Fqi3ArQFFCLpflg&usqp=CAU" width="300" height="350"/>     
         </div>
         <div className="infor">
          <h1>Listings by amenities</h1>
          <p>Highlight the best of your categories</p>
          <div className="buttoncls">
          
         </div>
    </div>
    </div>

  );
}
export default Wprentals;