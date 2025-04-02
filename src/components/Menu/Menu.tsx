import translate from '@/i18n/translate'
import { motion, useCycle } from 'framer-motion'
import css from './Menu.module.css'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import _ from 'lodash'
import React, { useState } from 'react'

const variants = {
   open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
   },
   closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
   }
}

export const Menu: React.FC = () => {
   const [isOpen, toggleOpen] = useState(false)

   return (
      <>
         <MenuToggle toggle={toggleOpen} />
         {/* <motion.nav className={css.wrapper} animate={isOpen ? 'open' : 'closed'}> */}
         {isOpen && <Navigation />}
         {/* </motion.nav> */}
      </>
   )
}
// <motion.ul style={{ display: isOpen ? 'block' : 'none' }} variants={variants}>
//    <LanguageSwitcher
//       style={{ '--opacity': isOpen ? 1 : 0 } as React.CSSProperties}
//       className={css.lang}
//       filter={['EN', 'RU']}
//       type='mobile'
//    />
//    <h2 style={{ '--opacity': isOpen ? 1 : 0 } as React.CSSProperties} className={css.title}>
//       {translate('dashboard.nav-title')}
//    </h2>
//    {mutateNav.map((i, inx) => (
//       <MenuItem i={i} key={inx} />
//    ))}
// </motion.ul>
