import { useContext, useEffect } from "react";
import { MyContext } from '../../App';
import Logo from '../../assets/images/logo.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

const SignIn = () => {

    const context = useContext(MyContext);

    useEffect(()=>{
        context.setisHeaderFooterShow(false);
    },[]);

    return (
        <section className="section signInPage">
            {/* <div className="shape-bottom">
                <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8" style={{enableBackground: 'new 0 0 1921 819.8'}}>
                    <path class="st0" d="M1921,413.1v406.7H0V0.5h0.41228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path>
                </svg>
            </div> */}

            <div className="container">
                <div className="box card p-3 shadow border-0">
                    <div className="text-center logoWrapper">
                        <img src={Logo}/>
                    </div>

                    <form className="">
                        <h2 className="mb-4">Sign In</h2>

                        <div className="form-group">
                            <TextField className="w-100" id="standard-basic" label="Email" type="email" required variant="standard" />
                        </div>
                        <div className="form-group">
                            <TextField className="w-100" id="standard-basic" label="Password" type="password" required variant="standard" />
                        </div>

                        <a className="border-effect cursor txt">Forgot Password?</a>

                        <div className="d-flex align-items-center mt-3 mb-3">
                            <Button className="btn-blue btn-lg btn-big col">Sign In</Button>
                            <Link to="/"><Button className="btn-lg btn-big col ml-3" variant="outlined" onClick={()=>context.setisHeaderFooterShow(true)}>Cancel</Button></Link>
                        </div>             

                        <p className="txt">Not Registered? <Link to="/signUp" className="border-effect">Sign Up</Link></p>

                        <h6 className="mt-4 text-center font-weight-bold">Or continue with social account</h6>

                        <ul className="list list-inline mt-3 mb-1 socials text-center">
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

                    

                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignIn;