import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Listusers from './Listusers';
import Createuser from './Createuser';
import Createstudent from './Createstudent';
import Liststudents from './Liststudents';

function Dashboard() {
    return (
        <div className='container'>
        <form className='main_card'>
    <div className='card'>       
        <h1 className='dash_header'><b>Welcome to Dashboard</b></h1><br/>
         <h3 className='sub_title'>CRUD WITH STUDENT & TEACHER MANAGEMENT</h3>
        <h2 className='all_list'> 
             <Link  className ="all_user" to="/Createuser" element={<Createuser />}>Create teacher</Link> &nbsp;
             <Link  className ="all_user"to="/Listusers" element={<Listusers />}>View teacher</Link> &nbsp;
             <Link className ="all_user" to="/Createstudent" element={<Createstudent />}>Create Student</Link> &nbsp;
             <Link  className ="all_user"to="/Liststudents" element={<Liststudents />}>View Students</Link>
        </h2>
    </div>
    </form>
    </div>
    );
} 

export default Dashboard;