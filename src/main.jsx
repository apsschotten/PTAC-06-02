import { useState } from "react";

export default function Main() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState(0);
  const [listaCtts, setListaCtts] = useState([]);

  const registrar = (event) => {
    event.preventDefault();
    alert("Pronto!");
    setListaCtts([...listaCtts,
    {
      nomeSalvo: nome,
      telefoneSalvo: telefone
    }
    ])
  };
  console.table(listaCtts);

  return (
    <main>
      <form action="" onSubmit={registrar}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          name=""
          id=""
          onChange={(event) => setNome(event.target.value)}
        />
        {nome}
        <br></br>
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          name=""
          id=""
          onChange={(event) => (event.target.value)} />
        <button>Salvar</button>
      </form>
    </main>
  )
}
