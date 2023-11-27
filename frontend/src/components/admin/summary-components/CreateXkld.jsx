import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { PrimaryButton } from "../CommonStyled";
import { xkldsCreate } from "../../slices/xkldsSlice";
import { SketchPicker } from 'react-color';
import React from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

import LoadingBox from "./LoadingBox"
import MessageBox from './MessageBox';
import Button from 'react-bootstrap/Button';




const CreateXkld = () => {
  const dispatch = useDispatch();
  const { createStatus } = useSelector((state) => state.xklds);
  

  const [imagex, setImagex] = useState([]);
  const [colorsx, setColorsx] = useState([]);
  const [timex, setTimex] = useState([]);
  const [infox, setInfox] = useState("");
  const [namex, setNamex] = useState("");
  const [salaryx, setSalaryx] = useState("");
  const [categoryx, setCategoryx] = useState("");
  const [descriptionx, setDescriptionx] = useState("");
  const [companyx, setCompanyx] = useState("");
  const [starsx, setStarsx] = useState("");
  const [reviewsx, setReviewsx] = useState("");
  const [links, setLink] = useState([])

  const [checked, setChecked] = React.useState(false);
  function handleChangeColor(e) {
    setChecked(e.target.checked);
  }

  const uploadCloudinary = async (file) => {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "lanhnb2")
    const api = ` https://api.cloudinary.com/v1_1/dxnhv54sl/imagex/upload`
    const { data } = await axios.post(api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    console.log("data", data)
    return { public_id: data?.public_id, url: data?.secure_url }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    let arr = []
    try {

      for (let i = 0; i < imagex.length; i++) {
        const data = await uploadCloudinary(imagex[i])
        arr.push(data)
      }
      setLink(arr)

    } catch (error) {
      console.log(error)

    }

    dispatch(
      xkldsCreate({
        namex,
        categoryx,
        companyx,
        salaryx,
        descriptionx,
        colorsx,
        imagex: arr,
        timex,
        starsx,
        infox,
        reviewsx,

      })
    );
  };

  const handleChangeComplete = (color) => {
    // state = {
    //   background: '#fff',
    // };
    setColorsx(color.hex);

  };
  return (
    <StyledCreateProduct>

      <StyledForm onSubmit={handleSubmit}>

        <input
          type='file'
          multiple={true}
          onChange={(e) => setImagex(e.target.files)}

        />

        <div>
          <h4>
            {" "}
            Creating the <i> Custom controlled checkbox </i> for color Products {" "}
          </h4>
          <input value="test" type="checkbox" onChange={handleChangeColor} />
          <br></br>


        </div>
        <select onChange={(e) => setCategoryx(e.target.value)} required>
          <option value="">Select Country</option>
          <option value="japan">Japan</option>
          <option value="korea">Korea</option>
          <option value="eu">EU</option>
          <option value="other">Other</option>
        </select>

        <input
          type="text"
          placeholder="Company"
          onChange={(e) => setCompanyx(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setNamex(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Salary"
          onChange={(e) => setSalaryx(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Time"
          onChange={(e) => setTimex(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Short Description"
          onChange={(e) => setDescriptionx(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Infor"
          onChange={(e) => setInfox(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="reviews"
          onChange={(e) => setReviewsx(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Stars"
          onChange={(e) => setStarsx(e.target.value)}
          required
        />


        <PrimaryButton type="submit">
          {createStatus === "pending" ? "Submitting" : "Submit"}
        </PrimaryButton>
      </StyledForm>
      <PickColor>
        {checked ? (
          <div> <SketchPicker
            color={colorsx.background}
            onChangeComplete={handleChangeComplete}
          /> </div>
        ) : (
          <div> Set Product color is not checked. </div>
        )}

      </PickColor>
      <ImagePreview>
        {links ? (
          links && links.length > 0 && links.map(link => {
            return (
              <div key={link?.public_id}>
                <img width={300} alt='' src={link?.url} />
              </div>
            )
          })
        ) : (
          <p>Product image upload preview will appear here!</p>)
        }
      </ImagePreview>
    </StyledCreateProduct>
  );
};

export default CreateXkld;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;

  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;

    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }

  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);

  img {
    max-width: 100%;
    padding-top:10px;
  }
  `;
const PickColor = styled.div`
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;
`;
