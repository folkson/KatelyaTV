import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(_request: NextRequest) {
  try {
    // 简单的测试 API
    return NextResponse.json({
      message: 'Admin config test endpoint',
      timestamp: new Date().toISOString(),
      runtime: 'edge'
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}