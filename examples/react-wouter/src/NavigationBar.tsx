import { Link } from "wouter";

export function NavigationBar() {
  return (
    <nav style={{ display: "flex", gap: "12px", padding: "12px", borderBottom: "1px solid #ccc" }}>
      <Link href="/">Home</Link>
      <Link href="/inbox">Inbox</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/settings">Settings</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/messages">Messages</Link>
      <Link href="/notifications">Notifications</Link>
      <Link href="/analytics">Analytics</Link>
      <Link href="/reports">Reports</Link>
      <Link href="/users">Users</Link>
      <Link href="/help">Help</Link>
    </nav>
  );
}
