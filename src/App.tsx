import { useEffect, useState, type ComponentProps, type ComponentPropsWithoutRef, type MouseEvent, type ReactNode } from "react"
import { useQuote } from "./hooks/useQuote"
import { useQueryClient } from "@tanstack/react-query"


export default App

async function delay(delay: ms) {
  return new Promise(resolve => setTimeout(resolve, delay))
}

export type Quote = { id: number, author: string, quote: string }



export function App() {
  const [ qid, setQid] = useState(3)
  const { data: quote, isLoading, error } = useQuote(qid)

  const queryClient = useQueryClient();
  useEffect(() => {
    for (let id = 1; id < 30; id++) {
      queryClient.prefetchQuery({
        queryKey: ["quote", id],
        queryFn: async() => {
                const response = await fetch("https://dummyjson.com/quotes/" 
              + encodeURIComponent(id))
          return await response.json() as Quote
        }
      })
    }
  }, [])

  return (
    <div className="p-3">
      <button onClick={() => setQid(qid - 1)}>Prev</button>
      <button onClick={() => setQid(qid + 1)}>Next</button>
      {error && <div>{error?.toString()}</div>}
      {isLoading && <div>Loading</div>}
      {quote && !isLoading && <QuoteView quote={quote} />}
    </div>
  )
}

function QuoteView({ quote }: { quote: Quote }) {
  return (
    <div className="flex flex-col gap-1 bg-zinc-200 p-2 shadow-xl">
      <div>{quote.quote}</div>
      <div>{quote.author}</div>
    </div>
  )
}
