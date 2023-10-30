// nested element 



const parent =React.createElement( 

    "div",

    {id:"parent"},[

     // if we want to  add sibling we have to crete an array and more children into it 

    React.createElement( "div", {id:"child"},
        [React.createElement("h1", {}, "im an h1 tag"),
        React.createElement("h2", {}, "im an h2 tag"),
    ]),
    React.createElement( "div", {id:"child2"},
        [React.createElement("h1", {}, "im an h1 tag"),
        React.createElement("h2", {}, "im an h3 tag"),
    ]),
    
        
        
]);

    console.log(parent);

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)




















/*const heading =React.createElement( 

    "h1",

    {id:"heading"},

    "helllo world from react");

    console.log(heading);

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)*/