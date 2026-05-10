import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";
import { BaseUrl } from "@/core/api/BaseUrl";

export async function GET() {
  const cookieStore = await cookies();
  console.log("ALL COOKIES:", cookieStore.getAll());

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    const response = await axios.get(`${BaseUrl}/api/bookings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { message: error.response?.data?.message || "Request failed" },
      { status: error.response?.status || 500 },
    );
  }
}
