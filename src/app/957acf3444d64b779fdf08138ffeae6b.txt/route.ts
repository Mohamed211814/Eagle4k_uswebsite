import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('957acf3444d64b779fdf08138ffeae6b', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
