export default function Functions() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Functions
          </h1>
          <p className="lead text-secondary mb-5">
            A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).
          </p>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">1. Function Declarations</h2>
          <p className="mb-4">Declared functions are not executed immediately. They are "saved for later यूज" and will be executed later when they are invoked.</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`function multiply(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

let result = multiply(4, 3); // result will be 12`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">2. Function Expressions</h2>
          <p className="mb-4">A JavaScript function can also be defined using an expression. The function expression can be stored in a variable.</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const multiply = function(a, b) {
  return a * b;
};

let result = multiply(4, 3);`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">3. Arrow Functions</h2>
          <p className="mb-4">Arrow functions allow a short syntax for writing function expressions. You don't need the <code>function</code> keyword, the <code>return</code> keyword, or the curly brackets (if it's a single statement).</p>
          
          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`// Traditional Function
const multiply = function(a, b) {
  return a * b;
}

// Arrow Function
const multiplyArrow = (a, b) => a * b;`}</code></pre>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
