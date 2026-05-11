import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = "http://next.genzuni.website";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const page = searchParams.get("page") ?? "1";
    const limit = searchParams.get("limit") ?? "10";
    const sort = searchParams.get("sort") ?? "created_at";
    const order = searchParams.get("order") ?? "DESC";

    const house_id = searchParams.get("house_id");
    const user_id = searchParams.get("user_id");
    const rating = searchParams.get("rating");

    // فقط پارامترهای دارای مقدار ارسال می‌شوند
    const params = new URLSearchParams({
      page,
      limit,
      sort,
      order,
    });

    if (house_id && house_id.trim() !== "") {
      params.append("house_id", house_id);
    }
    if (user_id && user_id.trim() !== "") {
      params.append("user_id", user_id);
    }
    if (rating && rating.trim() !== "") {
      params.append("rating", rating);
    }

    const response = await axios.get(
      `${BASE_URL}/api/comments?${params.toString()}`,
    );

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Failed to fetch comments",
        error: error?.response?.data ?? error.message,
      },
      { status: error?.response?.status || 500 },
    );
  }
}
