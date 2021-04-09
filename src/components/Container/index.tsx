import React, { Fragment, ReactNode } from 'react'
import Head from 'next/head'
import Footer from '../Footer'
import Copyright from '../Copyright'
import WhatsappButton from '../WhatsappButton'
import Header from '../Header'
  
type Props = {
  children?: ReactNode
  title?: string
  hasFooter?: boolean
  hasWhatsappButton?: boolean
}

const Container = (
  { 
    children, 
    title = 'CotApp - O seu lugar de cotar' ,
    hasFooter = true,
    hasWhatsappButton = true
  }: Props) => (
    
      <div>
        
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Header></Header>

        {children}

        {/* {hasFooter && 
          <Footer />      
        }
        
        <Copyright/> */}

        {hasWhatsappButton &&
          <WhatsappButton />      
        }

      </div>    
  )

export default Container
