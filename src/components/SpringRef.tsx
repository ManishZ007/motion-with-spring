import { a, useSpring, useSpringRef } from "@react-spring/three";

const SpringRefStudy = () => {
  //   const [cubeAnimation, api] = useSpring(() => ({
  //     from: {
  //       x: -2,
  //     },
  //   }));

  const springRef = useSpringRef();

  const spring = useSpring({
    ref: springRef,
    from: {
      x: -2,
    },
  });

  const handleClick = () => {
    springRef.start({
      to: {
        x: 2,
      },
      config: {
        duration: 5000,
      },
    });
  };

  const pointerOverHandler = () => {
    springRef.pause();
  };

  const pointerOutHandler = () => {
    springRef.resume();
  };

  return (
    <>
      <a.mesh
        onClick={handleClick}
        position-x={spring.x}
        onPointerOver={pointerOverHandler}
        onPointerOut={pointerOutHandler}
      >
        <boxGeometry />
        <meshBasicMaterial color={"red"} />
      </a.mesh>
    </>
  );
};

export default SpringRefStudy;

// ─────────────────────────────────────
// 📘 COMPLETE EXPLANATION (END OF FILE)
// ─────────────────────────────────────
//
// 🎯 WHAT THIS COMPONENT DOES:
//
//   → Renders a 3D cube 📦
//   → Cube starts at left (x = -2) ⬅️
//   → Click 🖱️ → moves to right (x = 2) ➡️
//   → Hover on cube 👆 → pauses animation ⏸️
//   → Move cursor away 🚪 → resumes animation ▶️
//
//   → Uses useSpringRef for animation control 🎮
//
// ─────────────────────────────────────
// 🧠 BIG IDEA (IMPORTANT)
//
//   This example shows:
//
//   👉 How to control animation OUTSIDE useSpring
//   👉 How to separate animation logic from control logic
//
//   Instead of getting "api" from useSpring,
//   we use a separate controller → useSpringRef()
//
//   💡 Think:
//     useSpring → defines animation 🎯
//     useSpringRef → controls animation 🎮
//
// ─────────────────────────────────────
// ⚙️ WHY NOT USE IMPERATIVE API DIRECTLY?
//
//   (Your commented code 👇)
//
//   const [spring, api] = useSpring(() => ({ ... }))
//
//   → This gives:
//       spring 🎯 (values)
//       api 🎮 (controller)
//
//   BUT:
//
//   ❌ Controller is tied to this one hook
//   ❌ Harder to manage multiple animations
//   ❌ Not clean for large-scale control
//
// ─────────────────────────────────────
// 🎮 useSpringRef (MAIN CONCEPT)
//
//   const springRef = useSpringRef();
//
//   → Creates a separate animation controller
//   → Works like a remote control 🎛️
//
//   💡 This controller can:
//     → start()
//     → pause()
//     → resume()
//     → stop()
//
//   And can control ANY spring linked to it
//
// ─────────────────────────────────────
// 🔗 CONNECTING SPRING WITH REF
//
//   const spring = useSpring({
//     ref: springRef,
//     from: { x: -2 },
//   });
//
//   👉 ref: springRef
//
//     → This connects the animation to the controller
//     → Now springRef controls this spring
//
//   ⚠️ Without this:
//     → springRef will NOT affect the animation
//
// ─────────────────────────────────────
// 🎬 handleClick (START ANIMATION)
//
//   const handleClick = () => {
//     springRef.start({
//       to: { x: 2 },
//       config: { duration: 5000 },
//     });
//   };
//
//   👉 springRef.start()
//
//     → Starts animation manually
//
//   👉 to: { x: 2 }
//     → Target position (right side ➡️)
//
//   👉 duration: 5000
//     → Animation takes 5 seconds ⏱️
//
//   💡 Unlike physics config,
//      duration gives fixed timing (less realistic)
//
// ─────────────────────────────────────
// 👆 POINTER EVENTS (INTERACTION)
//
//   onPointerOver → pause()
//   onPointerOut  → resume()
//
//   pointerOverHandler:
//     → springRef.pause()
//     → Stops animation immediately ⏸️
//
//   pointerOutHandler:
//     → springRef.resume()
//     → Continues from same position ▶️
//
//   💡 This creates interactive control:
//
//     Hover → freeze animation ❄️
//     Leave → continue movement 🚀
//
// ─────────────────────────────────────
// 🧱 SCENE STRUCTURE
//
//   <a.mesh
//       onClick={handleClick}
//       position-x={spring.x}
//       onPointerOver={pointerOverHandler}
//       onPointerOut={pointerOutHandler}
//   >
//
//   👉 position-x={spring.x}
//      → Moves cube left ↔ right
//
//   👉 onClick
//      → Starts animation
//
//   👉 pointer events
//      → Control pause/resume
//
//   <boxGeometry />
//     → Cube shape 📦
//
//   <meshBasicMaterial color={"red"} />
//     → Static color (not animated)
//
//   ⚠️ IMPORTANT:
//     → mesh is animated → so use `a.mesh`
//     → material is static → normal meshBasicMaterial is fine
//
// ─────────────────────────────────────
// 🔄 COMPLETE FLOW
//
//   1. Cube starts at x = -2 ⬅️
//
//   2. Click cube 🖱️
//        → animation starts ▶️
//
//   3. Cube moves slowly to x = 2 ➡️
//
//   4. Hover on cube 👆
//        → animation pauses ⏸️
//
//   5. Move cursor away 🚪
//        → animation resumes ▶️
//
// ─────────────────────────────────────
// ⚖️ useSpringRef vs Imperative API
// ─────────────────────────────────────
//
//   🔹 Imperative API (api from useSpring)
//
//     const [spring, api] = useSpring(...)
//
//     ✔ Simple to use
//     ✔ Good for small components
//     ✔ Quick event-based animations
//
//     ❌ Tightly coupled (logic + control together)
//     ❌ Hard to scale
//     ❌ Not ideal for multiple animations
//
//   ───────────────────────────────────
//
//   🔹 useSpringRef
//
//     const springRef = useSpringRef()
//
//     ✔ Clean separation (logic 🎯 + control 🎮)
//     ✔ Can control multiple springs
//     ✔ Better for complex interactions
//     ✔ Easier to manage in large apps
//
//     ❌ Slightly more setup
//
// ─────────────────────────────────────
// 🏆 WHICH ONE SHOULD YOU USE?
//
//   👉 Small Projects / Simple Animations:
//
//       ✔ Use Imperative API
//       → faster to write
//       → easier to understand
//
//   👉 Large Projects / Complex 3D Apps:
//
//       ✔ Use useSpringRef
//       → scalable
//       → better architecture
//       → cleaner control system
//
//   💡 FINAL THOUGHT:
//
//     Imperative API  = quick & simple 🔧
//     useSpringRef    = scalable & powerful 🏗️
//
//     If you're building serious 3D apps (like your project):
//     👉 useSpringRef is the better long-term choice 🚀
//
// ─────────────────────────────────────
// 🔗 PRACTICE TOOL:
//
//   https://react-spring-visualizer.com/
//
//   💡 With the help of this:
//     → You can understand animation timing & physics
//     → Experiment with duration vs spring config
//     → Build strong intuition for animations 🎯
//
// ─────────────────────────────────────
