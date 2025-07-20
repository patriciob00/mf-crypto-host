import { createRoot } from "react-dom/client";
import "./index.css";
import { Suspense } from "react";
import BaseLayout from "./layouts/base";

function App() {
  return (
    <Suspense fallback={<></>}>
      <BaseLayout />
    </Suspense>
  );
}

const root = document.getElementById("app");
if (root) {
  createRoot(root).render(<App />);
}