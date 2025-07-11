"use server";

export async function testApi(): Promise<string> {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/",
      { cache: "no-store" }
    );
    return await res.text();
  } catch (e: any) {
    return "エラー: " + (e?.message ?? "unknown");
  }
}
