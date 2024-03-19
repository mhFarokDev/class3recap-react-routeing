import React from 'react'
import { CardBody, CardFooter, CardHeader, Container } from 'react-bootstrap'
import "./Product.scss"
import { Link } from 'react-router-dom'
import ProductData from '../../faker/ProductData'
const Product = () => {
  return (
    <>
        <div className="shop">
            <Container>
                <div className="product-items">

                    {
                        ProductData.map((data, index)=> 
                        <div className="card" key={index}>
                            <CardHeader>
                                <img src={data.img} alt="" />
                            </CardHeader>
                            <CardBody>
                                <div className="pro-name">{data.name}</div>
                                <div className="pro-price">
                                    
                                    <div className="reg-price">{data.reg_price} $</div>
                                    <div className="sell-price">{data.sell_price} $</div>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <Link to={`/shop/${data.id}`} className="btn btn-primary">View Product</Link>
                            </CardFooter>
                        </div>
                        )
                    }
                    
                </div>
            </Container>
        </div>
    </>
  )
}

export default Product