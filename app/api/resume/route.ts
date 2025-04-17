import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Get the absolute path to the PDF file
    const filePath = path.join(process.cwd(), 'public', 'resume.pdf');
    
    // Read the file
    const fileBuffer = fs.readFileSync(filePath);
    
    // Return the file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse('Error serving PDF', { status: 500 });
  }
} 