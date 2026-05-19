import React, { useState } from 'react'
import Navbar from './components/Navbar'
import AnimalCard from './components/AnimalCard'
import FormContato from './components/FormContato'

function App() {

const [animais] = useState([
{
id:1,
nome:'Luna',
idade:'2 anos',
descricao:'Muito dócil e brincalhona.'
},
{
id:2,
nome:'Thor',
idade:'1 ano',
descricao:'Cheio de energia e muito amigável.'
},
{
id:3,
nome:'Mimi',
idade:'3 anos',
descricao:'Calma, carinhosa e ama colo.'
}
])

return (
<>
<Navbar />

<div className="container mt-4">

<h1 className="titulo">
Sistema Web para Adoção de Animais
</h1>

<p className="subtitulo">
Conectando ONGs, protetores independentes e adotantes.
</p>

<div className="row">

{animais.map((animal) => (

<AnimalCard
key={animal.id}
nome={animal.nome}
idade={animal.idade}
descricao={animal.descricao}
/>

))}

</div>

<FormContato />

</div>
</>
)
}

export default App