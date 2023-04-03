
import React from "react";

import ReactDOM  from "react-dom/client";

const Jsxheading = () =>
     (<h1 className="Title">Namaste React through JSX</h1>
     );

const HeadingComponent = () => (
    <div id="Heading">
    <Jsxheading/> 
    <h1>Namaste React through React Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
