// Debug wrapper for fetch requests
export async function debugFetch(url, options) {
  try {
    const res = await fetch(url, options);
    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await res.json();
    } else {
      const text = await res.text();
      throw new Error(`Non-JSON response: ${text}`);
    }
  } catch (err) {
    throw new Error(`Fetch error: ${err.message}`);
  }
}
