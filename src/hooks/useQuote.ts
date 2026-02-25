
import { useState, useEffect } from "react"
import type { Quote } from "../App"
import { useQuery } from "@tanstack/react-query"

/* custom hook lädt eine Quote */
export function useQuoteSchlecht(qid: number) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error|null>(null)
  const [ quote, setQuote ] = useState<Quote|null>(null)
  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try {
        const response = await fetch("https://dummyjson.com/quotes/" 
            + encodeURIComponent(qid))
        const data = await response.json()
        setQuote(data as Quote)
      } catch (e) {
        setError(e as Error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [qid])
  return { quote, isLoading, error };
}

export function useQuote(qid: number) {
  return useQuery({
    queryKey: [ "quote", qid],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/quotes/" 
            + encodeURIComponent(qid))
        return await response.json() as Quote
    },
    placeholderData: prevData => prevData,
    staleTime: 60_000,  
  })
}
