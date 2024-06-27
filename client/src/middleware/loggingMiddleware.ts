import { NextRequest, NextResponse } from "next/server";

export function loggingMiddleware(req: NextRequest, res: NextResponse) {
  console.log(`Received ${req.method} request to ${req.url} at ${new Date()}`);
  return NextResponse.next();
}