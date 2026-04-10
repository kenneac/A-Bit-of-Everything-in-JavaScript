export default function Syntax() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Syntax Basics
          </h1>
          <p className="lead text-secondary mb-5">
            JavaScript syntax is the set of rules that defines a correctly structured JavaScript program. It is heavily influenced by the C programming language.
          </p>

          <div className="card shadow-sm border-0 rounded-4 mb-4">
            <div className="card-header bg-warning text-dark fw-bold fs-5 py-3 rounded-top-4 border-0">
              1. Variables & Constants
            </div>
            <div className="card-body p-4 bg-light bg-opacity-50">
              <p>Variables store data values. Modern JS uses <code>let</code> for variables that can change and <code>const</code> for constants.</p>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`// Using let for reassignable variables
let score = 0;
score = 10; // Valid

// Using const for constants
const MAX_PLAYERS = 100;
// MAX_PLAYERS = 101; // Error! Assigning to constant.`}</code></pre>
            </div>
          </div>

          <div className="card shadow-sm border-0 rounded-4 mb-4">
            <div className="card-header bg-warning text-dark fw-bold fs-5 py-3 rounded-top-4 border-0">
              2. Functions
            </div>
            <div className="card-body p-4 bg-light bg-opacity-50">
              <p>Functions represent blocks of reusable code. Arrow functions provide a more concise syntax.</p>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`// Traditional Function
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow Function (ES6)
const greetModern = (name) => {
  return \`Hello, \${name}!\`; // Using Template Literal
};

// Even shorter for single returns
const multiply = (a, b) => a * b;`}</code></pre>
            </div>
          </div>
          
          <div className="card shadow-sm border-0 rounded-4 mb-4">
            <div className="card-header bg-warning text-dark fw-bold fs-5 py-3 rounded-top-4 border-0">
              3. Data Types & Objects
            </div>
            <div className="card-body p-4 bg-light bg-opacity-50">
              <p>Primitive types include Strings, Numbers, and Booleans. Objects are collections of properties.</p>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`// Primitive Types
const playerName = "Alice"; // String
const level = 5;          // Number
const isOnline = true;    // Boolean

// Object definition
const user = {
  name: "Bob",
  age: 28,
  greet: function() {
    console.log(\`Hi, I'm \${this.name}\`);
  }
};
user.greet();`}</code></pre>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
