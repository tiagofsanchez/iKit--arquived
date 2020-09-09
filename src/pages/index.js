/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"

export default function Home() {
  return (  
     <Layout withHero={true}>
       <div sx={{variant: `layout.main`}}>This is my main!!</div>
     </Layout>
  )
}
