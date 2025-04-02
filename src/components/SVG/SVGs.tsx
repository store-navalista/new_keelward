import React, { FC } from 'react'
import { SVGWrapper } from './SVGWrapper'

export type SVGProps = {
   className?: string
}

const Arrow: FC<SVGProps> = ({ className }) => {
   return (
      <SVGWrapper className={className}>
         <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 30 30'>
            <path
               d='M29,16.5c0.8-0.8,0.8-2.1,0-3L18.6,3.1c-0.8-0.8-2.1-0.8-3,0c-0.8,0.8-0.8,2.1,0,3l6.9,6.9h-20c-1.2,0-2.1,0.9-2.1,2.1
	s0.9,2.1,2.1,2.1h20L15.6,24c-0.8,0.8-0.8,2.1,0,3c0.8,0.8,2.1,0.8,3,0L29,16.5L29,16.5z'
            />
         </svg>
      </SVGWrapper>
   )
}

const Linkedin: FC<SVGProps> = ({ className }) => {
   return (
      <SVGWrapper className={className}>
         <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 40 40'>
            <g>
               <path d='M11,6.8C11,9.2,9.1,11,6.8,11c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2C9.1,2.7,11,4.6,11,6.8z' />
               <rect x='3.2' y='14.2' width='7.2' height='23.1' />
               <path
                  d='M37.4,24.6v12.7h-7.2V26.1c0-2.7-0.1-6.1-3.8-6.1c-3.7,0-4.3,2.9-4.3,6v11.4h-7.2V14.2h6.9v3.2h0.1
		c1-1.8,3.3-3.8,6.8-3.8C36,13.6,37.4,18.4,37.4,24.6z'
               />
            </g>
         </svg>
      </SVGWrapper>
   )
}

const Phone: FC<SVGProps> = ({ className }) => {
   return (
      <SVGWrapper className={className}>
         <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
         </svg>
      </SVGWrapper>
   )
}

const Mail: FC<SVGProps> = ({ className }) => {
   return (
      <SVGWrapper className={className}>
         <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z' />
         </svg>
      </SVGWrapper>
   )
}

export { Arrow, Linkedin, Phone, Mail }
