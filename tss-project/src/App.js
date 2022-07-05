import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
export const pages = ["introduction", "project", "blog", "practice"];
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          home
        </Route>
        <Route path='/introduction'> introduction</Route>
        <Route path='/project'> project</Route>
        <Route path='/blog'> blog</Route>
        <Route path='/practice'> practice</Route>
      </Switch>
    </Layout>
  );
}

export default App;
