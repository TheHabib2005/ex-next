
import Link from "next/link";
import { getData } from "..";
import Cards from "@/components/Cards";

export default async function Home() {
  const data = await getData();
  const users = await data.json()

  return (
    <div>
      <Link href={"/login"}>login</Link>
      {
        users?.map((user: any) => {
          return <p key={user.id}>{user.name}</p>
        })
      }
      hello  {process.env.NEXT_PUBLIC_BASE_API_URL}

      <Cards />



    </div>
  )
}
