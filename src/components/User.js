import React, { useContext } from "react"
import { GithubContext } from "../context/context"
import styled from "styled-components"
import Card from "./Card"
import Followers from "./Followers"
const User = () => {
  const { followers } = useContext(GithubContext)
  console.log(followers)

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Card></Card>
        {followers.length > 0 && <Followers></Followers>}
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`

export default User
