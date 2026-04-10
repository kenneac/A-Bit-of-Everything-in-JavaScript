export default function Conditions() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1
            className="display-5 fw-bold mb-4"
            style={{
              color: "#F7DF1E",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            JavaScript Conditions
          </h1>
          <p className="lead text-secondary mb-5">
            Conditional statements are used to perform different actions based
            on different conditions.
          </p>

          <div
            className="card shadow-sm border-0 rounded-4 mb-4 glass-panel"
            style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
          >
            <div className="card-header bg-warning text-dark fw-bold fs-5 py-3 rounded-top-4 border-0">
              1. If, Else If, and Else
            </div>
            <div className="card-body p-4">
              <p>The most common conditional statement.</p>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0">
                <code>{`const time = 14;

if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}`}</code>
              </pre>
            </div>
          </div>

          <div
            className="card shadow-sm border-0 rounded-4 mb-4 glass-panel"
            style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
          >
            <div className="card-header bg-warning text-dark fw-bold fs-5 py-3 rounded-top-4 border-0">
              2. Switch Statement
            </div>
            <div className="card-body p-4">
              <p>
                Used to perform different actions based on different conditions
                (better for multiple specific values).
              </p>
              <pre className="bg-dark text-light p-3 rounded-3 shadow-sm mb-0">
                <code>{`const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Just another day.");
}`}</code>
              </pre>
            </div>
          </div>

          <div className="alert alert-info mt-4 glass-panel border-0">
            <strong>Pro Tip:</strong> Use <code>break</code> in switch
            statements to prevent "falling through" to the next case!
          </div>
        </div>
      </div>
    </div>
  );
}
