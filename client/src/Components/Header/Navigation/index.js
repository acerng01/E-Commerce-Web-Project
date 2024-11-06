import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from'react-router-dom';
import { useState } from'react';
import { FaAngleRight } from "react-icons/fa";

const Navigation = () => {

    const [isOpenSidebarVal, setisOpenSidebarVal] = useState(false)

    return (
        < nav >
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <div className='cateWrapper'>
                            <Button className='allCateTab align-items-center' onClick={()=>setisOpenSidebarVal(!isOpenSidebarVal)}>
                                <span className='icon1 mr-2'><IoMenu/></span>
                                <span className='text'>ALL CATEGORIES</span>
                                <span className='icon2 ml-2'><FaAngleDown/></span>
                            </Button>

                            <div className={`sidebarNav ${isOpenSidebarVal===true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to='/'><Button>Adventure <FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submenu shadow'>
                                        <Link to='/'><Button>Tag 1</Button></Link>
                                        <Link to='/'><Button>Tag 2</Button></Link>
                                        </div></li>
                                    <li><Link to='/'><Button>Cruiser</Button></Link></li>
                                    <li><Link to='/'><Button>Scooter-Moped</Button></Link></li>
                                    <li><Link to='/'><Button>Sport</Button></Link></li>
                                    <li><Link to='/'><Button>Street</Button></Link></li>
                                    <li><Link to='/'><Button>Touring</Button></Link></li>
                                </ul>
                            </div>                  
                        </div>
                    </div>

                    <div className='col-sm-10 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline w-100'>
                            <li className='list-inline-item'><Link to='/'><Button>Adventure</Button></Link></li>
                            <li className='list-inline-item'><Link to='/'><Button>Cruiser</Button></Link></li>
                            <li className='list-inline-item'><Link to='/'><Button>Scooter-Moped</Button></Link></li>
                            <li className='list-inline-item'><Link to='/'><Button>Sport</Button></Link></li>
                            <li className='list-inline-item'><Link to='/'><Button>Street</Button></Link></li>
                            <li className='list-inline-item'><Link to='/'><Button>Touring</Button></Link></li>
                            <li className='list-inline-item'><Link to='/'><Button>More</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to='/'><Button>Tag 1</Button></Link>
                                    <Link to='/'><Button>Tag 2</Button></Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav >
    )
}

export default Navigation;