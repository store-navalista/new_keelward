import React, { CSSProperties, FC } from 'react'
import Image from 'next/image'
import css from '../Header.module.css'

const Logo: FC<{ scrollStep: number }> = ({ scrollStep }) => {
   const logoHeight = scrollStep > 0 ? '50px' : '80px'

   return (
      <>
         <div className={css.logo} style={{ '--logo-height': logoHeight } as CSSProperties}>
            <Image src='/assets/images/svg/logo.svg' alt='logo' fill />
         </div>
      </>
   )
}

export default Logo
