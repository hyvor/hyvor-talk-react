import { useEffect, useRef } from "react";

export function addScript(src: string, id: string) {
    var script = document.createElement('script')
    script.src = src
    script.id = id
  
    document.body.appendChild(script)
}
  
export function removeScript(id: string) {
    const script = document.getElementById(id)
    script?.parentElement?.removeChild(script)
}


export const useUpdateEffect: typeof useEffect = (effect, dependencies) => {
    const isInitialMount = useRef(true);
  
    useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        return effect();
      }
    }, dependencies);

}