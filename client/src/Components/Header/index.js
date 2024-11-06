import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CityDropdown from '../CityDropdown';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Header = () => {

    const context = useContext(MyContext);

    return (
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center"> Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
                </div>
            </div>

            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'}><img src={Logo} alt='Logo' /> </Link>
                        </div>

                        <div className='col-sm-10 d-flex align-items-center part2'>

                            {
                                context.cityList.length !==0 && <CityDropdown />
                            }

                            <SearchBox />

                            <div className='part3 d-flex align-items-center ml-auto'>
                                {
                                    context.isLogIn !== true ? <Link to="/signIn"><Button className='btn-blue  btn-round mr-3'>Sign In</Button></Link> : 
                                    <Button className='circle mr-3'><FaRegUser /></Button>
                                }

                                <div className='ml-auto cartTab d-flex align-items-center'>
                                    <span className='price'>$69.96</span>
                                    <div className='position-relative ml-2'>
                                        <Button className='circle'><MdOutlineShoppingCart /></Button>
                                        <span className='count d-flex align-items-center justify-content-center'>1</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </header>

            <Navigation />

        </div>
    )
}

export default Header;