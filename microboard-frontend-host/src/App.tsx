import type { FC } from "react";
// import { lazy Suspense } from "react";

// const ChildComponent = lazy(() => import("MicroboardFrontendChild/App"));

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <p>ChildComponent (mock)</p>
    // <Suspense fallback={<div>Loading MicroboardChild Microfrontend...</div>}>
      //  <ChildComponent /> 
    // </Suspense>
  );
};

export default App;
