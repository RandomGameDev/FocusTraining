'use client'

import { useState, useEffect } from "react";
import { useCustomHook } from "../hook/useCustomHook";

type Name = {
    first: string,
    middle: string,
    last: string
}

interface AdminProfile {
    name: Name;
    age: number;
    address: string;
}

interface MemberProfile {
    name: Name;
    age: number;
    address: string;
}

interface Props {
    styles: any;
}

export const Welcome: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const {handleClick, notUpdatingValue, costlyValue} = useCustomHook(3)
    const {styles} = props;
    const [version, setVersion] = useState(12);

    const increaseVersion = () => {
        setVersion(curVersion => ++curVersion)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setVersion(version + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [version])

    return (
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js {version}!</a>
            {version % 2 === 0 && version % 4 === 0 && (<button onClick={increaseVersion}>Change</button>)}
        </h1>
    )
}