import { NextResponse } from "next/server";
import axios from "axios";
import { BaseUrl } from "@/core/api/BaseUrl";
import { cookies } from "next/headers";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    const response = await axios.get(`${BaseUrl}/api/users/${params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { message: error.response?.data?.message || "Error fetching user" },
      { status: error.response?.status || 500 },
    );
  }
}
