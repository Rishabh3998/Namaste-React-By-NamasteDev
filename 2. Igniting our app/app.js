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
// This is like a config which describes the UI we want to see on the screen, and render method just
// create elements based on this config object and adds it to the DOM.

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

// Create a React element with nested elements

// Structure of the nested elements:

// <div id="parent"></div>
//   <div id="child">
//     <h1>I am h1 tag</h1>
//   </div>
// </div>

const headingElement = React.createElement("h1", {}, "I am h1 tag");
const child = React.createElement("div", { id: "child" }, headingElement);
const parent = React.createElement("div", { id: "parent" }, child);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(parent);

// Create a React element with nested elements and siblings

// Structure of the nested elements:

// <div id="parent"></div>
//   <div id="child">
//     <h1>I am h1 sibling tag</h1>
//     <h2>I am h2 sibling tag</h2>
//   </div>
// </div>

const headingElement2 = React.createElement(
  "h1",
  { key: "1" },
  "I am h1 sibling tag"
);
const headingElement3 = React.createElement(
  "h2",
  { key: "2" },
  "I am h2 sibling tag"
);
const child2 = React.createElement("div", { id: "child2" }, [
  headingElement2,
  headingElement3,
]);
const parent2 = React.createElement("div", { id: "parent2" }, child2);

const root3 = ReactDOM.createRoot(document.getElementById("root3"));

root3.render(parent2);

// To avoid the above complexity of creating nested elements using React.createElement()
// we use JSX (JavaScript XML) which is a syntax extension to JavaScript.
// JSX looks like HTML but it is not HTML, it is a syntax extension to JavaScript.
// Babel is a JS compiler which converts JSX to React.createElement() calls.

// What is Babel?
// Babel is a JS compiler which converts JSX to React.createElement() calls.
// Babel is a tool which is used to convert modern JavaScript code into a backward compatible version of JavaScript
// that can be run by older JavaScript engines.
// Babel is a transpiler which converts ES6+ code into ES5 code.
// Babel is a tool which is used to convert JSX code into React.createElement() calls.
// Babel is a tool which is used to convert modern JavaScript code into a backward compatible version of JavaScript
// that can be run by older JavaScript engines.
// Babel is a transpiler which converts ES6+ code into ES5 code.

// Why do we need Babel?
// Because not all browsers support the latest version of JavaScript.
// So, to make our code compatible with all browsers, we use Babel to convert our code into a backward compatible version of JavaScript.

// How to use Babel?
// We can use Babel in two ways:
// 1. Using Babel CDN link in our HTML file.
// 2. Using Babel CLI or Babel with bundlers like Webpack, Parcel, etc.

// In this project, we are using Babel CDN link in our HTML file to convert JSX to React.createElement() calls.
// We have added the Babel CDN link in the HTML file and set the type of the script tag to "text/babel".
// This will tell the browser to use Babel to convert the JSX code to React.createElement() calls.

// Note:
// 1. We need to include React and ReactDOM CDN links before including the Babel CDN link in the HTML file.
//    Because Babel uses React and ReactDOM to convert JSX to React.createElement() calls.
//    So, we need to include React and ReactDOM CDN links before including the Babel CDN link in the HTML file.
// 2. We need to set the type of the script tag to "text/babel" to tell the browser to use Babel to convert the JSX code to React.createElement() calls.
// 3. We can write our JSX code inside the script tag with type "text/babel" or we can write our JSX code in a separate file with .jsx extension and include that file in the HTML file using script tag with type "text/babel".
// 4. Babel will convert the JSX code to React.createElement() calls and then ReactDOM will render those elements to the DOM.
// 5. We can also use Babel CLI or Babel with bundlers like Webpack, Parcel, etc. to convert our JSX code to React.createElement() calls.
// 6. In real-world applications, we don't use Babel CDN link in our HTML file. We use Babel CLI or Babel with bundlers like Webpack, Parcel, etc. to convert our JSX code to React.createElement() calls.

// What converts the React.createElement() calls to actual DOM elements and adds them to the DOM?
// ReactDOM is responsible for converting the React.createElement() calls to actual DOM elements and adds them to the DOM.
// ReactDOM is a library which is used to interact with the DOM in React applications.
// ReactDOM is responsible for rendering the React elements to the DOM.
// ReactDOM is responsible for updating the DOM when the state of the application changes.
// ReactDOM is responsible for unmounting the React elements from the DOM.
// ReactDOM is responsible for managing the lifecycle of the React elements in the DOM.
// ReactDOM is responsible for managing the event listeners in the DOM.
// ReactDOM is responsible for managing the refs in the DOM.
// ReactDOM is responsible for managing the portals in the DOM.
// ReactDOM is responsible for managing the fragments in the DOM.
// ReactDOM is responsible for managing the suspense in the DOM.
// ReactDOM is responsible for managing the concurrent mode in the DOM.
// ReactDOM is responsible for managing the server-side rendering in the DOM.
// ReactDOM is responsible for managing the hydration in the DOM.
// ReactDOM is responsible for managing the strict mode in the DOM.
// ReactDOM is responsible for managing the profiler in the DOM.
// ReactDOM is responsible for managing the error boundaries in the DOM.
// ReactDOM is responsible for managing the context in the DOM.
// ReactDOM is responsible for managing the hooks in the DOM.
