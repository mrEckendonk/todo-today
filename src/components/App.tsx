import React from 'react'

interface AppProps {
  title: string
  href: string
}

const App: React.FC<AppProps> = ({ title, href }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <h1>
      Hello World from <a href={href}>{title}</a>
    </h1>
  </div>
)

export default App