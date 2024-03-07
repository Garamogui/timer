import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <div className="w-full flex items-center justify-center gap-2 text-grey100 flex-wrap text-lg">
      <label htmlFor="">Vou trabalhar em...</label>
      <input
        disabled={!!activeCycle}
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        className="bg-transparent h-10 border-b-2 border-grey500 font-bold text-lg px-2 text-grey100 flex-1 w-[17rem] placeholder:text-grey500 focus:border-green500 duration-150"
        {...register('task')}
      />

      <label htmlFor="">durante</label>
      <input
        type="number"
        className="bg-transparent h-10 border-b-2 border-grey500 font-bold text-lg px-2 text-grey100 w-16"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </div>
  )
}
