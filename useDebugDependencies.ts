import { useRef } from 'react'

export const useDebugDependencies = (deps: Record<string, unknown>) => {
  const prevDeps = useRef(deps)
  const diffKeys = Object.keys(deps).filter(
    (key) => deps[key] !== prevDeps.current[key],
  )

  if (diffKeys.length > 0) {
    console.log('Dependencies changed', diffKeys)
    prevDeps.current = deps
  }
}
