import { useState } from "react";
import "./App.css";
import { sampleProducts } from "./data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>TS Amazon</header>
      <main>
        <ul>
          {sampleProducts.map((p) => (
            <li key={p.slug}>
              <img src={p.image} alt={p.name} className="product-image" />
              <h2>{p.name}</h2>
              <p>{p.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All right reserved;</footer>
    </div>
  );
}

export default App;
