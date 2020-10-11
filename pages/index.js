
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Layout } from 'antd';


const { Header, Content, Sider, Footer } = Layout;

export default function Page() {
  const [session, loading] = useSession()

  // return <>
  //   {!session && <>
  //     Not signed in <br />
  //     <button onClick={signIn}>Sign in</button>
  //   </>}
  //   {session && <>
  //     Signed in as {session.user.email} <br />
  //     <button onClick={signOut}>Sign out</button>
  //   </>}
  // </>

  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Footer>Footer</Footer>
      </Layout>

    </>
  )
}