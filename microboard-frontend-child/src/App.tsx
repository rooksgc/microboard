import type { FC } from "react";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div>
      <header
        style={{
          background: "#007ACC",
          color: "white",
          padding: "1rem",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h1>Microboard Child (Remote)</h1>
        <p>This component is served from an independent child application!</p>
      </header>
    </div>
  );
};

export default App;
