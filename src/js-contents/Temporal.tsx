export default function Temporal() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Temporal API
          </h1>
          <p className="lead text-secondary mb-5">
            The Temporal API is a modern, built-in proposal designed to be the successor to the legacy <code>Date</code> object. It provides a more robust and developer-friendly way to handle dates, times, and time zones.
          </p>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">1. What is Temporal?</h2>
          <p className="mb-4">
            Temporal is a global object that serves as a top-level namespace for a new set of date and time APIs. It addresses long-standing issues with the legacy <code>Date</code> object, such as its mutability, lack of time zone awareness, and confusing API design.
          </p>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">2. Temporal vs. Date</h2>
          <div className="table-responsive mb-5">
            <table className="table table-hover shadow-sm rounded-4 overflow-hidden shadow-sm glass-panel border-0">
              <thead className="bg-dark text-warning">
                <tr>
                  <th className="border-0">Feature</th>
                  <th className="border-0">Legacy Date</th>
                  <th className="border-0">Temporal API</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="fw-bold">Mutability</td>
                  <td className="text-danger">Mutable (Changes original)</td>
                  <td className="text-success fw-bold">Immutable (Returns new)</td>
                </tr>
                <tr>
                  <td className="fw-bold">Time Zones</td>
                  <td>Implicit (UTC/Local)</td>
                  <td className="text-success fw-bold">First-class support</td>
                </tr>
                <tr>
                  <td className="fw-bold">Precision</td>
                  <td>Milliseconds</td>
                  <td className="text-success fw-bold">Nanoseconds</td>
                </tr>
                <tr>
                  <td className="fw-bold">API Quality</td>
                  <td className="text-muted small">Confusing/Inconsistent</td>
                  <td className="text-success fw-bold">Clean & Semantic</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">3. Why is Temporal Important?</h2>
          <ul className="list-group list-group-flush mb-5 shadow-sm rounded-4 overflow-hidden glass-panel">
            <li className="list-group-item bg-transparent py-3">
              <strong>Reliability:</strong> Immutability prevents widespread bugs caused by accidental date mutations.
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>Ease of Use:</strong> Common tasks like adding durations or calculating differences are now intuitive built-in methods.
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>No More Libraries:</strong> Reduces dependency on heavy third-party libraries like Moment.js or date-fns.
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>Time Zone Safety:</strong> Forces explicit time zone handling, making internationalization much easier.
            </li>
          </ul>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">4. Useful Examples</h2>

          <div className="card shadow-sm border-0 rounded-4 mb-4 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <h5 className="fw-bold">Constructors & Extracting Data</h5>
              <p className="text-secondary small mb-3">Creating dates and extracting specific properties like year, month, or day.</p>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`// Constructor
const date = Temporal.PlainDate.from('2026-06-15');

// Getting properties
console.log(date.year);  // 2026
console.log(date.month); // 6
console.log(date.day);   // 15

// Getting formatted strings (e.g., Monday, June)
const weekday = date.toLocaleString('en-US', { weekday: 'long' }); // "Monday"
const monthName = date.toLocaleString('en-US', { month: 'long' }); // "June"`}</code></pre>
            </div>
          </div>

          <div className="card shadow-sm border-0 rounded-4 mb-4 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <h5 className="fw-bold">Add and Subtract</h5>
              <p className="text-secondary small mb-3">Adding and subtracting durations returns a new immutable object.</p>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const date = Temporal.PlainDate.from('2026-05-17');

// Add 10 days
const futureDate = date.add({ days: 10 });
console.log(futureDate.toString()); // "2026-05-27"

// Subtract 2 weeks
const pastDate = date.subtract({ weeks: 2 });
console.log(pastDate.toString()); // "2026-05-03"`}</code></pre>
            </div>
          </div>

          <div className="card shadow-sm border-0 rounded-4 mb-4 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <h5 className="fw-bold">Comparing Dates</h5>
              <p className="text-secondary small mb-3">Use the built-in compare and equals methods instead of standard operators.</p>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const d1 = Temporal.PlainDate.from("2026-05-17");
const d2 = Temporal.PlainDate.from("2026-05-20");

// Returns -1 (before), 0 (equal), or 1 (after)
const result = Temporal.PlainDate.compare(d1, d2); 
console.log(result); // -1

// Check for equality
console.log(d1.equals(d2)); // false`}</code></pre>
            </div>
          </div>

          <div className="card shadow-sm border-0 rounded-4 mb-4 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <h5 className="fw-bold">Formatting Dates</h5>
              <p className="text-secondary small mb-3">Use toString() for ISO 8601 or toLocaleString() for human-readable formats.</p>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const now = Temporal.Now.zonedDateTimeISO();

// ISO Formatting
console.log(now.toString());

// Localized Formatting
console.log(now.toLocaleString('en-US', { 
  dateStyle: 'full', 
  timeStyle: 'short' 
}));`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">5. Common Mistakes</h2>
          <ul className="list-group list-group-flush mb-5 shadow-sm rounded-4 overflow-hidden glass-panel">
            <li className="list-group-item bg-transparent py-3">
              <strong>Assuming Mutability:</strong> <code>today.add(&#123; days: 1 &#125;)</code> does not change <code>today</code>. You must assign the result to a new variable.
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>Using operators like &gt; or &lt;:</strong> These won't work reliably on Temporal objects. Always use <code>Temporal.Type.compare(a, b)</code>.
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>Mixing incompatible types:</strong> You cannot directly compare a <code>PlainDate</code> with a <code>ZonedDateTime</code>.
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>Using Non-ISO Strings:</strong> Temporal strictly requires ISO 8601 strings. Standard strings like <code>12-25-2026</code> will fail to parse.
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
