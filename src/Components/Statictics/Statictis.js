import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Statictis = () => {
    const { data } = useLoaderData();


    let name;
    let total;
    let staticData = [];
    for (const info of data) {
        name = info.name;
        total = info.total
        staticData.push({ name, total })
    }
    console.log(staticData)

    return (
        <div>
            <LineChart width={600} height={300} data={staticData}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    )
}
export default Statictis;