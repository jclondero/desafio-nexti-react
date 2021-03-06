import React, { Suspense, useMemo } from 'react'

function App() {
  const Component = useMemo(() => {
    return () => <p>Estrutura inicial</p>
  }, [])

  return (
    <Suspense fallback={() => <p>Carregando...</p>}>
      <Component />
    </Suspense>
  )
}

export default App
