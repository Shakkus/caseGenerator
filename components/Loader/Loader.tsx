import { Skeleton } from "@/components/ui/skeleton"

const Loader = () => {
  return (
    <div className="flex flex-col justify-around items-center">
        <h2 className="text-4xl m-5 text-white">Generando caso . . .</h2>
        <Skeleton className="h-50 w-50 rounded-full bg-red-500 m-5"/>
    </div>
  )
}

export default Loader