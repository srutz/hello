import { useState } from "react"
import { useQuote } from "./hooks/useQuote"
import { usePrefetchQuotes } from "./hooks/usePrefetchQuotes"
import { useNavigate, useNavigation, useParams } from "react-router"


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
  const params = useParams();
  const navigate = useNavigate();
  let qid = Number(params.id ?? "1");
  if (isNaN(qid)) { qid = 1 }

  const { data: quote, isLoading, error } = useQuote(qid)
  usePrefetchQuotes(10)
  const prevQuote = () => { navigate("/quote/" + (qid - 1)) }
  const nextQuote = () => { navigate("/quote/" + (qid + 1)) }
  return (
    <div className="p-3 flex flex-col items-center">
      <div className="flex gap-1">
        <button onClick={prevQuote}>Prev</button>
        <button onClick={nextQuote}>Next</button>
      </div>        
      {error && <div>{error?.toString()}</div>}
      {isLoading && <div>Loading</div>}
      {quote && !isLoading && <QuoteView quote={quote} />}
    </div>
  )
}

function QuoteView({ quote }: { quote: Quote }) {
  return (
    <div className="self-stretch flex flex-col gap-1 bg-zinc-100 p-2 shadow-xl min-h-32 justify-between">
      <div >{quote.quote}</div>
      <div className="self-end text-sm">{quote.author}</div>
    </div>
  )
}
