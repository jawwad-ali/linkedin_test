import { Suspense } from "react";
import { React,lazy } from "react";

const Markdown = lazy(() => import("./components/NewsFeeds"));
const NewsOnSearch = lazy(() => import("./components/NewsSearch"));

function App() {
  return ( 
    <div>
      {/* GuardiansAPI */}
      <Suspense fallback={<h1>Searching....</h1>}>
        <NewsOnSearch />
      </Suspense>

      {/* NewsAPI */}
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Markdown />
      </Suspense> 

    </div>
  );
}

export default App;
