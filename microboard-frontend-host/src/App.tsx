import type { FC } from "react";
import { lazy, Suspense } from "react";

const MicroboardFrontendChild = lazy(() => import("MicroboardFrontendChild/App"));

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <Suspense fallback={<div>Loading MicroboardChild Microfrontend...</div>}>
       <MicroboardFrontendChild /> 
    </Suspense>
  );
};

export default App;
