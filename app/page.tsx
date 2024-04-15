import { getData } from "..";

export default async function Home() {
  const data = await getData();
  const users = await data.json()

  return (
    <div>
      {
        users?.map((user: any) => {
          return <p key={user.id}>{user.name}</p>
        })
      }
      hello  {process.env.NEXT_PUBLIC_BASE_API_URL}
    </div>
  )
}
