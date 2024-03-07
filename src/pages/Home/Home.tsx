import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { CyclesContext } from '../../contexts/CyclesContext'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'

const newCycleValidationSchema = zod.object({
  task: zod.string().min(1, 'Nomeie a Tarefa.'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo deve ter pelo menos 5 minutos.')
    .max(60, 'O ciclo deve ter até uma hora.'),
})

type NewCycleFormData = Zod.infer<typeof newCycleValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm({
    resolver: zodResolver(newCycleValidationSchema), // o zod precisa saber qual é o "schema" de validação. esquema, no caso.
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitEnabled = !task

  return (
    <main className="flex flex-1 justify-center items-center h-full">
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        className="flex flex-col gap-16 items-center"
      >
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <button
            onClick={interruptCurrentCycle}
            className="flex gap-2 justify-center items-center p-4 w-full font-bold rounded-lg duration-150 bg-red500 text-grey100 enabled:hover:bg-ree700 disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
          >
            <HandPalm />
            Interromper
          </button>
        ) : (
          <button
            disabled={isSubmitEnabled}
            className="flex gap-2 justify-center items-center p-4 w-full font-bold rounded-lg duration-150 bg-green500 text-grey100 enabled:hover:bg-green700 disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
          >
            <Play />
            Começar
          </button>
        )}
      </form>
    </main>
  )
}
