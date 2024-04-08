import { Suspense } from "react";
import { React,lazy } from "react";
import Loader from "./components/Loader";

const Markdown = lazy(() => import("./components/NewsFeeds")); 
const NewsOnSearch = lazy(() => import("./components/NewsSearch"));

function App() {
  return (  
    <div>
      {/* GuardiansAPI */}
      <Suspense fallback={<Loader />}>
        <NewsOnSearch /> 
      </Suspense>  

      {/* NewsAPI */}
      <Suspense fallback={<Loader />}>
        <Markdown />
      </Suspense> 

    </div>
  );
}

export default App;
