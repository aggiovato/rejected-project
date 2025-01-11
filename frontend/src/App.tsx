import { useState } from "react";
import CustomTable from "./components/CustomTable";
import HeaderNavbar from "./components/HeaderNavbar";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderNavbar />
      <main className="p-4">
        <CustomTable />
      </main>
    </div>
  );
};

export default App;
