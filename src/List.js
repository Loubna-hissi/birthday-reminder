import React from "react";
const List = ({datas}) => {
    return( <>
       {datas && datas.map((data)=>{
         return (<article key={data.id} className="person">
                    <img src={data.image}/>
                    <div>
                       <h4>{data.name}</h4>
                       <p>{data.age} years</p>
                    </div>
                </article>);
       }   
       )}
    </>);   
    };
     
export default List;