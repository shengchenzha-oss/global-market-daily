export default function MarketTable({markets}){

return(

<div className="card">

<h2>Global Index</h2>

<table>

<thead>
<tr>
<th>Index</th>
<th>Price</th>
<th>Change</th>
</tr>
</thead>

<tbody>

{markets.map((m,i)=>(
<tr key={i}>
<td>{m.name}</td>
<td>{m.price}</td>
<td>{m.change}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}