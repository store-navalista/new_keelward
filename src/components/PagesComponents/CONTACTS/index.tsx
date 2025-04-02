import React from 'react'
import css from './index.module.css'

const contactsData = [
   {
      id: 1,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'John Doe',
      position: 'Software Engineer',
      email: 'john.doe@example.com',
      phone: '+123456789'
   },
   {
      id: 2,
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: 'James Smith',
      position: 'Product Manager',
      email: 'james.smith@example.com',
      phone: '+987654321'
   }
]

const ContactCard = ({ image, name, position, email, phone }) => {
   return (
      <div className={css.card}>
         <div className={css.imageWrapper}>
            <img src={image} alt={name} className={css.image} />
         </div>
         <div className={css.content}>
            <h3 className={css.name}>{name}</h3>
            <p className={css.position}>{position}</p>
            <p className={css.email}>{email}</p>
            <p className={css.phone}>{phone}</p>
         </div>
      </div>
   )
}

export default function Contacts() {
   return (
      <div className={css.contacts}>
         <div className={css.grid}>
            {contactsData.map((contact) => (
               <ContactCard key={contact.id} {...contact} />
            ))}
         </div>
      </div>
   )
}
