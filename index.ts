export const getData = async () => {
  let res = fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users`);
  return res;
};
