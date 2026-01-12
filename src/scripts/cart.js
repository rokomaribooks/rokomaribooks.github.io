const CART_API = "https://example.com/api/cart";

export async function addToCart(bookId, qty = 1) {
  const res = await fetch(CART_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ bookId, qty })
  });

  if (!res.ok) throw new Error("Add to cart failed");
  return await res.json();
}
