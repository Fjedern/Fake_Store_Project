import { createContext, useMemo, useState } from "react";
import Layout from "../components/layout";
import "../styles/globals.css";

//global variable
export const Context = createContext({
  count: 0,
  setCount: () => {},
});

function MyApp({ Component, pageProps }) {
  const [count, setCount] = useState(0);
  const value = { count, setCount };

  return (
    <Context.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context.Provider>
  );
}

export default MyApp;
