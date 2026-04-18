# @minianalytic/client

Lightweight analytics client for tracking page views.

## Installation

```bash
pnpm add @minianalytic/client
```

Peer dependencies: `react`, `wouter`

## Setup

Set the collector endpoint in your environment:

```env
VITE_TRACKER_API_URL=http://localhost:9765/collect/v0
```

## Usage with Wouter

Add `<WouterTracker />` inside your `<Router>`. It automatically tracks page views on every route change.

```tsx
import { Router, Route, Switch } from "wouter";
import { WouterTracker } from "@minianalytic/client";

function App() {
  return (
    <Router>
      <WouterTracker />
      <Switch>
        <Route path="/">Home</Route>
        <Route path="/about">About</Route>
        <Route>404</Route>
      </Switch>
    </Router>
  );
}
```

## Manual Tracking

Use the `event` function to track events directly:

```ts
import { event } from "@minianalytic/client";

event({ type: "enter", page: "/signup" });
event({ type: "page_load", page: "/dashboard", user: "user-123" });
```

### Event Types

| Field  | Type                       | Required | Description         |
| ------ | -------------------------- | -------- | ------------------- |
| `type` | `"page_load"` \| `"enter"` | yes      | Event type          |
| `page` | `string`                   | yes      | Page path           |
| `user` | `string`                   | no       | Optional user identifier |