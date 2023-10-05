import Layout from "../layout/layout";

export default function Home() {
    return (
      <>
      <Layout page="Home">
         <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="bg-blue-500">
  This is my Home
  </div>
  
  </Layout>
      </>
    )
  }