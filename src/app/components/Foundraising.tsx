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

export default function Foundraising() {
  const matterContainer = useRef<HTMLDivElement>(null)
  const [percentage, setPercentage] = useState<number>(7)

  const maxBodies = 260
  const currentBodies = Math.floor((percentage / 100) * maxBodies)

  useEffect(() => {
    const engine = Engine.create()
    engine.gravity.y = 0.4

    const render = Render.create({
      element: matterContainer.current!,
      engine: engine,
      options: {
        width: 600,
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
    const rightWall = Bodies.rectangle(630, 320, 60, 650, {
      isStatic: true,
      render: {
        fillStyle: 'transparent',
      },
    })
    const porcentageBox = Bodies.circle(300, 300, 45, {
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
  }, [percentage, currentBodies])

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex items-center text-5xl absolute mb-12 text-yellow-300 italic">
        {percentage}
        <span className="text-sm">%</span>
      </div>
      <div
        id="box-of-bones"
        className="bg-gray-100 rounded-sm shadow-md"
        ref={matterContainer}
      />
    </div>
  )
}
