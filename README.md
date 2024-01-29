# useDebugDependencies
Repo with util to debug dependencies in React

# How to use

export const SomeComponent = (props) => {
  useDebugDependencies(props) // Logs what keys have changed on every render cycle
  return <div>This is a test</div>
}
