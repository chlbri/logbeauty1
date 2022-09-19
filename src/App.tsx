import type { Component } from 'solid-js';
import { Input } from './components';

const App: Component = () => {
  return (
    <div class='relative w-[500px] rounded-xl h-[553px] bg-darkbox overflow-hidden before:content-[""] before:absolute before:-top-1/2 before:-left-1/2 before:w-full before:h-full before:bg-linear before:animate-spin-slow before:origin-bottom-right after:content-[""] before:overflow-hidden after:overflow-hidden after:absolute after:-top-1/2 after:-left-1/2 after:w-full after:h-full after:bg-linear after:animate-spin-slow after:origin-bottom-right after:[animation-delay:-6s] [-webkit-mask-image:-webkit-radial-gradient(circle, white, black)] z-10 after:opacity-60 before:opacity-60'>
      <form class='z-20 bg-form inset-1.5 absolute rounded-xl px-16 py-14 flex flex-col'>
        <h2 class='text-accent text-3xl font-medium tracking-wide mb-10'>
          Sign in
        </h2>
        <div class='flex flex-col space-y-7 w-full'>
          <Input name='login' placeholder='Username' />
          <Input name='password' placeholder='Password' />
        </div>
        <div class='flex justify-between my-6 text-sm text-gray-600 decoration-0 w-full '>
          <a href='#' class='hover:text-accent'>
            Forgot password
          </a>
          <a href='#' class='hover:text-accent'>
            Sign Up
          </a>
        </div>
        <input
          type='submit'
          value='Login'
          class='outline-none border-none bg-accent px-6 py-4 rounded-md cursor-pointer font-semibold mt-24 text-xl active:opacity-90 active:scale-95 transition ease-out'
        />
      </form>
    </div>
  );
};

export default App;
