import { a, useSpring } from "@react-spring/three";

const ImperativeAPIExample = () => {
  const [spring, api] = useSpring(() => ({
    from: {
      x: 0,
    },
  }));

  const handleClick = () => {
    api.start({
      to: {
        x: spring.x.get() == 1 ? 0 : 1,
      },
    });
  };

  return (
    <a.mesh onClick={handleClick} position-x={spring.x}>
      <boxGeometry />
      <meshBasicMaterial color={"red"} />
    </a.mesh>
  );
};

export default ImperativeAPIExample;

// 🎯 ImperativeAPIExample Component
// ─────────────────────────────────────
// 📦 A 3D red box that moves left/right on click using
// react-spring's Imperative API for animation control.
//
// ─────────────────────────────────────
// 🤔 WHAT IS IMPERATIVE API?
// ─────────────────────────────────────
//
//   In react-spring there are TWO ways to control animations:
//
//   1. 📜 DECLARATIVE (normal way):
//      → You pass values directly as props and react-spring
//        automatically animates when those values change.
//      → Example: <animated.mesh position-x={someState} />
//      → The animation is driven by React state/re-renders.
//
//   2. 🎮 IMPERATIVE API (this example):
//      → You get a direct "api" object with methods like
//        api.start(), api.stop(), api.pause(), api.resume().
//      → You CALL these methods whenever you want — not driven
//        by React state at all.
//      → No re-renders needed. Direct control like a remote control.
//      → This is faster and more flexible for event-driven animations.
//
//   💡 Think of it like this:
//     Declarative = automatic lights 💡
//     Imperative  = a manual switch 🎛️
//
// ─────────────────────────────────────
// 📦 IMPORTS:
//
//   a (from @react-spring/three)
//     → Short alias for the `animated` namespace.
//     → Wraps Three.js/R3F elements so they can accept
//       spring-animated values as props.
//     → Example: <a.mesh> is the animated version of <mesh>.
//     → Without `a.` → ❌ no animation (static value).
//     → With `a.`    → ✅ smooth animated updates.
//
//   useSpring (from @react-spring/three)
//     → React hook that creates a spring animation.
//     → Returns:
//         spring 🎯 → animated values
//         api 🎮    → control methods (Imperative API)
//
// ─────────────────────────────────────
// ⚙️ useSpring SETUP:
//
//   const [spring, api] = useSpring(() => ({
//     from: {
//       x: 0,
//     },
//   }));
//
//   → Using a FUNCTION means:
//     "Don't auto-run animation, just give me control 🎮"
//
//   from: { x: 0 }
//     → 🟢 Starting position (center)
//
//   spring
//     → Contains animated values (not plain numbers ❗)
//     → spring.x.get() → 📖 read current value
//
//   api
//     → 🎮 Control center:
//         api.start()  → ▶️ start animation
//         api.stop()   → ⛔ stop
//         api.pause()  → ⏸️ pause
//         api.resume() → ▶️ resume
//         api.set()    → ⚡ instant jump
//
// ─────────────────────────────────────
// 🖱️ handleClick FUNCTION:
//
//   const handleClick = () => {
//     api.start({
//       to: {
//         x: spring.x.get() == 1 ? 0 : 1,
//       },
//     });
//   };
//
//   WHY handleClick?
//     → Trigger animation on click 🖱️
//     → No React state needed 🚫
//
//   api.start({ to: { ... } })
//     → ▶️ Starts animation toward target
//
//   WHY `to`?
//     → Standard pattern:
//         from → start
//         to   → 🎯 target
//
//   🔁 Toggle Logic:
//
//     spring.x.get()
//       → 📖 current value
//
//     == 1 ? 0 : 1
//       → 1 → 0 (⬅️ move left)
//       → 0 → 1 (➡️ move right)
//
//   ⚠️ Why == instead of ===?
//     → Floating point values (like 1.0000001)
//     → == is more forgiving here
//
// ─────────────────────────────────────
// 🧱 SCENE STRUCTURE:
//
//   <a.mesh onClick={handleClick} position-x={spring.x}>
//
//     a.mesh
//       → 🎬 Animated mesh (required)
//       → Without it → ❌ no animation updates
//
//     onClick={handleClick}
//       → 🖱️ triggers animation
//
//     position-x={spring.x}
//       → 🔗 binds animation to position
//
//     <boxGeometry />
//       → 📦 Cube shape
//
//     <meshBasicMaterial color={"red"} />
//       → 🎨 Red color (no lighting)
//
// ─────────────────────────────────────
// 🔄 FULL INTERACTION FLOW:
//
//   1. Scene loads → box at X=0 🟢
//
//   2. Click → handleClick fires 🖱️
//
//   3. spring.x = 0 → target = 1 ➡️
//
//   4. api.start → animation begins ▶️
//
//   5. Box moves smoothly (no re-renders 🚀)
//
//   6. Reaches X=1 ✅
//
//   7. Click again → target = 0 ⬅️
//
//   8. Moves back smoothly 🔁
//
//   9. Repeats forever ♻️
//
// ─────────────────────────────────────
// ⚖️ IMPERATIVE vs DECLARATIVE:
//
//   📜 Use DECLARATIVE when:
//     → State-driven animations
//     → Simple UI transitions
//
//   🎮 Use IMPERATIVE when:
//     → Event-based animations (click, scroll)
//     → Need current values (get())
//     → Complex control (pause/resume)
//     → 🚀 Performance matters (no re-renders)
//     → 🎮 Interactive 3D scenes
