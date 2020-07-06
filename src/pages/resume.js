import React from "react"

// components
import Layout from "../components/layout"
import Content from "../components/content-div"

// images
import ResumePDF from "../images/sean-welsh-brown-software-engineer-resume.pdf"


export default function Resume() {
  return (
    <Layout>

      <Content>

        <object data={ResumePDF} type="application/pdf" aria-label="Sean Welsh Brown Software Engineering Resume" style={{ height: `75vh`, width: `100%` }}></object>
        
      </Content>

    </Layout>
  )
}
