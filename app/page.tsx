'use client'
import Image from 'next/image'
import { listenerCount } from 'process'
import { useCallback, useEffect, useMemo, useState, useRef } from 'react'
import { useCustomHook } from '../hook/useCustomHook'
import { useTodoState } from '../hook/useTodoState'
import styles from './page.module.css'
import { Welcome } from './Welcome'

export default function Home() {
  const {handleClick, notUpdatingValue, costlyValue} = useCustomHook(2)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={handleClick}>Update {notUpdatingValue.current}</button>
        <Welcome styles={styles} />


        {costlyValue}
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>app/page.tsx</code>
        </p>
    {costlyValue}
        <div className={styles.grid}>
          <a href="https://beta.nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js 13</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
          {costlyValue}
            <h2>Deploy &rarr;</h2>
            <p>Deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
