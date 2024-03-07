import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="max-w-[74rem] h-[calc(100vh-10rem)] m-[5rem_auto] font-bold p-10 bg-grey800 rounded-[8px] flex flex-col">
      <Header />
      <Outlet />
    </div>
  )
}
