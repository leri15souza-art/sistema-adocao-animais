import React from 'react'
function FormContato() {

return (

<div className="mt-5">

<h2>Contato</h2>

<form>

<div className="mb-3">

<label className="form-label">
Nome
</label>

<input
type="text"
className="form-control"
/>

</div>

<div className="mb-3">

<label className="form-label">
Email
</label>

<input
type="email"
className="form-control"
/>

</div>

<div className="mb-3">

<label className="form-label">
Mensagem
</label>

<textarea
className="form-control"
rows="4">
</textarea>

</div>

<button className="btn btn-primary">
Enviar
</button>

</form>

</div>

)
}

export default FormContato