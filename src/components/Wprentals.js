import React, { useEffect, useState } from "react";
import { BsFill1SquareFill } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillHouseHeartFill } from "react-icons/bs";
import Carousel from'react-bootstrap/Carousel'
import l1 from'./l1.png'
import l2 from'./l1.png'
import l3 from'./l1.png'
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
const Onwer=[{
  
  id:1,
  icons:BsFill1SquareFill,
  d:'Register for free',
  paragraph :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',

},
{
  id:1,
  icons:BsFill1SquareFill,
  d:'Add your listing',
  paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
},
{
  id:1,
  d:'Upload beautiful images',
  paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
},
{
  id:1,

  d:'Publish your listing',
  paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
},
{
  id:1,
  d:'Get reservations',
  paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
},
{
  id:1,
  d:'Build a successful business',
  paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
},
] 
const Popular=[
  {
  id:1,
  ImageUrl:l1,
  rating:'rating:3',
  title:'Lilia Aflek',
  paragraph:'Verified and support'
},
{
  id:1,
  ImageUrl:l2,
  rating:'rating:3',
  title:'Lilia Aflek',
  paragraph:'Verified and support'
},
{
  id:1,
  ImageUrl:l3,
  rating:'rating:3',
  title:'Lilia Aflek',
  paragraph:'Verified and support'
}
]
const Wprentals = () => {
  const [list, setlist] = useState([])
  const [like,setlike] =useState([])
  const [live,setlive] =useState([])
  useEffect(() => {
    setlist([...ProductList])
    setlike([...Onwer])
    setlive([...Popular])
  }, [])
  return (
    <div className="rental container-fluid">
      <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src='' alt='First-slide'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src='' alt='Second-slide'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src=''alt='Third-slide'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
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
        
        <img src="https://www.worldatlas.com/r/w1200/upload/82/95/82/shutterstock-538921720.jpg" alt="2"  width="300" height="350"/>  
        <img src="https://i.insider.com/5c0aaf0af87e1e1b6c1ae2e6?width=750&format=jpeg&auto=webp" alt="3" width="300" height="350"/>
        <img src="https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-bangkok-thailand.jpg" alt="4" width="300" height="350"/> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnlXMOgdnG2kp0Yskq6G7Fqi3ArQFFCLpflg&usqp=CAU" alt="5" width="300" height="350"/>     
         </div>
          <ul className=" swathi  d-flex ">
        {like.map((eachOnwer) => {
          return (
            
            <li className=" col-xl-4 lio " key= {eachOnwer.id}>
              <h1>{eachOnwer.icons} <BsFill1SquareFill/></h1>
              <h4>{eachOnwer.d}</h4>
              <p className="col-lg-6">{eachOnwer.paragraph}</p>
            
            </li>
          )
        })}
      </ul>
    
      <div className="img100 container- fluid">
      <img src="https://i.pinimg.com/originals/d0/3e/3f/d03e3f8c9da41d8a56d891cdf9d6807b.jpg" alt="7"  width="1000" height="400"/> 
      <img src="https://i.pinimg.com/originals/54/52/51/5452513d8d53ab479ed7d2588f62314b.jpg" alt="1"  width="450" height="400"/>
      
 
      </div>
      <div className="img200 container-fluid">
      <img src="https://st.hzcdn.com/simgs/pictures/balconies/modern-city-condo-intrinsic-designs-build-group-img~0d41de360ef10e5e_14-6979-1-6559558.jpg" alt="7"  width="450" height="300"/> 
      <img src="https://st.hzcdn.com/simgs/pictures/balconies/modern-city-condo-intrinsic-designs-build-group-img~0d41de360ef10e5e_14-6979-1-6559558.jpg" alt="7"  width="450" height="300"/> 
      <img src="https://st.hzcdn.com/simgs/pictures/balconies/modern-city-condo-intrinsic-designs-build-group-img~0d41de360ef10e5e_14-6979-1-6559558.jpg" alt="7"  width="450" height="300"/> 
      </div>
      

      <div className="img300">
        </div>
        <div className="div1">
        <h1>Listings by amenities </h1>
        <p>Highlight the best of your categories</p>
        <div className="btn5">
          
          <button primary className="btn100"><BsFillHouseFill/>Home type</button>
          <button primary className="btn200"><BsFillHouseHeartFill/>Rental type</button>
          <button primary className="btn300"><BsFillGeoAltFill/>Rental city</button>
          <button primary className="btn400"><BsSearch/>Rental area</button>
          <ul className="ull">
            <li className="limp">Entar room</li>
            <li className="limp1">Private room</li>
            <li className="limp2">Shared room</li>
          </ul>
        </div>
        </div>
        <ul className=" mg p-0 d-flex row">
        {live.map((eachPopular) => {
          return (
            <li className="p1 col-xl-4 " key={eachPopular.id}>
              
              <img className="img11 w-100" src={eachPopular.ImageUrl} alt="fifgh" />
              <h5>{eachPopular.title}</h5>
              <p>{eachPopular.paragraph}</p>
             
            </li>
          )
        })}
      </ul>
      <div className="form1">
        <div>
          <h2>
Plan the best holiday with us</h2>
<p className="col-lg-4">Get in touch with us to plan your next holiday to our locations. We answer promptly to all messages.</p>
<div className="d-flex">
<h6>Name</h6>
<textarea name="message" id="message" cols="25" rows="2" placeholder="Name"></textarea>
<h6>Email*</h6>
<textarea name="message" id="message" cols="25" rows="2" placeholder="Email"></textarea>
</div>
<div className="d-flex pak5">
<h6 className="class3">Check-in*</h6>
<textarea name="message" id="message" cols="25" rows="2" placeholder="Check-in"></textarea>
<h6>Check-out*</h6>
<textarea name="message" id="message" cols="25" rows="2" placeholder="Check-out"></textarea>
</div>

        </div>

      </div>
 
    </div>

  );
}
export default Wprentals;