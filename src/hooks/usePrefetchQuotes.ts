import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import type { Quote } from "../App";


export function usePrefetchQuotes(maxId: number) {
  const queryClient = useQueryClient();
  useEffect(() => {
    for (let id = 1; id <= maxId; id++) {
      queryClient.prefetchQuery({
        queryKey: ["quote", id],
        queryFn: async() => {
                const response = await fetch("https://dummyjson.com/quotes/" 
              + encodeURIComponent(id))
          return await response.json() as Quote
        }
      })
    }
  }, [queryClient])
}