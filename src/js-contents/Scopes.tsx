export default function Scopes() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Scope
          </h1>
          <p className="lead text-secondary mb-5">
            Scope determines the accessibility (visibility) of variables. JavaScript has 3 main types of scope: Block scope, Function scope, and Global scope.
          </p>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">1. Block Scope</h2>
          <p className="mb-4">Variables declared inside a <code>{`{ }`}</code> block cannot be accessed from outside the block. This applies to <code>let</code> and <code>const</code>, but NOT to <code>var</code>.</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`{
  let x = 2;
}
// x can NOT be used here

{
  var y = 2;
}
// y CAN be used here`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">2. Local (Function) Scope</h2>
          <p className="mb-4">Variables declared within a JavaScript function become LOCAL to the function. Local variables have Function Scope: They can only be accessed from within the function.</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">3. Global Scope</h2>
          <p className="mb-4">Variables declared Globally (outside any function) have Global Scope. Global variables can be accessed from anywhere in a JavaScript program.</p>
          
          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`let carName = "Volvo";
// code here can use carName

function myFunction() {
  // code here can also use carName
}`}</code></pre>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
