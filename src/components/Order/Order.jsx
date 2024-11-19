import React from 'react'
import "./Order.css"
import orderedit from "/src/assets/orderedit.svg"
import trash from "/src/assets/trash.svg"

function Order() {
    const orders = [
        {
            index: 1,
            orderid: "#BM9708",
            date: "August 05 2018",
            time: "10:29 PM",
            paymentStatus: "Paid",
            total: "$176.41",
            paymentMethode: "Mastercard",
            status: "Shipped",
        },
        {
            index: 2,
            orderid: "#BM9705",
            date: "August 04 2018",
            time: "10:49 PM",
            paymentStatus: "Pending",
            total: "$1756.30 ",
            paymentMethode: "Visa",
            status: "Processing",
        },
        {
            index: 3,
            orderid: "#BM9703",
            date: "August 06 2019",
            time: "10:29 PM",
            paymentStatus: "Paid",
            total: "$1156.90 ",
            paymentMethode: "Visa",
            status: "Delivered",
        },
        {
            index: 4,
            orderid: "#BM9783",
            date: "July 09 2021",
            time: "11:49 AM",
            paymentStatus: "Payment failed",
            total: "$4156.90 ",
            paymentMethode: "Paypal",
            status: "Cancelled",
        },
        {
            index: 5,
            orderid: "#BM9813",
            date: "June 14 2021",
            time: "12:40 PM",
            paymentStatus: "Payment failed",
            total: "$2156.90 ",
            paymentMethode: "Payoneer ",
            status: "Cancelled",
        },
        {
            index: 6,
            orderid: "#BM9705",
            date: "August 04 2018",
            time: "11:30 AM",
            paymentStatus: "Pending",
            total: "$6756.30 ",
            paymentMethode: "Visa",
            status: "Processing",
        },
        {
            index: 7,
            orderid: "#BM9728",
            date: "August 05 2021",
            time: "15:00 PM",
            paymentStatus: "Paid",
            total: "$1176.41 ",
            paymentMethode: "Visa",
            status: "Shipped",
        },
        {
            index: 8,
            orderid: "#BM8703",
            date: "August 02 2021",
            time: "14:30 PM",
            paymentStatus: "Paid",
            total: "$1126.00 ",
            paymentMethode: "Mastercard",
            status: "Delivered",
        },
    ]

    return (
        <div className='orders'>
            <h5 className='ordersHeading'>Orders</h5>
            <div className="container">
                <table className="ordersTable">
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Payment status</th>
                            <th>Total</th>
                            <th>Payment method</th>
                            <th>Order status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((obj, index) => {
                            return (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td className='orderId'>{obj.orderid}</td>
                                    <td>{obj.date} <span className='time'> {obj.time}</span></td>
                                    <td><p className={obj.paymentStatus + " status"}>{obj.paymentStatus}</p></td>
                                    <td>{obj.total}</td>
                                    <td>{obj.paymentMethode}</td>
                                    <td><p className={'status ' + obj.status}>{obj.status}</p></td>
                                    <td className='action'><img src={orderedit} alt="edit" /><img src={trash} alt="delete" /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Order
