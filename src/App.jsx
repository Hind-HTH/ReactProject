import { Suspense } from 'react';
import Layout from './Layouts/Layout';
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Layout>
        <Suspense>
          <Outlet />
        </Suspense>
      </Layout >
    </div>
  );
};

export default App;
