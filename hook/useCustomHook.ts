import { useRef, useState, useCallback, useMemo, useEffect } from "react";

export const useCustomHook = (defaultValue: number) => {

  const notUpdatingValue = useRef(defaultValue)
  const [update, setUpdate] = useState(0)

  const handleClick = useCallback(() => {
    notUpdatingValue.current++;
    console.log(notUpdatingValue.current)
  }, [])

  const costlyValue = useMemo(() => {
    console.log('value')
    return update * update
  }, [update])

  useEffect(() => {
    console.log(notUpdatingValue)
    // subscribe to api request
    // load assets
    // load threejs
    // load images

    return () => {
      // unsubscribe to network request
      // unload / destroy
    }
  }, [notUpdatingValue])

  return {
    update,
    setUpdate,
    notUpdatingValue,
    handleClick,
    costlyValue
  }
}