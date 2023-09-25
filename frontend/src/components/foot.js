import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import NavBar from './NavBar';
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


const Foots = () => {
    return (
        <MainHeader>


            <footer>
                <div className="container-fluid foots">
                    <div className="col-sm-4 ">
                        <div className="">
                            <Link to="/" > <img id='logoft' src="https://res.cloudinary.com/dxnhv54sl/image/upload/v1695431219/logo/epiu3addc0ing9mk4l2p.png" className="" alt="logo" /></Link>
                            <b className="l1">Lanhnb.store</b>
                        </div>
                    </div>
                    <div className="col-sm-4 ">
                        <div className="text-center copyN">

                            <p className="text-center p_f">Copyright © 2022 Lanhnb.store</p>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <div className="">
                            <ol className="list_foot">
                                <li><Link to="tel:0996288999"><img id="ca11" src="https://res.cloudinary.com/dxnhv54sl/image/upload/v1695476621/logo/sm398ri30fvzlaymxgsu.png"
                                    alt='' /></Link>
                                </li>


                                <li className="zalo_f"><Link to="https://zalo.me/0996288999" title="Liên hệ qua Zalo số: 0996288999"
                                    id="zalo_f"><img id="ca11"
                                        src="https://res.cloudinary.com/dxnhv54sl/image/upload/v1695476631/logo/vrkwatuwqwjd2ecuw6we.png"
                                        alt='' /></Link>
                                </li>
                                <li><Link to="https://vi-vn.facebook.com/lanhnb.store/" id="faceComent_f"
                                    title="Ghé trang facebook của Chúng tôi"><img id="ca11" alt=''
                                        src="https://res.cloudinary.com/dxnhv54sl/image/upload/v1695476617/logo/quww4tqqdgojnsdlfid5.png" /></Link>
                                </li>
                            </ol>

                        </div>
                    </div>
                </div>

            </footer>


        </MainHeader>
    )
}



const MainHeader = styled.header`
@media only screen and (max-device-width: 480px) {
    #logoft{
        display:none;
    }
    .l1{
        display:none;

    }
}
    
    .copyN{
        margin-top:30px;
    }
    .foots{
        display:flex;
        height: 50px;
        backround-color:#232f3e;
        
        left:0;
        bottom:0;
        right:0;

    }
    .container-fluid foots{
        backround-color:#232f3e;
    }
    .list_foot{
        display:flex;
    }
    #ca11{
        margin-top:15px;
        height:30px;
        margin-left:20px;
    }
    
    
    justify-content: space-between;
   
    align-items: center;
    position: relative;

    #logoft{
        height: 40px;
        margin-top:5px;
    }
`;
export default Foots;