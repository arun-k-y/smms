import React from 'react';

import { ToastContainer, toast } from 'react-toastify';


function ToastComponent(){
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer/>
    </div>
  );
}

export default ToastComponent;