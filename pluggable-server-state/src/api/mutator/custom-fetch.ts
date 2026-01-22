export const customFetch = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  // Ensure baseUrl ends with a slash and url doesn't start with one
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const normalizedUrl = url.startsWith('/') ? url.slice(1) : url;

  const fullUrl = `${normalizedBaseUrl}${normalizedUrl}`;

  const response = await fetch(fullUrl, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return await response.json();
  }
  return await (response.text() as unknown as T);
};
