export default function NewsPanel({news}){

return(

<div className="card">

<h2>Market News</h2>

{news.map((n,i)=>(

<div key={i} className="news">

<a href={n.url} target="_blank">

{n.title}

</a>

</div>

))}

</div>

)

}