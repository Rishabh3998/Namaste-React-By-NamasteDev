// Create a React element
// Syntax: React.createElement(type-of-tag, props-to-pass, children-to-pass-inside-the-created-tag)
const heading = React.createElement(
  "h1",
  // An object containing the attributes we want to pass to the created tag
  { id: "heading", custom: "customAttribute" },
  "Hello World! from React"
);

// Prints the React element object
console.log(heading);

// Output:
// {
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "id": "heading",
//         "custom": "customAttribute",
//         "children": "Hello World! from React"
//     },
//     "_owner": null,
//     "_store": {}
// }

// React element is nothing but a JS object which describes the UI.

// Create a root element (to interact with the DOM we use ReactDOM)
// React does not know about the root element in the HTML file, so we need to tell ReactDOM about it.
// and pass the root element to ReactDOM.createRoot() method.

// Earlier we used React.createElement() to create a React element.
// Now we will use ReactDOM.createRoot() to create a root element. Because ReactDOM is responsible for
// interacting with the DOM, and we will add out elements to the DOM.
// Syntax: ReactDOM.createRoot(document.getElementById("root") element)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the React element to the root element
// Syntax: root.render(React element)
root.render(heading);
