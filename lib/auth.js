/**
 * Auth wrapper stub (Placeholder Implementation)
 * This file abstracts the authentication provider (e.g., Clerk, NextAuth)
 * so that we can implement the real provider later without changing the API everywhere.
 */

export async function getSession(req) {
  // Return a mock session for now.
  // Change to `{ user: { id: "1", name: "Mock User" } }` to simulate a logged-in user.
  return { user: null };
}
