import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '../../../contexts/CyclesContext'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleaAsFinieshed,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}: ${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleaAsFinieshed()
          /*                     setCycles(
                        cycles.map((cycle) => {
                            if (cycle.id === activeCycleId) {
                                return {
                                ...cycle,
                                    finishedDate: new Date()
                                }
                            }
                            return cycle
                        }
                    ));
*/
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycleId,
    totalSeconds,
    markCurrentCycleaAsFinieshed,
    activeCycle,
    setSecondsPassed,
  ])

  return (
    <div className="font-robotoMono text-[10rem] text-grey100 leading-[8rem] flex gap-4 ">
      <span className="px-4 py-8 bg-grey700">{minutes[0]}</span>
      <span className="px-4 py-8 bg-grey700">{minutes[1]}</span>
      <div className="flex overflow-hidden justify-center py-8 w-16 text-green500">
        :
      </div>
      <span className="px-4 py-8 bg-grey700">{seconds[0]}</span>
      <span className="px-4 py-8 bg-grey700">{seconds[1]}</span>
    </div>
  )
}
