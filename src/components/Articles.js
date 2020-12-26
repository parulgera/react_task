import React, {useState, useEffect} from "react";
import axios from "axios";


const Articles = () => {
    const [num, setNum] = useState();
    const [data, setData] = useState({ data: [] });

    useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://jsonmock.hackerrank.com/api/articles?page=${num}`
      );
      setData(result.data);
    };
    fetchData();
  }, [num]);

return (
    <>
    <div>
    <h1> Hacker Rank page<span> {num}</span> Articles.</h1>
    <div><h2> Choose Page No : </h2><select value={num} onChange={(event)=> {
        setNum(event.target.value);
    }}
    >
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>
</div>

     <div id = "container">
     
      <ul>
        {data.data.map((articles, index) => (
          <li key={index} style={{ listStyle: 'none' }}>
                <a href={articles.url} target="target_blank">
                  <h3>{articles.title}</h3>
                </a>
            
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
);
};
export default Articles;