import { CardBody, CardContainer, CardItem } from '@components/3dCard'
import GridBackground from '@components/GridBackground'
import Page from '@provider/Page'
import { Home, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <Page>
            <div className='h-[100svh] flex flex-col relative items-center justify-center ' >
                <GridBackground />
                <CardContainer className="inter-var">
                    <CardBody className="bg-white dark:bg-black relative group/card shadow-xl  hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-4/5 md:w-96 h-auto p-6 border  ">
                        <Plus size={24} className='-top-3 -right-3 absolute' />
                        <Plus size={24} className='-top-3 -left-3 absolute' />
                        <Plus size={24} className='-bottom-3 -right-3 absolute' />
                        <Plus size={24} className='-bottom-3 -left-3 absolute' />
                        <CardItem translateZ="100" className="w-full mt-4 pointer-events-none">
                            <h3 className='text-5xl md:text-8xl'>404</h3>
                        </CardItem>
                        <CardItem
                            translateZ="50"
                            className="pointer-events-none text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            Lost in the Digital Bermuda Triangle
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="pointer-events-none mb-6 text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Oh no! It seems the page you're looking for has taken a vacation to the Digital Bermuda Triangle. Our team of tech wizards is summoning it back with some digital voodoo.
                        </CardItem>
                        <CardItem
                            translateZ={50}
                            as={Link}
                            href={"/"}
                            className="btn btn-sm font-normal dark:text-white border border-current"
                        >
                            <Home size={18} /> Go to Home →
                        </CardItem>

                    </CardBody>
                </CardContainer>
            </div>
        </Page >
    )
}

export default NotFound




