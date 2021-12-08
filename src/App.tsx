import { useRoutes } from "react-router-dom";
// import layout components
import Header from "./components/layout/header";
import Sidebar from "./components/layout/sidebar";
// import components
import MyForms from "./components/myforms";

const App = () => {
  const mainContent = useRoutes([
    { path: "/", element: <MyForms /> },
    { path: "*", element: "404 not found" },
  ]);

  return (
    <>
      <Header />
      <Sidebar />
      {mainContent}
    </>
  );
};

export default App;
