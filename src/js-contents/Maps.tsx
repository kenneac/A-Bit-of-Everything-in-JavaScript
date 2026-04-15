export default function Maps() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Maps
          </h1>
          <p className="lead text-secondary mb-5">
            A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys.
          </p>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">1. Map vs. Object</h2>
          <div className="table-responsive mb-5">
            <table className="table table-hover shadow-sm rounded-4 overflow-hidden shadow-sm glass-panel border-0">
              <thead className="bg-dark text-warning">
                <tr>
                  <th className="border-0">Feature</th>
                  <th className="border-0">Object</th>
                  <th className="border-0">Map</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="fw-bold">Key Types</td>
                  <td>Strictly Strings and Symbols</td>
                  <td className="text-success fw-bold">Any type (even functions or objects)</td>
                </tr>
                <tr>
                  <td className="fw-bold">Order</td>
                  <td>Not guaranteed</td>
                  <td className="text-success fw-bold">Insertion order preserved</td>
                </tr>
                <tr>
                  <td className="fw-bold">Size</td>
                  <td>Manually calculated</td>
                  <td className="text-success fw-bold">Built-in <code>.size</code> property</td>
                </tr>
                <tr>
                  <td className="fw-bold">Iteration</td>
                  <td>Requires Object.keys() etc.</td>
                  <td className="text-success fw-bold">Directly iterable</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">2. Creating Maps</h2>
          <p className="mb-4">You can create a Map by passing an Array to new Map().</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`// Pass an array of [key, value] pairs
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Or create an empty Map and use .set()
const roles = new Map();
roles.set('admin', 'John');`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">3. Essential Map Methods</h2>
          <ul className="list-group list-group-flush mb-4 shadow-sm rounded-4 overflow-hidden glass-panel">
            <li className="list-group-item bg-transparent py-3">
              <strong>set()</strong> - Sets the value for a key in a Map.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">map.set(key, value)</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>get()</strong> - Gets the value for a key in a Map.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">map.get(key) // returns value</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>has()</strong> - Returns true if a key exists in a Map.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">map.has(key) // true or false</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>delete()</strong> - Removes a Map element specified by the key.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">map.delete(key)</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>clear()</strong> - Removes all elements from a Map.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">map.clear()</code>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
