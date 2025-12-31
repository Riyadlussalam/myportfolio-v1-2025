// "use client";

// import { useEffect, useRef } from "react";
// import Matter from "matter-js";

// export default function PhysicsLanyard() {
//   const sceneRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!sceneRef.current) return;

//     const {
//       Engine,
//       Render,
//       Runner,
//       World,
//       Bodies,
//       Constraint,
//       Mouse,
//       MouseConstraint,
//       Composite,
//     } = Matter;

//     // Engine
//     const engine = Engine.create();
//     engine.gravity.y = 1;

//     // Render
//     const render = Render.create({
//       element: sceneRef.current,
//       engine,
//       options: {
//         width: 300,
//         height: 400,
//         background: "transparent",
//         wireframes: false,
//       },
//     });

//     // Anchor
//     const anchor = Bodies.circle(150, 40, 5, {
//       isStatic: true,
//       render: { fillStyle: "#34d399" },
//     });

//     // Rope particles
//     const ropeLength = 8;
//     const rope: Matter.Body[] = [];
//     const constraints: Matter.Constraint[] = [];

//     let prev = anchor;

//     for (let i = 0; i < ropeLength; i++) {
//       const particle = Bodies.circle(150, 60 + i * 15, 4, {
//         frictionAir: 0.02,
//         render: { fillStyle: "#64748b" },
//       });

//       rope.push(particle);

//       constraints.push(
//         Constraint.create({
//           bodyA: prev,
//           bodyB: particle,
//           stiffness: 0.9,
//           length: 15,
//         })
//       );

//       prev = particle;
//     }

//     // Card
//     const card = Bodies.rectangle(150, 60 + ropeLength * 15 + 30, 120, 160, {
//       chamfer: { radius: 12 },
//       frictionAir: 0.03,
//       render: {
//         fillStyle: "#020617",
//         strokeStyle: "#334155",
//         lineWidth: 1,
//       },
//     });

//     constraints.push(
//       Constraint.create({
//         bodyA: prev,
//         bodyB: card,
//         stiffness: 0.9,
//         length: 10,
//       })
//     );

//     // Mouse interaction
//     const mouse = Mouse.create(render.canvas);
//     const mouseConstraint = MouseConstraint.create(engine, {
//       mouse,
//       constraint: {
//         stiffness: 0.2,
//         render: { visible: false },
//       },
//     });

//     World.add(engine.world, [
//       anchor,
//       ...rope,
//       card,
//       ...constraints,
//       mouseConstraint,
//     ]);

//     Render.run(render);
//     Runner.run(Runner.create(), engine);

//     return () => {
//       Render.stop(render);
//       World.clear(engine.world, false);
//       Engine.clear(engine);
//       render.canvas.remove();
//     };
//   }, []);

//   return (
//     <div className="fixed top-20 right-6 z-40">
//       <div
//         ref={sceneRef}
//         className="w-[300px] h-[400px] pointer-events-auto"
//       />
//     </div>
//   );
// }
