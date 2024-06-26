import React from 'react';
import { Link } from 'react-router-dom';
import { companyName } from '../../../globalStore';

const MobileNavContent = ({ setMobileNavOpen, navOptions }) => {
  return (
      <div className='pl-[210px] bg-menu h-screen w-[400px] relative -left-[200px] pt-2'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-text-light tracking-wide font-bold text-2xl'>
            {companyName}
          </h2>
          {/* Division Line */}
          <div className='h-0.5 w-[93%] bg-white'/>
        </div>
        <div className=' mt-5 flex flex-col gap-2'>
          {navOptions.map((route, index) => (
            <div key={index} className='flex gap-2 items-center'>
              {route.icon}
              {route.path.startsWith('#') ? (
              <a href={route.path}
              onClick={() => setMobileNavOpen(false)}
                className='text-text-light'
              >
                 {route.title}
              </a>
            ) : (
              <Link to={route.path}
              onClick={() => setMobileNavOpen(false)}
                className='text-text-light'
              >
                 {route.title}
              </Link>
            )}
            </div>
          ))}
        </div>
      </div>
  );
};

export default MobileNavContent;
