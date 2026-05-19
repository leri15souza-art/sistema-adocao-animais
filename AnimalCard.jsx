import React from 'react'
function AnimalCard({ nome, idade, descricao }) {

return (

<div className="col-md-4 mb-4">

<div className="card shadow h-100">

<div className="card-body">

<h5 className="card-title">
{nome}
</h5>

<p className="card-text">
<strong>Idade:</strong> {idade}
</p>

<p className="card-text">
{descricao}
</p>

<button className="btn btn-success">
Quero Adotar
</button>

</div>
</div>
</div>

)
}

export default AnimalCard