import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// .render: Renderize um elemento React no DOM no fornecido containere retorne uma referência ao componente (ou retorne null para componentes sem estado ).

// O ponto de exclamação diz para a aplicação que o elemento vai existir
ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
