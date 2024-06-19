/* <div id : "parent">

  <div id: "chlid">
  
    <h1>i am an h1 tag </h1>
    <h2>i am an h2 tag </h2>
  </div>

  
    <div id: "chlid2">
  
    <h1>i am an h1 tag </h1>
    <h2>i am an h2 tag </h2>
  </div>

</div> */

const parent = React.createElement(
  "div",
  { id: "parent" },
  "",
  [
    React.createElement("div", { id: "child" }, ""),

    [
      React.createElement("h1", {}, "i am an h1 tag"),
      React.createElement("h2", {}, "i am an h2 tag"),
    ],
  ],
  React.createElement("div", { id: "child2" }, ""),

  [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h2", {}, "i am an h2 tag"),
  ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
