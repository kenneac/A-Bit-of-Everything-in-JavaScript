export default function Loops() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Loops
          </h1>
          <p className="lead text-secondary mb-5">
            Loops are used to run the same code over and over again, each time with a different value.
          </p>

          <div className="card shadow-sm border-0 rounded-4 mb-4 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-header bg-warning text-dark fw-bold fs-5 py-3 rounded-top-4 border-0">
              1. The For Loop
            </div>
            <div className="card-body p-4">
              <p>The standard way to loop through a block of code a number of times.</p>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`for (let i = 0; i < 5; i++) {
  console.log("Iteration number " + i);
}`}</code></pre>
            </div>
          </div>

          <div className="card shadow-sm border-0 rounded-4 mb-4 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-header bg-warning text-dark fw-bold fs-5 py-3 rounded-top-4 border-0">
              2. While & Do While
            </div>
            <div className="card-body p-4">
              <p>Loops through a block of code as long as a specified condition is true.</p>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Do while runs at least once
do {
  console.log("Run once");
} while (i < 5);`}</code></pre>
            </div>
          </div>

          <div className="card shadow-sm border-0 rounded-4 mb-4 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-header bg-warning text-dark fw-bold fs-5 py-3 rounded-top-4 border-0">
              3. For...Of & For...In
            </div>
            <div className="card-body p-4">
              <p>Modern ways to iterate over iterable objects and properties.</p>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const fruits = ["Apple", "Banana", "Orange"];
for (const fruit of fruits) {
  console.log(fruit);
}

const person = { name: "Alice", age: 25 };
for (const key in person) {
  console.log(key + ": " + person[key]);
}`}</code></pre>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
