import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Dashboard = props => {

    return(
<div>
    <button className='btn' onClick={props.dashboardstrike}>Strikes</button>
    <button className='btn' onClick={props.dashboardballs}>Balls</button>
    <button className='btn' onClick={props.dashboardfoul}>Foul</button>
    <button className='btn' onClick={props.dashboardhit}>Hit</button>
</div>
    )
}

export default Dashboard;