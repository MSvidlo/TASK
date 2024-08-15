
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './pages/HomePage.Jsx';


const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshing());
  }, [dispatch]);
  return (
    <div>
      <h1>Campers</h1>
  <HomePage/>
       {selectLoading && !selectError && <b>Request in progress...</b>}
     
    </div>
  );
};

export default App;
 
