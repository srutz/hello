import { useState, type ComponentProps, type ComponentPropsWithoutRef, type MouseEvent, type ReactNode } from "react"
import { cn } from "./util"

export default App



export function App() {
  const [cities, setCities] = useState<string[]>([])
  const handleClick = () => {
    setCities([ "london", "paris", "amsterdam" ])
  }

  return (
    <div className="w-screen h-screen bg-white flex 
        flex-col items-center" onClick={handleClick}>
      <Box className="text-green-600 shadow-sm font-bold" title="hello"
        >
          <H1 className="text-lg">Städte</H1>
          {cities.map((city) => (<div>{city}</div>))}
      </Box>
    </div>
  )
}

/* Komponente die von außen ansteuerbar ist */
function Box({ children, className, ...props }
  : 
  { children?: ReactNode} & ComponentProps<"input">) 
{
  return (
    <div className={cn(
        "bg-zinc-200 rounded-xl p-2 m-2 border border-zinc-400 shadow-xl",
        className)}
      {...props}
      >
        {children}
    </div>
  )
}

function H1({children, className, ...rest} 
  : { children: ReactNode} & ComponentProps<"h1">) {
  return (
    <h1 className={cn("text-4xl", className)} {...rest}>{children}</h1>
  )
}
