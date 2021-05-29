import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useKey } from 'react-use'
import { motion, useAnimation } from 'framer-motion'
import clsx from 'clsx'

const gradientsFrom = 'from-red-600 from-yellow-600 from-green-600 from-blue-600 from-indigo-600 from-purple-600 from-pink-600'.split(' ')
const gradientsVia = 'via-gray-600 via-red-600 via-yello-600 via-green-600 via-blue-600 via-indigo-600 via-purple-600 via-pink-600'.split(' ')
const gradientsTo = 'to-red-600 to-yellow-600 to-green-600 to-blue-600 to-indigo-600 to-purple-600 to-pink-600'.split(' ')
const sharedStyles = 'text-9xl bg-gradient-to-br overflow-clip bg-clip-text text-transparent'

function randomNumber(max = 6, min = 1) {
  return Math.random() * (max - min + 1) + min
}

export default function Home() {

  const controls = useAnimation()
  const [keyPressed, setKeyPressed] = useState()

  useKey(e => e.key, e => {
    e.preventDefault()

    let pressed
    pressed = (e.code === 'Space') ? 'Space' : e.key
    setKeyPressed(pressed)
  })

  useEffect(() => {

    controls.stop()
    controls.start({
      transition: 'spring',
      scale: [1, randomNumber(), randomNumber(5), 1],
    })

  }, [keyPressed])

  return (
    <div className="grid place-items-center min-h-screen font-black uppercase">

      <Head>
        <title>Press Any Key · Relájate y deja tu hijo presione todas las teclas</title>
        <meta name="description" content="Relájate y evita todo ese desastre cuando tu hijo, sobrino o mascota presionan todas las teclas." />
        <script async defer data-website-id="849faa38-4e24-4268-822a-7eb5894b3c2f" src="https://analytics.gomflo.dev/umami.js"></script>
      </Head>

      {keyPressed &&
        <motion.div
          animate={controls}
          className={clsx(sharedStyles, gradientsFrom[Math.floor(Math.random() * gradientsFrom.length)], gradientsTo[Math.floor(Math.random() * gradientsTo.length)], gradientsVia[Math.floor(Math.random() * gradientsVia.length)])}>{keyPressed}</motion.div>
      }

      {!keyPressed &&
        <div className={clsx(sharedStyles, gradientsFrom[Math.floor(Math.random() * gradientsFrom.length)], gradientsTo[Math.floor(Math.random() * gradientsTo.length)], gradientsVia[Math.floor(Math.random() * gradientsVia.length)])}>Press Any Key</div>
      }
    </div>
  )
}
