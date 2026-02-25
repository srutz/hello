import { useState } from "react"
import { useQuote } from "./hooks/useQuote"
import { usePrefetchQuotes } from "./hooks/usePrefetchQuotes"


export default App

export type Quote = { id: number, author: string, quote: string }


// www.meineseite.de/quotes?id=1
// www.meineseite.de/quotes/1/details
// www.meineseite.de/#/quotes/1/details

/*
 * React SSR Frameworks:
 * Next.js
 * Tanstack Start
 * React Router 7 im Framework-Mode (früher Remix)
 */


export function App() {
  const [ qid, setQid] = useState(3)
  const { data: quote, isLoading, error } = useQuote(qid)
  usePrefetchQuotes(50)
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
