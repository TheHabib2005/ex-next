export const getData = async () => {
  let res = fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify("habib"),
  });
  return res;
};
