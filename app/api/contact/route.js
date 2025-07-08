import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function POST(request) {
  const { email, name, message } = await request.json();

  if (!email || !email.includes("@") || !name?.trim() || !message?.trim()) {
    return NextResponse.json({ message: "Invalid input" }, { status: 422 });
  }

  const newMessage = { email, name, message };
  let client;
  try {
    client = await MongoClient.connect(process.env.DATABASE_URL);
  } catch (error) {
    return NextResponse.json(
      { message: "Could not connect to database" },
      { status: 500 }
    );
  }

  const db = client.db();
  try {
    const result = await db.collection("messages").insertOne(newMessage);

    newMessage._id = result.insertedId;
  } catch (error) {
    client.close();
    return NextResponse.json(
      { message: "Storing message failed" },
      { status: 500 }
    );
  }

  client.close();
  return NextResponse.json(
    { message: "Successfully stored message", data: newMessage },
    { status: 201 }
  );
}
