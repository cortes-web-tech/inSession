import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageWIP from '../components/PageWIP';
function Dashboard() {
    return <div className="pageLayout">
    <Nav/>
    <div className="content">  
      <h1>Dashboard</h1>
      <PageWIP />
    </div>
    <Footer/>  
  </div>;
}

export default Dashboard