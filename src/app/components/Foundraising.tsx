'use client'

import React, { useEffect } from 'react'
import { Engine, Render, World, Bodies, Runner } from 'matter-js'

export default function Foundraising() {
  useEffect(() => {
    const engine = Engine.create()

    const render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 600,
        height: 650,
        wireframes: false,
      },
    })

    const ground = Bodies.rectangle(400, 660, 810, 20, {
      isStatic: true,
    })
    const leftWall = Bodies.rectangle(-7, 320, 10, 650, {
      isStatic: true,
    })
    const rightWall = Bodies.rectangle(630, 500, 60, 600, {
      isStatic: true,
    })
    const bones = Array.from({ length: 100 }, (_, i) =>
      Bodies.circle(Math.random() * 500, Math.random() * 40, 20, {
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

    World.add(engine.world, [ground, leftWall, rightWall, ...bones])
    Runner.run(engine)
    Render.run(render)

    return () => {
      Engine.clear(engine)
      Render.stop(render)
      render.canvas.remove()
      render.textures = {}
    }
  }, [])

  return <div id="box-of-bones" />
}
