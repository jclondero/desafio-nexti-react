import React, { lazy, Suspense, useContext, useMemo } from 'react'

import { AuthContext } from './providers/auth'

const Auth = lazy(() => import('./pages/Auth'))

function App() {
  const { userLogged } = useContext(AuthContext)

  const Component = useMemo(() => {
    if (!userLogged) {
      return Auth
    }

    return () => <p>Bem vindo ao sistema</p>
  }, [userLogged])

  return (
    <Suspense fallback={() => <p>Carregando...</p>}>
      <Component />
    </Suspense>
  )
}

export default App
