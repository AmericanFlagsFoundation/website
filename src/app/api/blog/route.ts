import { NextRequest, NextResponse } from "next/server";
import { createPost } from "@/lib/posts";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, body: postBody, secret } = body;

    // Validate secret
    const authSecret = process.env.AUTH_SECRET;
    if (!authSecret || secret !== authSecret) {
      return NextResponse.json(
        { error: "Unauthorized: invalid secret" },
        { status: 401 }
      );
    }

    // Validate input
    if (!title || typeof title !== "string" || title.trim().length === 0) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    if (
      !postBody ||
      typeof postBody !== "string" ||
      postBody.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Body is required" },
        { status: 400 }
      );
    }

    const slug = createPost(title.trim(), postBody.trim());

    return NextResponse.json(
      {
        success: true,
        slug,
        message: `Post "${title}" created and published successfully.`,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
