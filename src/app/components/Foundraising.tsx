'use client'

import React, { useEffect } from 'react'
import Matter from 'matter-js'

export default function Foundraising() {
  useEffect(() => {
    const engine = Matter.Engine.create()

    const render = Matter.Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 600,
        height: 650,
        wireframes: false,
      },
    })

    const ground = Matter.Bodies.rectangle(400, 660, 810, 20, {
      isStatic: true,
    })
    const leftWall = Matter.Bodies.rectangle(-7, 320, 10, 650, {
      isStatic: true,
    })
    const rightWall = Matter.Bodies.rectangle(630, 500, 60, 600, {
      isStatic: true,
    })
    const bones = Array.from({ length: 100 }, (_, i) =>
      Matter.Bodies.circle(Math.random() * 500, Math.random() * 40, 20, {
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

    Matter.World.add(engine.world, [ground, leftWall, rightWall, ...bones])
    Matter.Engine.run(engine)
    Matter.Render.run(render)

    return () => {
      Matter.Engine.clear(engine)
      Matter.Render.stop(render)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
    }
  }, [])

  return <div id="box-of-bones" />
}
