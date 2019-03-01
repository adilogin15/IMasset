import React from 'react';
import Navigation from './Navigation';
import tech from './tech.jpg';
import TableCard from './TableCard';

const RequestHelp=()=>{
  return (
      <div>
        <Navigation />
        <div className="helpwrapper">
            <img className="backImage" src={tech}  alt="hompagebackground"/>          
        </div>
        <div>
          <TableCard />
        </div>
      </div>
    );
}

export default RequestHelp;