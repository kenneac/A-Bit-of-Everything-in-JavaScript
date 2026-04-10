export default function History() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-5">
              <h1 className="display-5 fw-bold mb-4" style={{ color: '#F7DF1E', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                A Brief History of JavaScript
              </h1>
              
              <p className="lead text-secondary fs-4 mb-4">
                JavaScript is the world's most popular programming language, powering the interactive web.
              </p>
              
              <div className="mb-4">
                <h3 className="h4 fw-bold">The 10-Day Creation</h3>
                <p>
                  JavaScript was created by <strong>Brendan Eich</strong> in 1995 while working at Netscape Communications. 
                  Incredibly, the first prototype was written in just 10 days! It was originally intended to be a lightweight 
                  scripting language complementing Java, aimed at web designers and part-time programmers.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="h4 fw-bold">Mocha to JavaScript</h3>
                <p>
                  The language went through multiple names before settling. It started as <em>Mocha</em>, was briefly called <em>LiveScript</em> in September 1995, 
                  and finally renamed to <strong>JavaScript</strong> in December 1995. The name was largely a marketing tactic to capitalize on the immense popularity of Java at the time.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="h4 fw-bold">Standardization: ECMAScript</h3>
                <p>
                  To ensure cross-browser compatibility, Netscape submitted JavaScript to ECMA International for standardization. 
                  This resulted in the official standard known as <strong>ECMAScript</strong> (ES). 
                  A massive milestone for the language was the release of ES6 (ECMAScript 2015), which introduced modern features like classes, modules, and arrow functions, shaping the JavaScript we know today.
                </p>
              </div>

              <div className="alert alert-warning mt-5 shadow-sm d-flex align-items-center">
                <span className="fs-3 me-3">💡</span>
                <div>
                  <strong>Did you know?</strong> Java and JavaScript have essentially nothing in common technically. The similar names were purely for marketing!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
