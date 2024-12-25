/*const heading = React.createElement("h1", {id: "heading"}, "hello world using react")
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(heading) //return a javascript object
root.render(heading)*/

// creating nested element in react
const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {id: "headingtag"}, "h1 tag"), 
        React.createElement("h2", {id: "headingtag2"}, "h2 tag")] // we can create more children using array
    ))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)