import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title} - Happy Toast`
    }, [title])
}

export default UseTitle 