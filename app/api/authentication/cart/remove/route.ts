import conncetToDb from "@/helpers/db/config/conncetToDB";
import User from "@/helpers/db/schema/User.schema";
import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";

conncetToDb();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("body", body);

    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId });

    let updateCart = [...user.cart];

    updateCart = updateCart.filter((item) => item.id !== body.id);
    user.cart = updateCart;

    await user.save();
    return NextResponse.json({
      success: true,
      mesaaage: "REMOVE CART successfully",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
