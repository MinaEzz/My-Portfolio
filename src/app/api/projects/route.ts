import "server-only";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Supabase Error:", error);
      return NextResponse.json(
        { status: "ERROR", message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json({
      status: "SUCCESS",
      data,
      message: "Projects fetched successfully",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "ERROR", message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      {
        status: "ERROR",
        message: "Something went wrong while fetching projects",
      },
      { status: 500 }
    );
  }
}
