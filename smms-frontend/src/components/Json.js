import React from "react";

const Json = () => {

    const data = [
  
      { 
        id: 1,
        name: "John Doe" ,
        otherNames : [
            {
                id1:1,
                name1: "A",
                name2:"A",
            },
            {
                id1:2,
                name1: "B",
                name2:"B",
            }
        ]
      },
  
      { id: 2, name: "Victor Wayne",  otherNames : [
        {
            id1:3,
            name1:"C",
            name2:"C",
        },
        {
            id1:4,
            name1:"D",
            name2:"D",
        }
    ] },
  
      { id: 3, name: "Jane Doe" ,  otherNames : [
        {
            id1:5,
            name1:"A",
            name2:"B",
        },
        {
            id1:6,
            name1: "C",
            name2:"C",
        }
    ]},
  
    ];
  
  
    return (
  
      <div>
  
        {data.map((user) => (
  
          <div key={user.id}>
            <h1>{user.name}</h1>
            {
                user.otherNames.map((names)=>(
                    <div key={names.id1}>
                        <h1 >{names.name1} </h1>
                        <h1>{names.id1}</h1>
                    </div>
                ))
            }
          </div>
  
        ))}

       
  
      </div>
  
    );
  
  };

export default Json;