const API_BASE = "https://example.com/api"; 
// Replace with your real API base

export async function fetchBooksByCategory({ category, limit = 8, page = 1 }) {
  const url = new URL(`${API_BASE}/books`);
  url.searchParams.set("category", category);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("page", String(page));

  const res = await fetch(url.toString(), { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error("Failed to load books");

  return await res.json();
}
