interface InfoProps{
  "info": string;
}

function H1(props: InfoProps){
  return (
    <h1>
      {props.info}
    </h1>
  )
}
function P(props: InfoProps){
  return (
    <p>
      {props.info}
    </p>
  )
}
function Button(props: InfoProps){
  return (
    <button>
      {props.info}
    </button>
  )
}

function App() {
  return (
    <div>    
      <div>
        <H1 info="DAE GALERA" />
      </div>
      <div>
        <Button info="CLICA AQUI" />
        <Button info="NAO VIAJA, CLICA AQUI" />
        <Button info="SAI FORA, CLICA AQUI EM MIM" />
    </div>
    <div>
        <P info="to esperando vc clica!!!" />
    </div>
  </div>
  )
}

export default App
