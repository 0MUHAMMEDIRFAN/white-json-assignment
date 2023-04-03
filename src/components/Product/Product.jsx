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

    const products = [
        {
            id: 1,
            title: "Great Modern Chair",
            date: "09/20/2021",
            rating: 5,
            available: true,
            price: 250.99,
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            availabeStock: 1240,
            orders: "5,645",
            revenue: "3,245.987",
            stockdetails: [
                {
                    outlets: "ASOS Ridley Outlet - NYC",
                    price: "139.58",
                    stock: "520",
                    revenue: "4,321.987"
                },
                {
                    outlets: "Marco Outlet - SRT",
                    price: "139.58",
                    stock: "560",
                    revenue: "4,321.987"
                },
                {
                    outlets: "Chairtest Outlet - HY",
                    price: "139.58",
                    stock: 240,
                    revenue: "4,321.987",
                },

            ]

        }
    ]
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
                        <img className='img3' src={image3} alt="" /> {/*product image*/}
                        <img className='img4' src={image4} alt="" /> {/*product image*/}
                    </div>
                    <div className="productDetails">
                        <div className="productInfo">
                            <h4>{products[0].title} <img src={edit} alt="" /></h4> {/*product name*/}
                            <p>Added date: {products[0].date}</p>{/*added date*/}
                            <div className="rating">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>{/*rating*/}
                        </div>
                        <div className="available"><p>{products[0].available ? "In stock" : "Out of stock"}</p></div>{/*stock*/}
                        <h4 className='price'>${products[0].price}</h4>{/*price*/}
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
                        <p className='descriptionText'>{products[0].description}</p>
                        <div className="stock">
                            <div className="availableStock">
                                <p>Available Stock</p>
                                <p>{products[0].availabeStock}</p>
                            </div>
                            <div className="nofOrders">
                                <p>Number of orders</p>
                                <p>{products[0].orders}</p>
                            </div>
                            <div className="revenue">
                                <p>Revenue</p>
                                <p>${products[0].revenue}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other stock details in Container */}
                <div className="tableContainer">

                    <table className="stockDetails">
                        <thead>
                            <tr className='headingRow'>
                                <th>Outlets</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products[0].stockdetails.map((obj, index) => {
                                const width = Math.round(obj.stock / products[0].availabeStock * 100) + "%"
                                return (
                                    <tr key={index}>
                                        <td>{obj.outlets}</td>
                                        <td>${obj.price}</td>
                                        <td className='progressCol'><div><div className={"value"+ " value"+index} style={{ width: width }}></div></div><p>{obj.stock}</p></td>
                                        <td>${obj.revenue}</td>
                                    </tr>
                                )
                            })
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Product
