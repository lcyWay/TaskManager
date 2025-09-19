import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import CommonPage from "pages/CommonPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default React.memo(App);
