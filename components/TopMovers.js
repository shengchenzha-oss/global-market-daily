export default function TopMovers({movers}){

return(

<div className="card">

<h2>Top Movers</h2>

{movers.map((s,i)=>(
<div key={i}>

{s.ticker} {s.change}

</div>
))}

</div>

)

}