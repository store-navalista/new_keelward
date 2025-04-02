import { MENU, PATHS } from '@/constants/pages'
import translate from '@/i18n/translate'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { ActivePoint, isCurrentPage } from '../Header/components/helpers'
import css from './Menu.module.css'
import GearButton from '../Header/components/GearButton'

export const handleLinkColor = (condition: boolean) => {
   return { color: condition ? 'var(--color-red)' : '#1d1d1d' }
}

export const Navigation: React.FC = () => {
   const currentPage = isCurrentPage()

   return (
      <nav className={css.wrapper}>
         <Image src='/assets/images/svg/logo-full.svg' width={60} height={60} alt='logo' style={{ margin: '0 auto' }} />
         <ul>
            {MENU.map((opt) => {
               const [id] = Object.keys(opt)
               const [value] = Object.values(opt)
               const isCurrentPage = id === currentPage

               return !Array.isArray(value) ? (
                  <li key={id}>
                     <ActivePoint condition={isCurrentPage} />
                     <Link style={handleLinkColor(isCurrentPage)} href={PATHS[id].href}>
                        {translate(`page-title-${id}`)}
                     </Link>
                  </li>
               ) : (
                  <div className={css.options}>
                     <GearButton className={css.gear_button} isOpen={false}>
                        {translate(`section-title-${id}`)}
                     </GearButton>
                     <ul>
                        {value.map((id) => {
                           const isCurrentPage = id === currentPage

                           return (
                              <li key={id}>
                                 <ActivePoint condition={isCurrentPage} />
                                 <Link style={handleLinkColor(isCurrentPage)} href={PATHS[id].href}>
                                    {translate(`page-title-${id}`)}
                                 </Link>
                              </li>
                           )
                        })}
                     </ul>
                  </div>
               )
            })}
         </ul>
      </nav>
   )
}
