import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import Button from '@mui/material/Button';
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from "./RelatedProducts";


const ProductDetails = () => {

    const [activeSize, setactiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);

    const isActive = (index) => {
        setactiveSize(index);
    }

    return (
        <section className="productDetails section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ProductZoom />
                    </div>

                    <div className="col-md-7">
                        <h2 className="hd text-capitalize">2023 Ducati Multistrada V4S Ducati Red</h2>
                        <ul className="list list-inline">
                            <li className="list-inline-item">
                                <div className="d-flex align-items-center">
                                    <span className="text-ligt mr-2">Brands:</span>
                                    <span>Ducati</span>
                                </div>
                            </li>

                            <li className="list-inline-item">
                                <div className="d-flex align-items-center">
                                    <Rating name="read-only" value={4.5} readOnly precision={0.5} />
                                    <span className="text-ligt cursor ml-2">1 Review</span>
                                </div>
                            </li>
                        </ul>

                        <div className="d-flex info mb-3">
                            <span className="oldPrice">$20.00</span>
                            <span className="netPrice text-danger ml-2">$15.00</span>
                        </div>

                        <span className="badge badge-success">IN STOCK</span>

                        <p className="mt-3">The new Ducati Multistrada V4 is for those who want to comfortably explore all paths, without compromising on the sports attitude that distinguishes every motorcycle built in Borgo Panigale.</p>

                        <div className="productSize d-flex align-items-center">
                            <span>Size/Weight:</span>
                            <ul className="list list-inline mb-0 pl-4">
                                <li className="list-inline-item">
                                    <a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}
                                    >50g</a></li>
                                <li className="list-inline-item">
                                    <a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)}
                                    >100g</a></li>
                                <li className="list-inline-item">
                                    <a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)}
                                    >200g</a></li>
                                <li className="list-inline-item">
                                    <a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}
                                    >300g</a></li>
                                <li className="list-inline-item">
                                    <a className={`tag ${activeSize === 4 ? 'active' : ''}`} onClick={() => isActive(4)}
                                    >400g</a></li>
                            </ul>
                        </div>

                        <div className="d-flex align-items-center mt-4">
                            <QuantityBox />
                            <Button className="btn-blue btn-lg btn-big btn-round"><FaShoppingCart /> &nbsp; Add to cart</Button>

                            <Tooltip title="Add to Wishlist" placement="top">
                                <Button className="btn-blue btn-lg btn-big btn-circle ml-4"><FaRegHeart /></Button>
                            </Tooltip>
                            <Tooltip title="Add to Compare" placement="top">
                                <Button className="btn-blue btn-lg btn-big btn-circle ml-2"><MdOutlineCompareArrows /></Button>
                            </Tooltip>
                        </div>
                    </div>

                </div>

                <br />

                <div className="card mt-5 p-5 detailsPageTab">
                    <div className="customTabs">
                        <ul className="list list-inline">
                            <li className="list-inline-item">
                                <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => { setActiveTabs(0) }}
                                >Description</Button>
                            </li>
                            <li className="list-inline-item">
                                <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => { setActiveTabs(1) }}
                                >Additional info</Button>
                            </li>
                            <li className="list-inline-item">
                                <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => { setActiveTabs(2) }}
                                >Reviews</Button>
                            </li>
                        </ul>

                        <br />
                        {
                            activeTabs === 0 &&
                            <div className="tabContent">The new Ducati Multistrada V4 is for those who want to comfortably explore all paths, without compromising on the sports attitude that distinguishes every motorcycle built in Borgo Panigale.</div>
                        }

                        {
                            activeTabs === 1 &&
                            <div className="tabContent">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr class="stand-up">
                                                <th>Stand up</th>
                                                <td>
                                                    <p>35"L x 24"W x 37-45"H</p>
                                                </td>
                                            </tr>

                                            <tr class="stand-up">
                                                <th>Stand up</th>
                                                <td>
                                                    <p>35"L x 24"W x 37-45"H</p>
                                                </td>
                                            </tr>

                                            <tr class="stand-up">
                                                <th>Stand up</th>
                                                <td>
                                                    <p>35"L x 24"W x 37-45"H</p>
                                                </td>
                                            </tr>

                                            <tr class="stand-up">
                                                <th>Stand up</th>
                                                <td>
                                                    <p>35"L x 24"W x 37-45"H</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        }

                        {
                            activeTabs === 2 &&
                            <div className="tabContent">
                                <div className="row">
                                    <div className="col-md-8">


                                        <form className="reviewForm">
                                            <h4>Add a review</h4> <br />
                                            <div className="form-group">
                                                <textarea className="form-control" placeholder="Write a Review" name="review"></textarea>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Name" name="userName" />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <Rating name="rating" value={4.5} precision={0.5} />
                                                    </div>
                                                </div>

                                            </div>

                                            <br />
                                            <div className="form-group">
                                                <Button type="submit" className="btn-blue btn-lg btn-big btn-round">Submit Review</Button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                </div>

                <br/>

                <RelatedProducts title="RELATED PRODUCTS"/>

                <RelatedProducts title="RECENTLY VIEWED PRODUCTS"/>

            </div>
        </section>
    )
}

export default ProductDetails;

