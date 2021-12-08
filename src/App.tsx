import { useRoutes } from "react-router-dom";
// import layout components
import Header from "./components/layout/header";
import Sidebar from "./components/layout/sidebar";
// import components
import MyForms from "./components/myforms";
import "tailwindcss/tailwind.css";

const App = () => {
  const mainContent = useRoutes([
    { path: "/", element: <MyForms /> },
    { path: "*", element: "404 not found" },
  ]);

  return (
    <div className="flex flex-col">
      <Header />

      <div className="flex">
        <Sidebar />
        {mainContent}
      </div>
    </div>
  );
};

export default App;
