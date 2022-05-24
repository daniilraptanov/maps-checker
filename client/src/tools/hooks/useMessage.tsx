import { useCallback } from "react"
import M from "materialize-css"
import { statusCodeColor } from "../../constants"


const useMessage = () => {
    return useCallback((message, code) => {
      if (message) {
        M.toast({html: message, classes: statusCodeColor[code]})
      }
    }, [])
}

export default useMessage