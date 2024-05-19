import React from 'react';

const Header = () => {
  return (
    <div className='bg-slate-200 w-screen h-10 overflow-x-hidden flex items-center justify-between'>
      <div className="font-bold ml-8">InterviewPrepHub</div>
      <div className="font-semibold">Home</div>
      <div className="font-semibold">Practice Interview</div>
      <div className="font-semibold">Interview Tips</div>
      <div className="font-semibold">Login</div>
      <div className="font-semibold mr-9">
        <button className="bg-blue-500 text-white py-1 px-3 rounded-full">Signup</button>
      </div>
    </div>
  );
}

export default Header;
