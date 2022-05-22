import BlogCard from "./components/BlogCard";
import HydrationCard from "./components/HydrationCard";
import Sidebar from "./components/Sidebar";
import TaskCard from "../tasks/components/TaskCard";

function Dashboard() {
  const userData=undefined;
  return (
    <div className="row h-100">
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 p-lg-5 ">
        <div className="container">
          <div className="row">
            <BlogCard />
            <TaskCard />
          </div>
          <div className="row">
            <HydrationCard hydrationCount={0}/>
          </div>
          
        </div>
      </main>
    </div>
  );
}
export default Dashboard;
