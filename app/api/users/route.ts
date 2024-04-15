import { NextResponse } from "next/server";
export const GET = async () => {
  try {
    return NextResponse.json([
      {
        id: 1,
        name: "habib1",
      },
      {
        id: 2,
        name: "habib2",
      },
      {
        id: 3,
        name: "habib3",
      },
    ]);
  } catch (error) {}
};
