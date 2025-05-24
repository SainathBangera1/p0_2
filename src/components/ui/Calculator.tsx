'use client'
import React from 'react'
import { Button } from './button'
import { useState } from 'react'

const Calculator = () => {
  const [num, setNum] = useState('')
  const [on, setOn] = useState(false)
  const [op, setOp] = useState('')
  const clickNum = (n: String) => {
    if (on) {
      const numstr = num + n
      setNum(numstr)
    }
  }

  const calculate = () => {
    // const equation = num.split(op)
    if (op == 'x') {
      const repstr = num.replace(' x ', ' * ')
      const solution = eval(repstr)
      setNum(solution.toFixed(2))
    } else {
      const solution = eval(num)
      setNum(solution.toFixed(2))
    }
  }

  return (
    <div className='w-full max-w-[450px] h-full p-3'>
      {/* SCREEN */}
      <div
        className={`h-[100px] w-full border-[lightgrey] border-4 rounded-md ${
          on ? ' bg-[lightgreen]' : 'bg-[gray]'
        } text-5xl p-2`}
      >
        {on ? num : ''}
      </div>
      {/* KEYPADS */}

      <div className='w-full h-full flex flex-col justify-center items-center mt-2'>
        <div className='flex flex-row gap-2 w-[98%] p-1'>
          <Button
            onClick={() => clickNum('1')}
            className='bg-[#cbcbcb] p-4 text-2xl w-1/4 py-10'
          >
            1
          </Button>
          <Button
            onClick={() => clickNum('2')}
            className='bg-[#cbcbcb] p-4 text-2xl w-1/4 py-10'
          >
            2
          </Button>
          <Button
            onClick={() => clickNum('3')}
            className='bg-[#cbcbcb] p-4 text-2xl w-1/4 py-10'
          >
            3
          </Button>
          <Button
            onClick={() => (on ? setOn(false) : setOn(true))}
            className={`bg-[darkgreen] p-4 text-1.5xl w-1/4 py-10`}
          >
            ON/OFF
          </Button>
        </div>
        <div className='flex flex-row gap-2 w-[98%] p-1'>
          <Button
            onClick={() => clickNum('4')}
            className='bg-[#cbcbcb] p-4 text-2xl w-1/4 py-10'
          >
            4
          </Button>
          <Button
            onClick={() => clickNum('5')}
            className='bg-[#cbcbcb] p-4 text-2xl w-1/4 py-10'
          >
            5
          </Button>
          <Button
            onClick={() => clickNum('6')}
            className='bg-[#cbcbcb] p-4 text-2xl w-1/4 py-10'
          >
            6
          </Button>
          <Button
            onClick={() => setNum('')}
            className='bg-[red] p-4 text-2xl w-1/4 py-10'
          >
            C/A
          </Button>
        </div>
        <div className='flex flex-row gap-2 w-[98%] p-1'>
          <Button
            onClick={() => clickNum('7')}
            className='bg-[#cbcbcb] p-4 text-2xl w-1/4 py-10'
          >
            7
          </Button>
          <Button
            onClick={() => clickNum('8')}
            className='bg-[#cbcbcb] p-4 text-2xl w-1/4 py-10'
          >
            8
          </Button>
          <Button
            onClick={() => clickNum('9')}
            className='bg-[#cbcbcb] p-4 text-2xl w-1/4 py-10'
          >
            9
          </Button>
          <Button
            onClick={() => {
              setOp('-')
              clickNum(' - ')
            }}
            className='bg-[black] p-4 text-2xl w-1/4 py-10'
          >
            {' '}
            -{' '}
          </Button>
        </div>
        <div className='flex flex-row gap-2 w-[98%] p-1'>
          <Button
            onClick={() => {
              setOp('x')
              clickNum(' x ')
            }}
            className='bg-[darkviolet] p-4 text-2xl w-1/4 py-10'
          >
            x
          </Button>
          <Button
            onClick={() => clickNum('0')}
            className='bg-[#cbcbcb] p-4 text-2xl w-1/4 py-10'
          >
            0
          </Button>
          <Button
            onClick={() => {
              setOp('/')
              clickNum(' / ')
            }}
            className='bg-[darkblue] p-4 text-2xl w-1/4 py-10'
          >
            /
          </Button>
          <Button
            onClick={() => {
              setOp('+')
              clickNum(' + ')
            }}
            className='bg-[darkorange] p-4 text-2xl w-1/4 py-10'
          >
            {' '}
            +{' '}
          </Button>
        </div>
        <div className='flex flex-row gap-2 w-[98%] p-1'>
          <Button
            onClick={() => (on ? calculate() : '')}
            className='bg-[crimson] p-4 text-2xl w-1/2 py-10'
          >
            =
          </Button>
          <Button
            onClick={() => clickNum('.')}
            className='bg-[purple] p-4 text-2xl w-1/4 py-10'
          >
            .
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
