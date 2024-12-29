import React from "react"
import ReactDOM from "react-dom/client"
const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"},  
        [React.createElement("h1", {id: "headingtag"}, "This is Namaste React"), 
        React.createElement("h2", {id: "headingtag2"}, "by Ankit Thakur")]
    ))
//console.log(parent)
const jsxheading = <h1 id="jsxheading">Hii i am Ankit Thakur</h1> 
//console.log(jsxheading)
// react functional component
const Title = ()=>(
    <h1 id="heading">Hii i am Ankit Thakur</h1>
)
const Headingcomponent = ()=>{
    return (
        <div>
            <Title />
            <h1>Namaste react functional component</h1>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Headingcomponent />)
