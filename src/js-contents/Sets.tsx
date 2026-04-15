export default function Sets() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Sets
          </h1>
          <p className="lead text-secondary mb-5">
            A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.
          </p>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">1. Creating Sets</h2>
          <p className="mb-4">You can create a Set by passing an Array to new Set().</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`// Create a Set
const letters = new Set(["a", "b", "c"]);

// Create an empty Set and use add()
const fruits = new Set();
fruits.add("Apple");`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">2. Uniqueness</h2>
          <p className="mb-4">If you add equal elements, only the first will be saved. Sets are excellent for filtering duplicate values from an array.</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("a"); // This is ignored

console.log(letters.size); // 2

// Array deduplication trick:
const uniqueArray = [...new Set([1, 1, 2, 3, 3])]; // [1, 2, 3]`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">3. Essential Set Methods</h2>
          <ul className="list-group list-group-flush mb-4 shadow-sm rounded-4 overflow-hidden glass-panel">
            <li className="list-group-item bg-transparent py-3">
              <strong>add()</strong> - Adds a new element to the Set.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">set.add("value")</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>delete()</strong> - Removes an element from a Set.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">set.delete("value")</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>has()</strong> - Returns true if a value exists in the Set.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">set.has("value") // true or false</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>clear()</strong> - Removes all elements from a Set.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">set.clear()</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>size</strong> - Returns the number of elements.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">set.size</code>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
