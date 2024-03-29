import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [patient, setPatient] = useState({
    name: '',
    email: ''
  })
  const {name, email} = patient

  const [ok, setOk] = useState(false)
  const [error, setError] = useState(false)

  const handlerForm = (e) => {
    e.preventDefault()
    const validMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    if (name.length <= 5 || !validMail.test(email)) {
      setError(true)
      setOk(false)
    } else {
      setError(false)
      setOk(true)
    }
  }
  

  return (
    <div>
      <form onSubmit={handlerForm}>
        <label>Name</label>
        <input type="text" onBlur={(e) => setPatient({...patient, name: e.target.value})} />
        <label>Email</label>
        <input type="text" onBlur={(e) => setPatient({...patient, email: e.target.value})}/>
        <button>SEND</button>
      </form>
      {error && <h4>Please verify your info and try again</h4>}
      {ok && <h4>Thank you {name}!, we will contact you as soon as posible via email</h4>}
    </div>
  );
};

export default Form;
