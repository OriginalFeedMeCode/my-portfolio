import Character from '@components/TextOnScroll/Character'
import Page from '@provider/Page'
import React from 'react'

const HomePage = () => {
  const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  return (
    <Page>
      <div className='r-w'>
        <div className="h-[100svh]"></div>
        <Character paragraph={paragraph} className={"text-2xl md:text-5xl"} />
        <div className="h-[100svh]"></div>
      </div>
    </Page>
  )
}

export default HomePage