export async function getDashboardData(){

return{

markets:[

{name:"S&P 500",price:"5100",change:"+0.8%"},
{name:"Nasdaq",price:"16000",change:"+1.1%"},
{name:"Hang Seng",price:"17000",change:"-0.4%"}

],

movers:[

{ticker:"NVDA",change:"+4.8%"},
{ticker:"TSLA",change:"+3.1%"},
{ticker:"AAPL",change:"-1.2%"}

],

flow:{

north:"2.4B",
south:"1.8B"

},

news:[

{title:"Fed signals possible rate cuts later this year",url:"https://www.bloomberg.com"},

{title:"AI stocks lead tech rally on Wall Street",url:"https://www.cnbc.com"}

]

}

}