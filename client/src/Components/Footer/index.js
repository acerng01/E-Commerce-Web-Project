import { LuBox } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="topInfo row ">
                    <div className="col d-flex align-items-center">
                        <span><LuBox/></span>
                        <span className="ml-2">Everyday fresh products</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery/></span>
                        <span className="ml-2">Free delivery for order over $70</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><RiDiscountPercentLine/></span>
                        <span className="ml-2">Daily Mega Discounts</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><LuCircleDollarSign/></span>
                        <span className="ml-2">Best price on the market</span>
                    </div>
                </div>

                <div className="row mt-4 linksWrap">
                    <div className="col">
                        <h5>ADVENTURE</h5>
                        <ul>
                            <li><Link to="#">Aprilla</Link></li>
                            <li><Link to="#">BMW</Link></li>
                            <li><Link to="#">Benelli</Link></li>
                            <li><Link to="#">Can-Am</Link></li>
                            <li><Link to="#">Ducati</Link></li>
                            <li><Link to="#">Harley-Davinson</Link></li>
                            <li><Link to="#">Honda</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>ADVENTURE</h5>
                        <ul>
                            <li><Link to="#">Aprilla</Link></li>
                            <li><Link to="#">BMW</Link></li>
                            <li><Link to="#">Benelli</Link></li>
                            <li><Link to="#">Can-Am</Link></li>
                            <li><Link to="#">Ducati</Link></li>
                            <li><Link to="#">Harley-Davinson</Link></li>
                            <li><Link to="#">Honda</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>ADVENTURE</h5>
                        <ul>
                            <li><Link to="#">Aprilla</Link></li>
                            <li><Link to="#">BMW</Link></li>
                            <li><Link to="#">Benelli</Link></li>
                            <li><Link to="#">Can-Am</Link></li>
                            <li><Link to="#">Ducati</Link></li>
                            <li><Link to="#">Harley-Davinson</Link></li>
                            <li><Link to="#">Honda</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>ADVENTURE</h5>
                        <ul>
                            <li><Link to="#">Aprilla</Link></li>
                            <li><Link to="#">BMW</Link></li>
                            <li><Link to="#">Benelli</Link></li>
                            <li><Link to="#">Can-Am</Link></li>
                            <li><Link to="#">Ducati</Link></li>
                            <li><Link to="#">Harley-Davinson</Link></li>
                            <li><Link to="#">Honda</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>ADVENTURE</h5>
                        <ul>
                            <li><Link to="#">Aprilla</Link></li>
                            <li><Link to="#">BMW</Link></li>
                            <li><Link to="#">Benelli</Link></li>
                            <li><Link to="#">Can-Am</Link></li>
                            <li><Link to="#">Ducati</Link></li>
                            <li><Link to="#">Harley-Davinson</Link></li>
                            <li><Link to="#">Honda</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright mt-3 pt-3 pb-3 d-flex">
                    <p className="mb-0">Copyright 2024. All right reserved.</p>
                    <ul className="list list-inline ml-auto mb-0 socials">
                        <li className="list-inline-item">
                            <Link to="#"><FaFacebook/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#"><FaFacebook/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#"><FaFacebook/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;