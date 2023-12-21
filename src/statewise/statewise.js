import React, { useEffect, useState } from 'react';

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.state);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='main-heading'>
                    <h1 className='mb-5 text-center'><span className='font-weight-bold'>INDIA</span> COVID-19 DASHBOARD</h1>

                </div>
                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Death</th>
                                <th>Active</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((currData, indx) => {
                                    return (
                                        <tr>
                                            <th>{currData.state}</th>
                                            <td>{currData.confirmed}</td>
                                            <td>{currData.recovered}</td>
                                            <td>{currData.deaths}</td>
                                            <td>{currData.active}</td>
                                            <td>{currData.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )


}

export default Statewise;