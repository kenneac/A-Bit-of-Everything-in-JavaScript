export default function Arrays() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Arrays
          </h1>
          <p className="lead text-secondary mb-5">
            An array is a special variable, which can hold more than one value at a time. Arrays are a special kind of object, with numbered indexes.
          </p>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">1. Creating Arrays</h2>
          <p className="mb-4">You can create an array using an array literal, which is the easiest and most common way.</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const cars = ["Saab", "Volvo", "BMW"];

// You can also create an empty array and add elements later
const fruits = [];
fruits[0]= "Apple";
fruits[1]= "Banana";`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">2. Accessing Array Elements</h2>
          <p className="mb-4">You access an array element by referring to the index number. Array indexes start with 0.</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];  // "Saab"

// Changing an element
cars[0] = "Opel";
console.log(cars);  // ["Opel", "Volvo", "BMW"]`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">3. Essential Array Methods</h2>
          <ul className="list-group list-group-flush mb-4 shadow-sm rounded-4 overflow-hidden glass-panel">
            <li className="list-group-item bg-transparent py-3">
              <strong>push()</strong> - Adds a new element to the end.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">cars.push("Audi")</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>pop()</strong> - Removes the last element.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">cars.pop()</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>map()</strong> - Creates a new array by performing a function on each element.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">[1, 2].map(x =&gt; x * 2) // [2, 4]</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>filter()</strong> - Creates a new array with elements that pass a test.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">[1, 2, 3].filter(x =&gt; x &gt; 1) // [2, 3]</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>reduce()</strong> - Runs a function on each array element to produce a single value.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">[1, 2, 3].reduce((acc, curr) =&gt; acc + curr, 0) // 6</code>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
