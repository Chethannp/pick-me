import React, { useEffect } from "react";
import { fetchAllCases } from "../../../redux-thunk/dummy/dummy.actions";

const HomePage = props => {
  useEffect(() => {
    return () => {
      return false;
    };
  }, []);

  return (
    <div>
      <h1>Welcome to home page!</h1>
    </div>
  );
};

const loadData = store => {
  return store.dispatch(fetchAllCases());
};
export { loadData };

export default HomePage;
