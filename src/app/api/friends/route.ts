import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { findUserByEmail, findUserById } from "@/lib/user-lookup";
import { getFriends, addFriend, removeFriend } from "@/lib/quiz-battle-store";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const friendIds = await getFriends(session.user.id);
  const friends = (
    await Promise.all(friendIds.map((id) => findUserById(id)))
  ).filter(Boolean);

  return NextResponse.json({ friends });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const email = body.email as string | undefined;
  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const friend = await findUserByEmail(email);
  if (!friend) {
    return NextResponse.json({ error: "No student found with that email" }, { status: 404 });
  }

  try {
    await addFriend(session.user.id, friend.id);
    return NextResponse.json({ friend });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "";
    if (msg === "SELF") return NextResponse.json({ error: "You cannot add yourself" }, { status: 400 });
    if (msg === "ALREADY_FRIENDS") return NextResponse.json({ error: "Already friends" }, { status: 400 });
    throw e;
  }
}

export async function DELETE(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const friendId = searchParams.get("friendId");
  if (!friendId) {
    return NextResponse.json({ error: "friendId required" }, { status: 400 });
  }

  await removeFriend(session.user.id, friendId);
  return NextResponse.json({ ok: true });
}
