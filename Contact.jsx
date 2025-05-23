import React from 'react';

function Contact() {
  return (
    <div class="p-4 mx-auto max-w-xl bg-white">
      <h1 class="text-2xl text-slate-900 font-semibold text-center">Contact us</h1>
      <form class="mt-8 space-y-5">
      <div>
      <label class='text-sm text-slate-800 font-medium mb-2 block'>Name</label>
        <input type='text' placeholder='Enter Name'
          class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all" />
        </div>
        <div>
            <label class='text-sm text-slate-800 font-medium mb-2 block'>Email</label>
        <input type='email' placeholder='Enter Email'
          class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all" />
        </div>
        <div>
            <label class='text-sm text-slate-800 font-medium mb-2 block'>Subject</label>
        <input type='text' placeholder='Enter Subject'
          class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all" />
        </div>
        <div>
            <label class='text-sm text-slate-800 font-medium mb-2 block'>Message</label>
        <textarea placeholder='Enter Message' rows="4"
          class="w-full px-4 text-slate-800 bg-gray-100 border focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-none transition-all"></textarea>
        </div>
        <button type='button'
          class="!mt-8 text-white bg-slate-900 hover:bg-slate-800 tracking-wide text-[15px] px-4 py-2 w-full outline-none">Send</button>
      </form>
    </div>
  );
}

export default Contact;
