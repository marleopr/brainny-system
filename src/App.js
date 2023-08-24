// import './App.css';
import { Router } from "./routes/Router";

function App() {
  return (
    <div style={{ fontFamily: 'Poppins', alignItems: 'center', width: '100vw', height: '100vh', boxSizing: 'border-box', border: 'solid 1px greenyellow' }}>
      {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh', boxSizing: 'border-box', padding: '5px', fontFamily: 'Poppins', alignItems: 'center' }}> */}
      {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}> */}
      <Router />
      {/* </div> */}
    </div>
  )
}

export default App;
