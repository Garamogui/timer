import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useContext } from 'react'
import { CyclesContext } from '../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <main className="flex flex-col flex-1 p-14">
      <h1 className="text-lg text-grey100">Meu histórico</h1>

      <div className="overflow-auto flex-auto mt-8">
        <table className="w-full border-collapse min-w-[600px]  ">
          <thead>
            <tr>
              <th className="bg-grey600 p-4 text-left text-grey100 text-sm leading-[1.6] rounded-tl-[8px] pl-6">
                Tarefa
              </th>
              <th className="bg-grey600 p-4 text-left text-grey100 text-sm leading-[1.6]">
                Duração
              </th>
              <th className="bg-grey600 p-4 text-left text-grey100 text-sm leading-[1.6]">
                Início
              </th>
              <th className="bg-grey600 p-4 text-left text-grey100 text-sm leading-[1.6] rounded-tr-[8px] pr-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td className="bg-grey700 border-t-4 border-grey800 p-5 text-sm leading-[1.6] w-[50%]">
                    {cycle.task}
                  </td>
                  <td className="bg-grey700 border-t-4 border-grey800 p-5 text-sm leading-[1.6]">
                    {cycle.minutesAmount}
                  </td>
                  <td className="bg-grey700 border-t-4 border-grey800 p-5 text-sm leading-[1.6]">
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td className="bg-grey700 border-t-4 border-grey800 p-5 text-sm leading-[1.6]">
                    {cycle.finishedDate && <Status status="Concluído" />}
                    {cycle.interruptedDate && <Status status="Interrompido" />}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status status="Em Andamento" />
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}

interface StatusProps {
  status: 'Em Andamento' | 'Concluído' | 'Interrompido'
}

export const Status = ({ status }: StatusProps) => {
  const statusColor = (): string => {
    return status === 'Em Andamento'
      ? 'text-yellow500'
      : status === 'Concluído'
        ? 'text-green500'
        : 'text-red500'
  }

  return (
    <div className="">
      <span className={`mr-2 ${statusColor()}`}>◉</span>
      <span>{status}</span>
    </div>
  )
}
