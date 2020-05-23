import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { numberWithCommas } from '../utils/format';


function Country({ name, confirmed, deaths, recovered, updated, slug }){

    const [ stats, setStats ] = useState([]);

    useEffect(()=>{
        const FetchData = async () =>{
            const data = await fetch(`https://api.covid19api.com/dayone/country/${slug}`).then(res => res.json());
            for(let datum of data){
                let fullDate = datum.Date.slice(0, 10);
                let monthNum = fullDate.slice(5, 7);
                let year = fullDate.slice(0, 4);
                let day = fullDate.slice(8, 10);
                let month;
                switch(monthNum){ case "01": month = "Jan"; break; case "02": month = "Feb"; break; case "03": month = "Mar"; break; case "04": month = "Apr"; break; case "05": month = "May"; break; case "06": month = "Jun"; break; case "07": month = "Jul"; break; case "08": month = "Aug"; break; case "09": month = "Sep"; break; case "10": month = "Oct"; break; case "11": month = "Nov"; break; default: month = "Dec"; };

                datum.name = `${day} ${month} ${year}`;
            }
            setStats(data);
        };
        FetchData();
    }, []);
    

    return(
        <div className="col-md-4 ">
            <div className="card m-2 p-4 border-0 shadow-sm">
                
                <Line title="Country" content={name} />
                <Line title="Confirmed" content={numberWithCommas(confirmed)} />

                <Line title="Deaths" content={numberWithCommas(deaths)} />
                
                <Line title="Recovered" content={numberWithCommas(recovered)} />
                <Line title="Last Updated" content={<Moment>{updated}</Moment>} />

                <div>
                    <AreaChart
                        width={350}
                        height={300}
                        data={stats}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="Confirmed" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="Recovered" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="Deaths" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </div>
                
            </div>
        </div>
    )
}

export default Country;

const Line = ({ title, content }) => <p><b>{title}:</b> {content} </p>;