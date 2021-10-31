import { createContext, useMemo, useState } from "react";
import Layout from "../components/layout";
import "../styles/globals.css";

//console.log(process.env.REACT_APP_SENDGRID_API_KEY);

//global variable
export const Context = createContext({
  count: 0,
  setCount: () => {},
});
//export const Context = createContext();

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
