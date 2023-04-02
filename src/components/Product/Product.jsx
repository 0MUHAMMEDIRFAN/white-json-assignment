import React from 'react'
import "./Product.css"
import image1 from "../../Images/ProductImages/Group 1.png"
import image2 from "../../Images/ProductImages/Group 2.png"
import image3 from "../../Images/ProductImages/Group 3.png"
import image4 from "../../Images/ProductImages/Group 4.png"
import Zoom from "../../Images/ProductImages/Zoom.png"
import star from "../../assets/star.svg"
import edit from "../../assets/edit.svg"

function Product() {
    return (
        <div className='product'>
            <h5 className='heading'>Product details</h5>
            <div className="container">
                <div className="productContainer">
                    <div className="productImage">
                        <div className="mainImg">
                            <img className='img1' src={image1} alt="" /> {/*product image*/}
                            <img className='zoom' src={Zoom} alt="" />
                        </div>
                        <img className='img2' src={image2} alt="" /> {/*product image*/}
                        <img className='img2' src={image3} alt="" /> {/*product image*/}
                        <img className='img3' src={image4} alt="" /> {/*product image*/}
                    </div>
                    <div className="productDetails">
                        <div className="productInfo">
                            <h4>Great Modern Chair <img src={edit} alt="" /></h4> {/*product name*/}
                            <p>Added date: 09/20/2021</p>{/*added date*/}
                            <div className="rating">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>{/*rating*/}
                        </div>
                        <div className="available"><p>In stock</p></div>{/*stock*/}
                        <h4 className='price'>$250.99</h4>{/*price*/}
                        <div className="qtySelection">
                            <div className="adjust">
                                <button className="minus">--</button>
                                <div className="qty">1</div>
                                <button className="plus">+</button>
                            </div>
                            <div className="addCart">
                                <button>Add to cart</button>
                            </div>
                        </div>
                        <h6>Description:</h6>
                        <p className='descriptionText'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <div className="stock">
                            <div className="availableStock">
                                <p>Available Stock</p>
                                <p>1240</p>
                            </div>
                            <div className="nofOrders">
                                <p>Number of orders</p>
                                <p>5,645</p>
                            </div>
                            <div className="revenue">
                                <p>Revenue</p>
                                <p>$3,245.987</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other stock details in Container */}

                <table className="stockDetails">
                    <tbody>
                        <tr className='headingRow'>
                            <th>Outlets</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Revenue</th>
                        </tr>
                        <tr>
                            <td>ASOS Ridley Outlet - NYC</td>
                            <td>$139.58</td>
                            <td className='progressCol'><div><div className="value" style={{width:"82%"}}></div></div><p>520</p></td>
                            <td>$4,321.987</td>
                        </tr>
                        <tr>
                            <td>Marco Outlet - SRT</td>
                            <td>$139.58</td>
                            <td className='progressCol'><div><div className="value" style={{width:"32%"}}></div></div><p>560</p></td>
                            <td>$4,321.987</td>
                        </tr>
                        <tr>
                            <td>Chairtest Outlet - HY</td>
                            <td>$139.58</td>
                            <td className='progressCol'><div><div className="value" style={{width:"65%"}}></div></div><p>240</p></td>
                            <td>$4,321.987</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Product
