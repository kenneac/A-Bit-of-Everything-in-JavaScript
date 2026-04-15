export default function Numbers() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Numbers
          </h1>
          <p className="lead text-secondary mb-5">
            Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc. JavaScript has only one type of number.
          </p>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">1. Number Literal</h2>
          <p className="mb-4">Numbers can be written with or without decimals.</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals
let z = 123e5;   // 12300000
let w = 123e-5;  // 0.00123`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">2. The Math Object</h2>
          <p className="mb-4">The JavaScript Math object allows you to perform mathematical tasks on numbers.</p>
          
          <ul className="list-group list-group-flush mb-5 shadow-sm rounded-4 overflow-hidden glass-panel">
            <li className="list-group-item bg-transparent py-3">
              <strong>Math.round()</strong> - Returns the nearest integer.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">Math.round(4.6) // 5</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>Math.ceil()</strong> - Returns the value rounded UP.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">Math.ceil(4.1) // 5</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>Math.floor()</strong> - Returns the value rounded DOWN.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">Math.floor(4.9) // 4</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>Math.random()</strong> - Returns a random number between 0 and 1.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">Math.random() // e.g. 0.4578...</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>Math.max() / Math.min()</strong> - Returns highest/lowest value in list of arguments.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">Math.max(1, 10, 5) // 10</code>
            </li>
          </ul>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">3. Number Methods</h2>
          <ul className="list-group list-group-flush mb-4 shadow-sm rounded-4 overflow-hidden glass-panel">
            <li className="list-group-item bg-transparent py-3">
              <strong>toFixed()</strong> - Returns a string, with the number written with a specified number of decimals.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">(9.656).toFixed(2) // "9.66"</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>parseInt()</strong> - Parses a string and returns a whole number.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">parseInt("10.33") // 10</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>parseFloat()</strong> - Parses a string and returns a number.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">parseFloat("10.33") // 10.33</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>Number.isNaN()</strong> - Determines whether a value is NaN (Not-a-Number).
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">Number.isNaN(NaN) // true</code>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
