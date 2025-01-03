import React from "react";
import { Suspense, lazy } from "react";

const Component1 = lazy(() => import("../src/LazyContent/myComponent1"));
const Component2 = lazy(() => import("../src/LazyContent/myComponent2"));

function App() {
  return (
    <>
      <h1> Lazy Load </h1>

      <Suspense fallback={<div>Component1 is loading, please wait...</div>}>
        <Component1 />
      </Suspense>

      <Suspense fallback={<div>Component2 is loading, please wait...</div>}>
        <Component2 />
      </Suspense>
    </>
  );
}

export default App;

// LazyLoading
// Lazy Loading in React can be implemented with the help of the built-in function React. lazy(). This is also known as code splitting, In which React.lazy along with webpack bundler divides the code into separate chunks, when the component is requested the chunk is loaded on demand. The use of React Suspense is to define fallback content to be displayed during asynchronous components or data loading, as shown above.
