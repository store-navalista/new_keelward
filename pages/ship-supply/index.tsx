import { Template } from '@/components/PagesComponents/Template'
import Seo from '@/components/seo'
import { data_collector } from '@/services/data_collector'
import { GetServerSideProps, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'
import css from '/styles/MDX.module.css'

const page_ID = 'S_SUPPLY'

const ShipSupply: NextPage = ({ seo, content }: any) => {
   return (
      <>
         <Seo {...seo} />
         <Template page_ID={page_ID} />
         <div className={css.mdx}>
            <MDXRemote {...content} />
         </div>
      </>
   )
}

export default ShipSupply

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
   const collection = await data_collector(page_ID, locale, serialize)
   const data = {
      seo: collection?.seo || {},
      content: collection?.content || {},
      locale
   }

   return {
      props: { ...data }
   }
}
