import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <>
      <h1>Header</h1>

      <div>
        <Outlet />
      </div>
    </>
  )
}
