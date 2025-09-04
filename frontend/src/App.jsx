import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("/api/chat/")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg("Error connecting to backend."));
  }, []);

  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1 style={{color: "blue"}}>LLM Demo Project</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
