import React from "react";
import { useProductContext } from "./ProductContext";
import { styled } from "styled-components";
import Product from "./Product";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, products: action.payload, loading: false };
        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};


const FeatureProducts = () => {
    const API = "http://localhost:5000/xklds";
    const [{ loading, error, xklds1 }, dispatch] = useReducer(reducer, {
        xklds: [],
        loading: true,
        error: "",
    });
    const [xkld, getXklds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const result = await axios.get(API);
                dispatch({ type: "FETCH_SUCCESS", payload: result.data });
                getXklds(result.data);

            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err.message });
            }


        };
        fetchData();
    }, []);




    const { isLoading } = useProductContext();
    const { products } = useProductContext();
    if (isLoading) {
        return (
            <div><p>....isLoadin..</p></div>
        )
    }
    const productslice = products.slice(0, 4)
    console.log(productslice)
    const xkldslice = xkld.slice(0, 4)
    console.log(xkldslice)
    //XKLD





    return (

        <Wrapper>
            <Container>
                <Row>
                    <div className="intro-data">Check Now</div>
                    <div className="common-heading">Our Feature Service</div>
                    <h3>Shop</h3>


                    {
                        productslice.map((curElem) => {

                            return (

                                <Col sm={3}>
                                    <Card style={{ margin: "2px" }}>
                                        <Product key={curElem.id} {...curElem} />
                                    </Card>
                                </Col>

                            )
                        })

                    }
                </Row>
                <Row >
                    <h3>XKLD</h3>
                    <div className="fea11" style={{ display: "flex" }}>

                        {
                            xkldslice.map((xkld) => {

                                return (

                                    <Col  >
                                        <Card style={{ margin: "2px" }}>
                                            <Card.Img variant="top" src={xkld.imagex} style={{ width: "100%" }} />
                                            <Card.Body>
                                                <Card.Title>{xkld.namex}</Card.Title>
                                                <Card.Text>
                                                    {xkld.descriptionx?.slice(1, 10)}
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                )
                            })
                        }
                    </div>
                </Row>

            </Container>


        </Wrapper >


    )
};

export default FeatureProducts;

const Wrapper = styled.section`
    padding: 10px 0px;
    background-color: rgb(246, 248, 250);
    figure {
        margin: unset;
    }
    
    img{
        max-width: 90%;
        margin-top: 1.5rem;
        height: 20rem;
        transition: all 0.2s linear 0s;
        &:hover{transform: scale(1.1, 1);
            
        }
        &::after{
            content: "";
            position: absolute;
            top: 0px;
            left: 0px;
            width: 0%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            transition: all 0.2s linear 0s;
            cursor: pointer;
        

        }
    }
    

`