import Page from '@provider/Page';
import Link from 'next/link';
import React from 'react';

export default function HomePage() {

  return (
    <Page>
      <div className='r-w'>
        <h1>Hello</h1>
        <div className="h-screen flex flex-col items-center justify-center gap-2">
          <Link href={'/about'} className='btn one' >Hover Me</Link>
        </div>
      </div>
    </Page>
  );
}
