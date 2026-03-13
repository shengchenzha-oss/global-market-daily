import { useState, useEffect } from 'react';
import { fetchMarketData, fetchAssets, fetchTopMovers, fetchTreasury, fetchFutures, fetchCapitalFlow, fetchSectorHeatmap, fetchNews, fetchMacro, fetchAIBrief } from '../lib/api';
import { translations } from '../i18n';

export default function Dashboard() {
  const [lang, setLang] = useState('en');
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadData() {
      const market = await fetchMarketData();
      const assets = await fetchAssets();
      const movers = await fetchTopMovers();
      const treasury = await fetchTreasury();
      const futures = await fetchFutures();
      const flow = await fetchCapitalFlow();
      const sectors = await fetchSectorHeatmap();
      const news = await fetchNews();
      const macro = await fetchMacro();
      const aiBrief = await fetchAIBrief();
      setData({ market, assets, movers, treasury, futures, flow, sectors, news, macro, aiBrief });
    }

    loadData();
    const interval = setInterval(loadData, 300000); // 每5分钟刷新
    return () => clearInterval(interval);
  }, []);

  const t = translations[lang];

  return (
    <div style={{ background:'#111827', color:'white', fontFamily:'Arial', minHeight:'100vh', padding:'30px'}}>
      <div style={{ textAlign:'right' }}>
        <button onClick={()=>setLang('en')}>EN</button>
        <button onClick={()=>setLang('zh_CN')}>简体</button>
        <button onClick={()=>setLang('zh_TW')}>繁體</button>
      </div>

      <h1>GLOBAL MARKET DAILY</h1>

      <section>
        <h2>{t.market}</h2>
        <pre>{JSON.stringify(data.market, null, 2)}</pre>
      </section>

      <section>
        <h2>{t.assets}</h2>
        <pre>{JSON.stringify(data.assets, null, 2)}</pre>
      </section>

      <section>
        <h2>{t.movers}</h2>
        <pre>{JSON.stringify(data.movers, null, 2)}</pre>
      </section>

      <section>
        <h2>{t.yield}</h2>
        <pre>{JSON.stringify(data.treasury, null, 2)}</pre>
      </section>

      <section>
        <h2>{t.futures}</h2>
        <pre>{JSON.stringify(data.futures, null, 2)}</pre>
      </section>

      <section>
        <h2>{t.capital}</h2>
        <pre>{JSON.stringify(data.flow, null, 2)}</pre>
      </section>

      <section>
        <h2>{t.sectors}</h2>
        <pre>{JSON.stringify(data.sectors, null, 2)}</pre>
      </section>

      <section>
        <h2>{t.news}</h2>
        {data.news?.map((n,i) => (
          <div key={i}>
            <b>{n.title}</b><br/>
            {n.source.name}<br/>
            {n.description}
          </div>
        ))}
      </section>

      <section>
        <h2>{t.macro}</h2>
        {data.macro?.map((m,i) => (
          <div key={i}>{m.date} - {m.event}</div>
        ))}
      </section>

      <section>
        <h2>{t.aiBrief}</h2>
        <p>{data.aiBrief}</p>
      </section>
    </div>
  );
}