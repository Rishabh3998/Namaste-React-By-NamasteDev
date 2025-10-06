// Create a React element
// Syntax: React.createElement(type-of-tag, props-to-pass, children-to-pass-inside-the-created-tag)
const heading = React.createElement(
  "h1",
  { id: "heading", custom: "customAttribute" },
  "Hello World! from React"
);

// Prints the React element object
console.log(heading);

// Create a root element (to interact with the DOM we use ReactDOM)
// Syntax: ReactDOM.createRoot(document.getElementById("root") element)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the React element to the root element
// Syntax: root.render(React element)
root.render(heading);
