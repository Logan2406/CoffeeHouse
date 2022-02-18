
import NavBar from "./Components/Navbar"
import Footer from "./Components/Footer"
import MainContent from "./Components/MainContent"

const Home =() =>
{
    return (
        <div class="main">
            <NavBar/>
            <MainContent></MainContent>
            <Footer/>
        </div>
    )
}

export default Home;