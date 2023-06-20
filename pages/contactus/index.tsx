import RegisterHeader from '@/components/molecules/RegisterHeader'
import RegisterTemplate from '@/components/templates/RegisterTemplate'
import React from 'react'

type Props = {}

const ContactUs = (props: Props) => {
  return (
    <RegisterTemplate head='Contact Us' backgroundImg='bg-contactus' backgroundText="The community is" backgroundTextColor="Refreshing">
      <RegisterHeader title="How can we help you?" paragraph=''/>
    </RegisterTemplate>
  )
}

export default ContactUs