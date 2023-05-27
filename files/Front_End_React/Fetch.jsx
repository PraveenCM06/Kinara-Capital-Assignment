import { useEffect, useState } from "react"

const Fetch = () => {
    let [data, setData]=useState(null);
    let [page, setPage]=useState(0);
    let [size, SetSize]=useState(5);
    
    useEffect( ()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`http://localhost:8080/api/students?page=${page}&size=${size}`, requestOptions)
            .then(response => response.json())
            .then(data =>{setData(data.content);})
            .catch(error => console.log('error', error));
    } , [page])

    let nexdata= ()=>{
        setPage(page+1);
    }
    let previousdata=()=>{
        setPage(page-1);
    }
    return ( <div>
        <h1>Fetch</h1>

        <button onClick={previousdata}> left arrow </button>
        <button onClick={nexdata}> right arrow </button>


        
        {data && data.map((data)=>{ 
            return <div className="alldetails">
                <p>{data.id}</p>
                <p>{data.name}</p>
                <p>{data.total_marks}</p>
            </div>
        })
}
    </div> );
}

export default Fetch;
