import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';
import DarkSwitch from './components/DarkSwitch';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] dark:bg-[#090B17]">
      <Link to="/" className='flex '>
        <img src={logo} alt="logo" className="h-10 object-contain dark:bg-white" />
        <h1 className='font-bold items-center mx-4 text-3xl max-w-xl tracking-wide'>ICHITRAM</h1>
      </Link>
      <div className='flex space-x-2'>
        <DarkSwitch />
        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
      </div>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] dark:bg-[#090B17]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
