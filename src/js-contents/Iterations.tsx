export default function Iterations() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Iterables
          </h1>
          <p className="lead text-secondary mb-5">
            Iterables are iterable objects (like Arrays). Iterables can be accessed with simple and efficient code. Iterables can be iterated over with <code>for..of</code> loops.
          </p>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">1. The for...of Loop</h2>
          <p className="mb-4">The JavaScript <code>for...of</code> statement loops through the values of an iterable object. It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <h5 className="fw-bold">Iterating over an Array</h5>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-4"><code>{`const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + " ";
}
// text is "BMW Volvo Mini "`}</code></pre>

              <h5 className="fw-bold">Iterating over a String</h5>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const language = "JavaScript";

let text = "";
for (let x of language) {
  text += x + " ";
}
// text is "J a v a S c r i p t "`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">2. The for...in Loop</h2>
          <p className="mb-4">The JavaScript <code>for...in</code> statement loops through the properties of an Object. Do NOT use <code>for...in</code> over an Array if the index order is important. Use <code>for...of</code>, a standard <code>for</code> loop, or <code>Array.forEach()</code> instead.</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x] + " ";
}
// text is "John Doe 25 "`}</code></pre>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
