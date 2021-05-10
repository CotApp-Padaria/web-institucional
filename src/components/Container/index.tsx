import Head from 'next/head'
import React, { ReactNode } from 'react'
import Copyright from '../Copyright'
import Header from '../Header'
import WhatsappButton from '../WhatsappButton'
  
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

        {
          hasFooter &&
          <div>
            {/* <Footer />   */}
            <Copyright />          
          </div>
        }              

        {hasWhatsappButton &&
          <WhatsappButton />      
        }

      </div>    
  )

export default Container
