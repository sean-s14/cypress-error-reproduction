import "./App.css";
import CountButton from "@/components/count-btn";
import ProfileOrLogin from "@/components/auth/profile-or-login";

const vite_var = import.meta.env.VITE_VAR;

function App() {
  return (
    <>
      <div>
        <ProfileOrLogin />
      </div>
      <h1>Cypress Error Reproduction</h1>
      <div className="card">
        <CountButton />
      </div>
      <p>Environment Variable: {vite_var}</p>
    </>
  );
}

export default App;
