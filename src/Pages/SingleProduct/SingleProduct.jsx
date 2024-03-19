import React from 'react'


import "./SingleProduct.scss"
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import ProductData from '../../faker/ProductData'
const SingleProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const product = ProductData.find(data => data.id == id)
    // console.log(product);
    // if(product.id == undefined){
    //     navigate('*')
    // }
  return (
    <>
        <Container>
        <div className="single-product-page">
            <div className="left-sec">
                <img src={product.img} alt="" />
            </div>
            <div className="right-sec">
                <div className="product-name">{product.name}</div>
                <hr />
                <div className="pro-price">
                                <div className="reg-price">{product.reg_price} $</div>
                                <div className="sell-price">{product.sell_price} $</div>
                            </div>
                            <hr />
                <div className="desc">
                    <p className='text-muted'>{product.desc}</p>
                </div>
                <button className='btn btn-primary'>Add to card</button>
            </div>
        </div>
        </Container>
    </>
  )
}

export default SingleProduct