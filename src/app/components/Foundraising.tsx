'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  Engine,
  Render,
  World,
  Bodies,
  Runner,
  Events,
  Composite,
  Body,
} from 'matter-js'

type FoundraisingProps = {
  goal: number
  now: number
}

export default function Foundraising({ goal, now }: FoundraisingProps) {
  const matterContainer = useRef<HTMLDivElement>(null)
  const [canvasWidth, setCanvasWidth] = useState<number>(600)
  const [percentage, setPercentage] = useState<number>(7)

  const maxBodies = 260
  const currentBodies = Math.floor((percentage / 100) * maxBodies)

  useEffect(() => {
    let goalPercentage = Math.round((now / goal) * 100)
    if (goalPercentage > 99) {
      goalPercentage = 98
    } else if (goalPercentage < 1) {
      goalPercentage = 1
    }
    setPercentage(goalPercentage)

    const engine = Engine.create()
    engine.gravity.y = 0.4

    const render = Render.create({
      element: matterContainer.current!,
      engine: engine,
      options: {
        width: canvasWidth, //600,
        height: 650,
        wireframes: false,
        background: 'transparent',
      },
    })

    const ground = Bodies.rectangle(400, 660, 810, 20, {
      isStatic: true,
      render: {
        fillStyle: 'transparent',
      },
    })
    const leftWall = Bodies.rectangle(-7, 320, 10, 650, {
      isStatic: true,
    })
    const rightWall = Bodies.rectangle(canvasWidth + 30, 320, 60, 650, {
      isStatic: true,
      render: {
        fillStyle: 'transparent',
      },
    })
    const porcentageBox = Bodies.circle(canvasWidth / 2, 300, 45, {
      isStatic: true,
      label: 'percentageBox',
      render: {
        fillStyle: 'black',
      },
    })
    const bones = Array.from({ length: currentBodies }, (_, i) =>
      Bodies.circle(Math.random() * 400, Math.random() * 40, 20, {
        render: {
          sprite: {
            texture: './paw.png',
            xScale: 0.2,
            yScale: 0.2,
          },
        },
        restitution: 0.8,
      })
    )

    World.add(engine.world, [
      ground,
      leftWall,
      rightWall,
      porcentageBox,
      ...bones,
    ])
    Runner.run(engine)
    Render.run(render)

    Events.on(engine, 'beforeUpdate', () => {
      const percentageBox = Composite.allBodies(engine.world).find(
        body => body.label === 'percentageBox'
      )

      if (percentageBox) {
        Body.set(percentageBox, 'label', percentage.toString())
      }
    })

    return () => {
      Engine.clear(engine)
      Render.stop(render)
      render.canvas.remove()
      render.textures = {}
    }
  }, [percentage, currentBodies, canvasWidth, goal, now])

  useEffect(() => {
    const handleResize = () => {
      const newCanvasWidth = matterContainer.current?.clientWidth || 600
      setCanvasWidth(newCanvasWidth)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex items-center text-5xl absolute mb-12 text-yellow-300 italic">
        {percentage}
        <span className="text-sm space-x-0">%</span>
      </div>
      <div
        id="box-of-bones"
        ref={matterContainer}
        className="bg-gray-100 w-full md:w-auto rounded-sm shadow-md"
      />
    </div>
  )
}
