import React, { Suspense } from 'react'
const Home = React.lazy(() => import('./pages/Home'))
import Loading from './components/Loading'

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
    <div className='min-h-screen max-w-screen overflow-x-hidden bg-[#FAF7EB]'>
      <Home />
    </div>
    </Suspense>
  )
}

export default App