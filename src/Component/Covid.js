import React, { useEffect,useState} from 'react';
import './Covid.css'
const Covid = () => {

    const [data,setData] = useState([]);

    const getCovidData = async () => {
        try{
            const res = await  fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[15])
            setData(actualData.statewise[15])
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        getCovidData();
    },[]);

    return (
        <div>
            <section>
            <h1>Live</h1>
            <h2 className="h2">Covid-19 Live Tracker By State(Jharkhand)</h2>
            <ul className="underline">

                <li className="card">
                    <div className="card_parent">
                        <div className="card_child-1">
                            <p className="card_1"><span>our</span> COUNTRY</p>
                            <p className="card_1-inner"><h2>INDIA</h2></p>
                        </div>
                    </div>
                </li>

                <li className="card">
                    <div className="card_parent">
                        <div className="card_child-2">
                            <p className="card_1"><span>Total</span> RECOVERED</p>
                            <p className="card_1-inner"><h2>{data.recovered}</h2></p>
                        </div>
                    </div>
                </li>

                <li className="card">
                    <div className="card_parent">
                        <div className="card_child-3">
                            <p className="card_1"><span>Total</span> CONFIRMED</p>
                            <p className="card_1-inner"><h2>{data.confirmed}</h2></p>
                        </div>
                    </div>
                </li>

                <li className="card">
                    <div className="card_parent">
                        <div className="card_child-4">
                            <p className="card_1"><span>Total</span> DEATHS</p>
                            <p className="card_1-inner"><h2>{data.deaths}</h2></p>
                        </div>
                    </div>
                </li>

                <li className="card">
                    <div className="card_parent">
                        <div className="card_child-5">
                            <p className="card_1"><span>Total</span> ACTIVE</p>
                            <p className="card_1-inner"><h2>{data.active}</h2></p>
                        </div>
                    </div>
                </li>

                <li className="card">
                    <div className="card_parent">
                        <div className="card_child-6">
                            <p className="card_1"><span>Last</span> UPDATED</p>
                            <p className="card_1-inner"><h2>{data.lastupdatedtime}</h2></p>
                        </div>
                    </div>
                </li>

            </ul>
            </section>
        </div>
    )
}
export default Covid