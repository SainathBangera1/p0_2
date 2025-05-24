import Calculator from '@/components/ui/Calculator'

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <h1 className='font-extrabold mt-5'> Simple Calculator</h1>
      <Calculator />
    </div>
  )
}
