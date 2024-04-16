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
    const isProductInCart = user.cart.find((cart: any) => cart.id === body.id);
    if (isProductInCart) {
      let updateCart = [...user.cart];

      updateCart = updateCart.map((item) => {
        if (item.id === body.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
      });
      user.cart = [];

      await user.save();
      return NextResponse.json({
        success: true,
        mesaaage: "quantity update successfully",
        data: user,
      });
    } else {
      user.cart.push(body);
      await user.save();
      return NextResponse.json({
        success: true,
        mesaaage: "product added successfully",
        data: user,
      });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
