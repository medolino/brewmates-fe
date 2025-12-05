'use client'

import { createContext, useContext, useTransition, useMemo } from 'react'

type TransitionContextType = {
  isPending: boolean
  startTransition: React.TransitionStartFunction
}

export const TransitionContext = createContext<TransitionContextType>({
  isPending: false,
  startTransition: () => {}
})

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPending, startTransition] = useTransition()

  const value = useMemo(() => ({ isPending, startTransition }), [isPending])

  return <TransitionContext.Provider value={value}>{children}</TransitionContext.Provider>
}

export const useTransitionContext = () => {
  const context = useContext(TransitionContext)

  if (!context) {
    throw new Error('useTransition must be used within a TransitionProvider')
  }

  return context
}
