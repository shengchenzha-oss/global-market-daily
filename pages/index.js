import { useState, useEffect } from "react";
import Header from "../components/Header";
import MarketTable from "../components/MarketTable";
import TopMovers from "../components/TopMovers";
import NewsPanel from "../components/NewsPanel";
import CapitalFlow from "../components/CapitalFlow";
import { getDashboardData } from "../lib/data";

export default function Home() {

  const [data,setData] = useState(null)

  useEffect(()=>{

    async function load(){

      const d = await getDashboardData()

      setData(d)

    }

    load()

    const timer = setInterval(load,300000)

    return ()=>clearInterval(timer)

  },[])

  if(!data) return <div style={{padding:40}}>Loading market data...</div>

  return(

    <div className="container">

      <Header/>

      <MarketTable markets={data.markets}/>

      <TopMovers movers={data.movers}/>

      <CapitalFlow flow={data.flow}/>

      <NewsPanel news={data.news}/>

    </div>

  )

}