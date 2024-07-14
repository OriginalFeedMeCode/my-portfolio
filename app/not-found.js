import { CardBody, CardContainer, CardItem } from '@components/3dCard'
import GridBackground from '@components/GridBackground'
import Page from '@provider/Page'
import { Home, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <Page>
            <div className='relative h-[100svh] flex flex-col items-center justify-center ' >
                <GridBackground />
                <CardContainer>
                    <CardBody>
                        <div className='p-4 relative border backdrop-blur shadow-2xl border-gray-200 dark:border-gray-800 w-4/5 mx-auto md:max-w-4/5 md:w-96'>
                            <Plus size={24} className='-top-3 -right-3 absolute' />
                            <Plus size={24} className='-top-3 -left-3 absolute' />
                            <Plus size={24} className='-bottom-3 -right-3 absolute' />
                            <Plus size={24} className='-bottom-3 -left-3 absolute' />

                            <CardItem rotateX={40} rotateY={-10}>
                                <h2 className='text-4xl md:text-8xl'>404</h2>
                            </CardItem>
                            <p className='text-xl mb-2'>Lost in the Digital Bermuda Triangle</p>
                            <p className='text-xs mb-4'>Oh no! It seems the page you're looking for has taken a vacation to the Digital Bermuda Triangle. Our team of tech wizards is summoning it back with some digital voodoo.</p>
                            <Link href={"/"} className='btn btn-sm'><Home size={18} /> Got to homepage</Link>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
        </Page>
    )
}

export default NotFound