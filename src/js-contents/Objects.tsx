export default function Objects() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Objects
          </h1>
          <p className="lead text-secondary mb-5">
            Objects are variables too. But objects can contain many values. An object is a collection of properties, and a property is an association between a name (or key) and a value.
          </p>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">1. Object Definition</h2>
          <p className="mb-4">You define (and create) a JavaScript object with an object literal.</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">2. Accessing Object Properties</h2>
          <p className="mb-4">You can access object properties in two ways: dot notation or bracket notation.</p>

          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`// Dot notation
let carName = car.type;

// Bracket notation
let carModel = car["model"];`}</code></pre>
            </div>
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">3. Object Methods</h2>
          <p className="mb-4">Objects can also have methods. Methods are actions that can be performed on objects. Methods are stored in properties as function definitions.</p>
          
          <div className="card shadow-sm border-0 rounded-4 mb-5 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

let name = person.fullName();`}</code></pre>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
