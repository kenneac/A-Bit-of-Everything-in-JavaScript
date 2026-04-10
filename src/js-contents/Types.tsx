export default function Types() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            JavaScript Data Types
          </h1>
          <p className="lead text-secondary mb-5">
            JavaScript is a dynamically typed language, meaning variables are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types.
          </p>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">1. Primitive Types</h2>
          <p className="mb-4">Primitive values are immutable (they cannot be changed) and are passed by value.</p>

          <div className="row g-4 mb-5">
            {[
              { type: 'String', desc: 'Represents textual data.', example: '"Hello World"' },
              { type: 'Number', desc: 'Integers and floating-point numbers.', example: '10, 3.14' },
              { type: 'Boolean', desc: 'Logical entities: true or false.', example: 'true' },
              { type: 'Undefined', desc: 'A variable that has not been assigned a value.', example: 'undefined' },
              { type: 'Null', desc: 'Represents the intentional absence of any object value.', example: 'null' },
              { type: 'Symbol', desc: 'A unique and immutable identifier.', example: 'Symbol("id")' },
              { type: 'BigInt', desc: 'Integers with arbitrary precision.', example: '9007199254740991n' },
            ].map((item, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="card h-100 shadow-sm border-0 rounded-4 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-dark">{item.type}</h5>
                    <p className="card-text text-secondary small">{item.desc}</p>
                    <code className="bg-dark text-warning p-2 rounded d-block mt-2">{item.example}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="h3 fw-bold mb-3 border-bottom pb-2">2. Reference Types (Objects)</h2>
          <p className="mb-4">Objects are collections of properties and are passed by reference.</p>

          <div className="card shadow-sm border-0 rounded-4 mb-4 glass-panel" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <div className="card-body p-4">
              <div className="mb-4">
                <h5 className="fw-bold">Object Literal</h5>
                <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const person = {
  name: "John",
  age: 30
};`}</code></pre>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold">Array</h5>
                <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const colors = ["red", "green", "blue"];`}</code></pre>
              </div>
              <div>
                <h5 className="fw-bold">Function</h5>
                <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0"><code>{`const sayHi = () => console.log("Hi!");`}</code></pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
