import Cards from "@/Components/Dashboard/Cards";
import CommonPlan from "@/Components/Dashboard/CommonPlan";
import Fresh from "@/Components/Dashboard/Fresh";
import MainDashboard from "@/Components/Dashboard/MainDashboard";
import MainName from "@/Components/Dashboard/MainName";
import Nav from "@/Components/Dashboard/Nav";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import SidebarDashboard from "@/Component/Sidebar/SidebarDashboard";


const MyDashboard=()=> {
    return (
        <div >
              <Header />
              <Nav name="/ My Dashboard"/>
              <div className="mydashboard">
                  <MainDashboard />
                  <div className="details">
                    <MainName name="My Dashboard"/>
                    <CommonPlan />
                    <Fresh />
                    <Cards />
                  </div>
              </div>
              <Footer />
        </div>
    );
}

export default MyDashboard;