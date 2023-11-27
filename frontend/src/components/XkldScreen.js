import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


import { Helmet } from "react-helmet-async";
import LoadingBox from "./payment/LoadingBox";
import MessageBox from "./payment/MessageBox";
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';



import Xkld from "./Xklds";
import { url } from "./api";

// import data from '../data';

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

function XkldScreen() {
  const API = "http://localhost:5000/xklds";
  const [{ loading, error, xklds1 }, dispatch] = useReducer(reducer, {
    xklds: [],
    loading: true,
    error: "",
  });
  const [data, getXklds] = useState([]);
  const [filter, setFilter] = useState([])
  const [searchedVal, setSearchedVal] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(API);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        getXklds(result.data);
        setFilter(result.data)
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }


    };
    fetchData();
  }, []);

  return (
    <div id="home11" style={{marginTop:"15px"}}>
    <Container>
    <Row>
    

      <Helmet>
        <title>Amazona</title>
      </Helmet>
      <h3> Labor service in lanhnb.store</h3>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Col sm={12} md={8} style={{display:"flex", flexWrap:"wrap" }} >
          
          {
            data.slice(1, 9).map((xkld) => (
              <Col sm={6} md={4} >
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
            ))

          }
        </Col>


      )}

      <Col sm={12} md={4}>

        <h4>Search by Names.</h4>
        <div className="w3 d-flex">
          
          <div className="search" style={{marginLeft:"10px"}}>
            <input onChange={(e) => setSearchedVal(e.target.value)} class="w3-input w3-border w3-padding" type="text" placeholder="Search..." id="myInput" />
          </div>
        </div>



        {/* simply set the query text here instead of triggering requestSearch */}

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Register</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter((row) =>
                // note that I've incorporated the searchedVal length check here
                !searchedVal.length || row.namex?.toString()?.toLowerCase()?.includes(searchedVal?.toString()?.toLowerCase())
              )
              .map((item) => (
                <TableRow key={item.db_id}>
                  <TableCell>{item.namex}</TableCell>
                  <TableCell>{item.categoryx}</TableCell>
                  <TableCell>{item.companyx}</TableCell>
                  <TableCell><DeleteIcon /></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        </Col>
    </Row>
    </Container>
    </div >
  );
  
}



export default XkldScreen;
