import Masonry from '@/components/UI/Masonry/Masonry'
import ZoomBlock from '@/components/ZoomBlock.tsx/ZoomBlock'
import { PAGES_IDs } from '@/constants/pages'
import translate from '@/i18n/translate'
import { motion } from 'framer-motion'
import React, { FC, useCallback, useRef, useState } from 'react'
import css from './index.module.css'

export const Template: FC<{ page_ID: PAGES_IDs; type?: 'pictured' | 'heading' }> = ({ page_ID, type = 'pictured' }) => {
   const ref = useRef(null)

   const data = [
      { id: 1, image: `/assets/images/pages/${page_ID}/1.jpg`, height: 200 },
      { id: 2, image: `/assets/images/pages/${page_ID}/2.jpg`, height: 300 },
      { id: 3, image: `/assets/images/pages/${page_ID}/3.jpg`, height: 200 },
      { id: 4, image: `/assets/images/pages/${page_ID}/4.jpg`, height: 300 },
      { id: 5, image: `/assets/images/pages/${page_ID}/5.jpg`, height: 300 },
      { id: 6, image: `/assets/images/pages/${page_ID}/6.jpg`, height: 300 },
      { id: 7, image: `/assets/images/pages/${page_ID}/7.jpg`, height: 300 },
      { id: 8, image: `/assets/images/pages/${page_ID}/8.jpg`, height: 300 },
      { id: 9, image: `/assets/images/pages/${page_ID}/9.jpg`, height: 300 },
      { id: 10, image: `/assets/images/pages/${page_ID}/10.jpg`, height: 200 }
   ]

   const [zoomOptions, setZoomOptions] = useState({
      isZoom: false,
      url: ''
   })

   const zoomImage = useCallback((url: string) => {
      setZoomOptions({
         isZoom: true,
         url
      })
   }, [])

   return (
      <div className={css.template}>
         <div className={css.substrate} />
         <div className={css.content}>
            <motion.div
               ref={ref}
               initial={{ opacity: 0, x: -200 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.4, ease: 'easeOut' }}
               className={css.info}
            >
               <h1>{translate(`page-title-${page_ID}`)}</h1>
               {type === 'pictured' && (
                  <p>
                     <span>⮞</span>
                     {translate(`desc-${page_ID}`)}
                  </p>
               )}
            </motion.div>
            {type === 'pictured' && (
               <div className={css.works}>
                  <Masonry data={data} zoomHandler={zoomImage} />
               </div>
            )}
         </div>
         {type === 'pictured' && <div className={css.bottom_content}></div>}
         {zoomOptions.isZoom && (
            <ZoomBlock
               imageUrl={zoomOptions.url}
               onClose={() => {
                  setZoomOptions({ isZoom: false, url: '' })
               }}
            />
         )}
      </div>
   )
}
