'use client';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>{`<- Return Home`}</Link>
    </div>
  );
}
