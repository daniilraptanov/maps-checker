import { useCallback } from "react"
import M from "materialize-css"

const useMessage = () => {
    return useCallback((message) => {
      if (message) {
        M.toast({html: message, classes: "blue"})
      }
    }, [])
}

export default useMessage