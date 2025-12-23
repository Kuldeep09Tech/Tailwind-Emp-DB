import React from 'react';
import MainLayout from './layout/MainLayout.jsx';
import DashboardView from './components/Dashboard/DashboardView.jsx';

function App() {
  return (
    <MainLayout>
      <DashboardView />
    </MainLayout>
  );
}

export default App;