import React from 'react'
import "./photoshop.scss"
import Product from '../product/Product'
import { products } from '../../data'
import { SRLWrapper } from "simple-react-lightbox";

export default function Photoshop() {
  return (
    <div className="photoshop" id="photoshop">
        <h2>Photoshop Gallery</h2>
        <p>Sometimes in my free time I like to explore Photoshop and After Effects to create digital art.</p>
        <SRLWrapper className="wrp">
          <div className="clist">
              {products.map(item=>(
                  <Product key={item.id} img={item.img}/>
              ))}
          </div>
        </SRLWrapper>
        

    </div>
  )
}
