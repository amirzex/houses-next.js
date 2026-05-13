import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { BaseUrl } from "@/core/api/BaseUrl";

interface TokenPayload {
  id: number;
}

export async function GET() {
  try {
    const token = cookies().get("accessToken")?.value;

    if (!token) {
      return NextResponse.json({ message: "No token" }, { status: 401 });
    }

    const decoded = jwtDecode<TokenPayload>(token);

    const response = await axios.get(`${BaseUrl}/api/users/${decoded.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      { message: error?.response?.data || "Error fetching user" },
      { status: error?.response?.status || 500 },
    );
  }
}
