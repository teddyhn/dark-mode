import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = key => {
    const [value, setValue] = useLocalStorage(key);

    useEffect((value) => {
        if (value) {
            document.body.classList.add('dark-mode')
        } else document.body.classList.remove('dark-mode')
    }, [value])

    return [value, setValue];
}