/*

<div id = "babaji">
    <div id = "tauji">
        <div id="naman">
            <h1>Naman is my name</h1>
        </div>
    </div>
    <div id = "papaji">
        <div id ="Varad">
            <h1>Varad is my name</h1>
        </div>
         <div id = "Vishad">
            <h1>Vishad is my name</h1>
         </div>
    </div>
    <div id ="buaji">
    </div>
</div>


*/



const parent = React.createElement(
    "div",
    {id:"Babaji"},
    [React.createElement("div",{id:"Papaji"},
        [ React.createElement("h1",{id:"Varad"},"Varad is my name"),React.createElement("h2",{id:"Vishad"},"Vishad is my name")]
    ),
    React.createElement("div",{id:"Tauji"},
         React.createElement("h3",{id:"Naman"},"Naman is my name")
    ),
    React.createElement("div",{id:"Buaji"},
        React.createElement("h1",{},"Abha Buaji")
    )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);