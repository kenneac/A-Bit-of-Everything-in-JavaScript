export default function Operators() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Operators
          </h1>
          <p className="lead text-secondary mb-5">
            Operators are used to assign values, compare values, and perform arithmetic operations.
          </p>

          <div className="card shadow-sm border-0 rounded-4 mb-4 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-header bg-warning text-dark fw-bold fs-5 py-3 rounded-top-4 border-0">
              1. Arithmetic Operators
            </div>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`let x = 5 + 2;  // 7 (Addition)
let y = 5 - 2;  // 3 (Subtraction)
let z = 5 * 2;  // 10 (Multiplication)
let a = 5 / 2;  // 2.5 (Division)
let b = 5 % 2;  // 1 (Modulus/Remainder)
let c = 5 ** 2; // 25 (Exponentiation)`}</code></pre>
            </div>
          </div>

          <div className="card shadow-sm border-0 rounded-4 mb-4 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-header bg-warning text-dark fw-bold fs-5 py-3 rounded-top-4 border-0">
              2. Comparison Operators
            </div>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`5 === 5;  // true (Strict equality: value and type)
5 == "5"; // true (Loose equality: coerces type)
5 !== 6;  // true (Strict inequality)
10 > 5;   // true (Greater than)
10 <= 10; // true (Less than or equal to)`}</code></pre>
            </div>
          </div>

          <div className="card shadow-sm border-0 rounded-4 mb-4 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-header bg-warning text-dark fw-bold fs-5 py-3 rounded-top-4 border-0">
              3. Logical Operators
            </div>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const age = 25;
const hasLicense = true;

// AND (&&): true if both are true
age > 18 && hasLicense; // true

// OR (||): true if at least one is true
age > 30 || hasLicense; // true

// NOT (!): toggles boolean
!hasLicense; // false`}</code></pre>
            </div>
          </div>

          <div className="card shadow-sm border-0 rounded-4 mb-4 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-header bg-warning text-dark fw-bold fs-5 py-3 rounded-top-4 border-0">
              4. Ternary Operator
            </div>
            <div className="card-body p-4">
              <p>A shorthand for <code>if-else</code>.</p>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const isAdult = age >= 18 ? "Yes" : "No";`}</code></pre>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
