export const getUserById = async (url) => {
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
