export default function CapitalFlow({flow}){

return(

<div className="card">

<h2>Capital Flow</h2>

<p>Northbound: {flow.north}</p>

<p>Southbound: {flow.south}</p>

</div>

)

}