import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    /* pt-[60px] pushes the dashboard down so it doesn't hide behind the header */
    <div className="flex w-full min-h-screen bg-slate-50 font-sans pt-[60px]">
      <Sidebar />

      {/* ml-[80px] pushes the content to the right of the sidebar */}
      <div className="flex-1 flex flex-col ml-[80px]">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;