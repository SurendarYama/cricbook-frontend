export const registerUser = async (url, data) => {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await response.json();
  return resData;
};
