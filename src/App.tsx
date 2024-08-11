import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CountButton from "@/components/count-btn";

const vite_var = import.meta.env.VITE_VAR;
const dev_mode = import.meta.env.DEV;
const env_mode = dev_mode ? "development" : "production";

function App() {
  console.log("Env Variable:", vite_var);
  console.log("Development:", dev_mode);
  console.log("Environment:", env_mode);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CountButton />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Environment Variable: {vite_var}</p>
    </>
  );
}

export default App;
