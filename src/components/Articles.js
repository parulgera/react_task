import React, {useState, useEffect} from "react";
import axios from "axios";


const Articles = () => {
    const [num, setNum] = useState(1);
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages]= useState();
    const fetchData = async () => {
      const result = await axios(
        `https://jsonmock.hackerrank.com/api/articles?page=${num}`
      );
      setData(result.data.data);
      setTotalPages(result.data.total_pages);
    };

    useEffect(() => {
    
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
    {[...new Array(totalPages)].map((_, index) => 
       <option value={index+1}>{index+1}</option>
)}
    
    </select>
</div>

     <div id = "container">
     
      <ul>
        {data.map((articles, index) => (
          <li key={index} style={{ listStyle: 'none' }}>
                <a href={articles.url} target="_blank" rel="noreferrer">
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
