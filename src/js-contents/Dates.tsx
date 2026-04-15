export default function Dates() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Dates
          </h1>
          <p className="lead text-secondary mb-5">
            JavaScript Date objects let us work with dates. By default, JavaScript will use the browser's time zone and display a date as a full text string.
          </p>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">1. Creating Date Objects</h2>
          <p className="mb-4">There are 4 ways to create a new date object:</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">2. Example Invocations</h2>
          <p className="mb-4">Here are examples of how you might initialize date objects in practice.</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const now = new Date();
const d1 = new Date("October 13, 2014 11:13:00");
const d2 = new Date(2018, 11, 24, 10, 33, 30, 0); // Dec 24 2018 (Months 0-11)`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">3. Date Methods</h2>
          <ul className="list-group list-group-flush mb-4 shadow-sm rounded-4 overflow-hidden glass-panel">
            <li className="list-group-item bg-transparent py-3">
              <strong>getFullYear()</strong> - Get the year as a four digit number (yyyy).
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">const y = now.getFullYear();</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>getMonth()</strong> - Get the month as a number (0-11).
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">const m = now.getMonth();</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>getDate()</strong> - Get the day as a number (1-31).
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">const d = now.getDate();</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>getDay()</strong> - Get the weekday as a number (0-6).
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">const wd = now.getDay();</code>
            </li>
            <li className="list-group-item bg-transparent py-3">
              <strong>getTime()</strong> - Get the time (milliseconds since January 1, 1970).
              <code className="bg-dark text-warning p-1 px-2 rounded ms-2 d-inline-block">const t = now.getTime();</code>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
