
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Layout } from 'antd';


const { Header, Content, Sider, Footer } = Layout;

export default function Page() {

  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Footer>Footer</Footer>
      </Layout>

    </>
  )
}