export default function Strings() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Strings
          </h1>
          <p className="lead text-secondary mb-5">
            Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them, and to extract substrings.
          </p>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">1. Creating Strings</h2>
          <p className="mb-4">You can create strings using single quotes, double quotes, or backticks (template literals).</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const single = 'Single quotes';
const double = "Double quotes";
const backticks = \`Template literals\`;`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">2. Template Literals</h2>
          <p className="mb-4">Template literals allow you to embed expressions and variables directly within the string.</p>
          
          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const name = "Alice";
const greeting = \`Hello, \${name}!\`; // "Hello, Alice!"

const multiLine = \`This is a
multi-line string.\`;`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">3. Common String Methods</h2>
          <ul className="list-group list-group-flush mb-4 shadow-sm rounded-4 overflow-hidden glass-panel">
            <li className="list-group-item bg-transparent py-3">
              <strong>length</strong> - Returns the length of the string.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">"hello".length // 5</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>toUpperCase() / toLowerCase()</strong> - Changes the case of the string.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">"Hi".toLowerCase() // "hi"</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>includes()</strong> - Checks if a string contains another string.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">"hello".includes("el") // true</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>slice()</strong> - Extracts a part of a string.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">"hello world".slice(0, 5) // "hello"</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>replace()</strong> - Replaces a specified value with another value.
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">"hello".replace("l", "w") // "hewlo"</code>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
