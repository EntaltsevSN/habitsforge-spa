import AppRouter from './router/AppRouter';
import Layout from './layout/Layout';
import Header from './layout/Header';
import { useEffect } from 'react';
import useApp from './model/useApp';

function App() {
  const { fetchHabits, fetchUsersData } = useApp();

  useEffect(() => {
    fetchHabits();
    fetchUsersData();
  }, []);

  return (
    <Layout>
      <Header />
      <AppRouter />
    </Layout>
  )
}

export default App;