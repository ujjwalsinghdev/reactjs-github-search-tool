import React, { useContext } from "react"
import { Info, User, Search, Navbar } from "../components"
import loadingImage from "../images/preloader.gif"
import { GithubContext } from "../context/context"

const Dashboard = () => {
  const { isLoading } = useContext(GithubContext)
  if (isLoading) {
    return (
      <main>
        {/* <Navbar></Navbar> */}
        <Search></Search>
        <img src={loadingImage} className="loading-img" alt="loading-img" />
      </main>
    )
  }
  return (
    <main>
      {/* <Navbar></Navbar> */}
      <Search></Search>
      <Info></Info>
      <User></User>
    </main>
  )
}

export default Dashboard
