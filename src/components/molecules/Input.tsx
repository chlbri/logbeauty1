import { Component } from 'solid-js';

type Props = {
  name: string;
  placeholder: string;
};

export const Input: Component<Props> = ({ name, placeholder }) => {
  return (
    <div class='relative'>
      <input
        type='text'
        name={name}
        required
        class='w-full pt-6 px-3 pb-3 bg-transparent border-none outline-none text-white focus:text-darkiss tracking-wider peer z-30 relative'
      />
      <label
        for={name}
        class='text-gray-600 pointer-events-none peer-valid:-translate-y-10  peer-valid:scale-75 peer-valid:origin-left peer-valid:text-green-300 absolute left-0 top-6 peer-focus:-translate-y-10  peer-focus:scale-75 
         peer-focus:origin-left peer-focus:text-accent tracking-wide duration-500'
      >
        {placeholder}
      </label>
      <i class='absolute left-0 bottom-0 w-full h-1 bg-accent rounded-md duration-500 pointer-events-none peer-focus:h-5/6' />
    </div>
  );
};
