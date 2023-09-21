import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";

const Help = () => {
  const [state, setState] = useState({ name: "" });

  useEffect(() => {
    setTimeout(() => {
      setState({ name: "Monirul" });
    }, 3000);
    console.log("Set timeout");
  }, []);

  console.log("Rendering");

  return (
    <Layout>
      {state.name ? (
        <h1>Hello {state.name}, I am help page</h1>
      ) : (
        <h1>Hello Guest, I am help page</h1>
      )}
    </Layout>
  );
};
export default Help;
