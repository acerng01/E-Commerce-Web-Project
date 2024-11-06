import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
    return (
        <section className="section cartPage">
            <div className="container">

            <h2 className="hd mb-1">Your Cart</h2>
                        <p> There are <b className="text-red">3</b> products in your cart</p>

                <div className="row">
                    <div className="col-md-9 pr-5">                        

                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th width="35%">Product</th>
                                        <th width="15%">Unit Price</th>
                                        <th width="25%">Quantity</th>
                                        <th width="15%">Subtotal</th>
                                        <th width="10%">Remove</th>
                                    </tr>
                                </thead>

                            <tbody>
                                <tr>
                                    <td width="35%">
                                        <Link to='/product/1'>
                                        <div className="d-flex align-items-center cartItemImgWrapper">
                                            <div className="imgWrapper">
                                                <img className="w-100" src="https://storage.googleapis.com/mhimg/p/3451/9033451/811d_s.jpg"/>
                                            </div>

                                            <div className="info px-3">
                                                <h6>2023 Ducati Multistrada V4S Ducati Red</h6>
                                                <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td width="15%">$7.25</td>
                                    <td width="25%">
                                        <QuantityBox/>
                                    </td >
                                    <td width="15%">$7.25</td>
                                    <td width="10%"><span className="remove"><IoMdClose/></span></td>
                                </tr>
                                <tr>
                                    <td width="35%">
                                        <Link to='/product/1'>
                                        <div className="d-flex align-items-center cartItemImgWrapper">
                                            <div className="imgWrapper">
                                                <img className="w-100" src="https://storage.googleapis.com/mhimg/p/3451/9033451/811d_s.jpg"/>
                                            </div>

                                            <div className="info px-3">
                                                <h6>2023 Ducati Multistrada V4S Ducati Red</h6>
                                                <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td width="15%">$7.25</td>
                                    <td width="25%">
                                        <QuantityBox/>
                                    </td >
                                    <td width="15%">$7.25</td>
                                    <td width="10%"><span className="remove"><IoMdClose/></span></td>
                                </tr>

                                <tr>
                                    <td width="35%">
                                        <Link to='/product/1'>
                                        <div className="d-flex align-items-center cartItemImgWrapper">
                                            <div className="imgWrapper">
                                                <img className="w-100" src="https://storage.googleapis.com/mhimg/p/3451/9033451/811d_s.jpg"/>
                                            </div>

                                            <div className="info px-3">
                                                <h6>2023 Ducati Multistrada V4S Ducati Red</h6>
                                                <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td width="15%">$7.25</td>
                                    <td width="25%">
                                        <QuantityBox/>
                                    </td >
                                    <td width="15%">$7.25</td>
                                    <td width="10%"><span className="remove"><IoMdClose/></span></td>
                                </tr>

                                <tr>
                                    <td width="35%">
                                        <Link to='/product/1'>
                                        <div className="d-flex align-items-center cartItemImgWrapper">
                                            <div className="imgWrapper">
                                                <img className="w-100" src="https://storage.googleapis.com/mhimg/p/3451/9033451/811d_s.jpg"/>
                                            </div>

                                            <div className="info px-3">
                                                <h6>2023 Ducati Multistrada V4S Ducati Red</h6>
                                                <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td width="15%">$7.25</td>
                                    <td width="25%">
                                        <QuantityBox/>
                                    </td >
                                    <td width="15%">$7.25</td>
                                    <td width="10%"><span className="remove"><IoMdClose/></span></td>
                                </tr>

                                <tr>
                                    <td width="35%">
                                        <Link to='/product/1'>
                                        <div className="d-flex align-items-center cartItemImgWrapper">
                                            <div className="imgWrapper">
                                                <img className="w-100" src="https://storage.googleapis.com/mhimg/p/3451/9033451/811d_s.jpg"/>
                                            </div>

                                            <div className="info px-3">
                                                <h6>2023 Ducati Multistrada V4S Ducati Red</h6>
                                                <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                            </div>
                                        </div>
                                        </Link>
                                    </td>
                                    <td width="15%">$7.25</td>
                                    <td width="25%">
                                        <QuantityBox/>
                                    </td >
                                    <td width="15%">$7.25</td>
                                    <td width="10%"><span className="remove"><IoMdClose/></span></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border p-3 cartDetails">
                            <h4>CART TOTALS</h4>

                            <div className="d-flex align-items-center mb-3">
                                <span>Subtotal</span>
                                <span className="ml-auto text-red font-weight-bold">$12.31</span>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <span>Shipping</span>
                                <span className="ml-auto"><b>Free</b></span>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <span>Estimate for</span>
                                <span className="ml-auto"><b>United Kingdom</b></span>
                            </div>

                            <div className="d-flex align-items-center">
                                <span>Total</span>
                                <span className="ml-auto text-red font-weight-bold">$12.31</span>
                            </div>

                            <br/>
                            <Button className='btn-blue bg-red btn-lg btn-big'><FaShoppingCart/>Add to cart</Button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart;