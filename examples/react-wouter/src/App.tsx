import { Route, Router, Switch } from "wouter";
import { NavigationBar } from "./NavigationBar.tsx";
import { WouterTracker } from "@minianalytic/client";
function App() {
  return (
    <Router>
      <WouterTracker />
      <NavigationBar />
      <Switch>
        <Route path="/inbox">Inbox Page</Route>
        <Route path="/dashboard">Dashboard Page</Route>
        <Route path="/settings">Settings Page</Route>
        <Route path="/profile">Profile Page</Route>
        <Route path="/messages">Messages Page</Route>
        <Route path="/notifications">Notifications Page</Route>
        <Route path="/analytics">Analytics Page</Route>
        <Route path="/reports">Reports Page</Route>
        <Route path="/users">Users Page</Route>
        <Route path="/help">Help Page</Route>
        <Route path="/">Home Page</Route>
        <Route>404: No such page!</Route>
      </Switch>
    </Router>
  );
}

export default App;
