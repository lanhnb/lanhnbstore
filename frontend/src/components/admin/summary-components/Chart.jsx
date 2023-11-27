import { useState, useEffect } from 'react';
import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, CartesianGrid,Tooltip, Legend, ResponsiveContainer } from 'recharts';

import axios from "axios";
import { setHeaders, url } from "../../slices/api";


const Chart = () =>{
    const [sales, setSales] = useState([])
    const [loading, setLoading] = useState(false)

    function compare(a,b){
        if(a.id < b.id){
          return 1
        }
        if(a.id > b.id){
          return -1
        }
        return 0;
    
      }

    useEffect(() =>{
        async function fetchData(){
            setLoading(true)
            try{
                const res =  await axios.get(`${url}/orders/week`, setHeaders())
        
                res.data.sort(compare)
                const newData = res.data.map((item) =>{
                    const DAYS = ["Sun", "Mon","Tue","Wed","Thur","Fri","Sat"];
                    return{
                        day: DAYS[item._id],
                        amount: item.total 
                        
                    };
                    
                });
                
                setSales(newData)
                setLoading(false)
                        
              }catch(err){
                console.log(err)
              }
        
            }
            fetchData();
            
          }, []);
    // const data = [
    // {
    //     day: "Sun",
    //     amount: 800,
    // },
    // { 
    //     day: "Mon",
    //     amount: 4000,
    // },
    // { 
    //     day: "Tue",
    //     amount: 3000,
    // },
    // { 
    //     day: "Wed",
    //     amount: 4000,
    // },
    // { 
    //     day: "Thur",
    //     amount: 2000,
    // },
    // { 
    //     day: "Fri",
    //     amount: 1000,
    // },
    // { 
    //     day: "Sat",
    //     amount: 300,
    // },
    // ];
   

    return (<>
        {
        loading ? <Loader>Loading...</Loader> : <StyledChart>
            <h3> Last day Earning (US $)</h3>
        
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            height={300}
            data={sales}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis dataKey="amount"/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
            
            </LineChart>
        </ResponsiveContainer>
        </StyledChart>
        } 
        </>
        );
    }
export default Chart
const StyledChart = styled.div`
    widht: 100%;
    height: 300px;
    margin-top: 2rem;
    padding: 1rem;
    border: 2px;
    border-radius: 5px;
    h3{
        margin-bottom:1rem;
    }

    `;
const Loader = styled.p`
    margin-top: 2rem;
`;

