
import './App.css';

function App() {
  return (
    <div className="App">
      
  <div class="outer-container">

<div class="titles">
  <div class="title">
    <h2>ES6 SYNTAX</h2>
  </div>

  <div class="title">
    <h2>ES5 SYNTAX</h2>
  </div>

</div>
<div class="transpilation-row">
  <div class="box">
    <div class="code-box">
      <pre>
        <code class="JavaScript">
const nurseOlynyk = ...</code>
      </pre>
    </div>
    <div class="compatibility-box">
      <p>97% Compatibility</p>
    </div>
  </div>

  <div class="arrow">
    
  </div>

  <div class="box">
    <div class="code-box">
      <pre id="es5-one-code">
        
      </pre>
    </div>
    <div class="compatibility-box" id="es5-one-percent">
      <p>__% Compatibility</p>
    </div>
  </div>
</div>
<div class="transpilation-row">
  <div class="box">
    <div class="code-box">
      <pre>
        <code class="JavaScript">
let nurseDurant = ...
        </code>
      </pre>
    </div>
    <div class="compatibility-box">
      <p>80% Compatibility</p>
    </div>
  </div>
  <div class="arrow">
    
  </div>

  <div class="box">
    <div class="code-box">
      <pre id="es5-two-code">
        
      </pre>
    </div>
    <div class="compatibility-box" id="es5-two-percent">
      <p>__% Compatibility</p>
    </div>
  </div>
</div>
<div class="transpilation-row">
  <div class="box">
    <div class="code-box">
      <pre>
        <code class="JavaScript">
</code>
      </pre>
    </div>
    <div class="compatibility-box">
      <p>78% Compatibility</p>
    </div>
  </div>

  <div class="arrow">
    
  </div>

  <div class="box">
    <div class="code-box">
      <pre id="es5-three-code">
        
      </pre>
    </div>
    <div class="compatibility-box" id="es5-three-percent">
      <p>__% Compatibility</p>
    </div>
  </div>
</div>

<div class="transpilation-row">
  <div class="box">
    <div class="code-box">
      <pre>
        <code class="JavaScript">class HospitalEmployee {
}
</code>
      </pre>
    </div>
    <div class="compatibility-box">
      <p>74% Compatibility</p>
    </div>
  </div>
  <div class="arrow">
    
  </div>

  <div class="box">
    <div class="code-box">
      <pre id="es5-four-code">
        
      </pre>
    </div>
    <div class="compatibility-box" id="es5-four-percent">
      <p>__% Compatibility</p>
    </div>
  </div>
</div>

</div>

<script src="src/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
<script type="text/javascript" src="lib/script.js"></script>
    </div>
  );
}

export default App;
