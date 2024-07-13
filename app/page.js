import LinkPreview from '@components/LinkPreview'
import Page from '@provider/Page'
import React from 'react'

const HomePage = () => {
  return (
    <Page>
      <div className='r-w'>
        <div className="h-[100svh]"></div>
        <LinkPreview
          imageSrc={"/LinkSrc.png"}
          url="https://uingle.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 g-t"
        >

          Uingle.com
        </LinkPreview>
        <div className="h-[100svh]"></div>
      </div>
    </Page>
  )
}

export default HomePage