// ユーザー情報を取得するAPIルート
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username') || 'jack';

  const twitterRes = await fetch(`https://api.twitter.com/2/users/by/username/${username}`, {
    headers: {
      Authorization: `Bearer ${process.env.X_BEARER_TOKEN}`,
    },
  });

  const data = await twitterRes.json();

  return NextResponse.json(data, { status: twitterRes.status });
}
