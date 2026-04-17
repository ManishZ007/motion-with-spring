import { a, useSpring } from "@react-spring/three";
import { useState } from "react";

const Props = () => {
  //   let n = 0;
  const [move, setMove] = useState<boolean>(false);

  const handleClick = () => {
    setMove(!move);
  };

  const spring = useSpring({
    from: {
      color: "red",
      x: -2,
    },
    to: {
      color: "hotpink",
      x: 2,
    },

    // to: [
    //   { color: "yellow", x: 2 },
    //   { color: "cyan", y: 2 },
    //   { color: "greenyellow", x: -2 },
    //   { color: "blue", y: -2 },
    //   { color: "red", y: -2, x: -2 },
    // ],
    // loop: () => 3 > ++n, // should return a boolean value
    // delay: 1000,
    // reverse: move,
    pause: move,
    // reset: move,
    config: {
      //   duration: 5000, // if you want to see this bellow animation then remove the duration props
      mass: 20,
      tension: 750,
      clamp: false,
      friction: 85, // give the friction value higher then 26 if you want to increase the cube rotation the decrease the friction value
    },

    onStart: () => console.log("start"),
    onRest: () => console.log("reset"),
    onPause: () => console.log("pause"),
    onResume: () => console.log("resume"),
  });

  return (
    <>
      <a.mesh position-x={spring.x} rotation-y={spring.x} onClick={handleClick}>
        <boxGeometry />
        <a.meshBasicMaterial color={spring.color} />
      </a.mesh>
    </>
  );
};

export default Props;

// ─────────────────────────────────────
// 📘 COMPLETE EXPLANATION (END OF FILE)
// ─────────────────────────────────────
//
// 🎯 WHAT THIS COMPONENT DOES:
//
//   → Renders a 3D cube 📦
//   → Animates THREE things at once:
//        1. Position (left ↔ right)
//        2. Rotation (spinning effect 🔄)
//        3. Color (red → hotpink 🎨)
//
//   → Uses react-spring DECLARATIVE animation 📜
//   → Click on cube 🖱️ → pause / resume animation
//
// ─────────────────────────────────────
// 🧠 BIG IDEA (VERY IMPORTANT)
//
//   This example is about:
//   👉 "Describe animation, don’t control it manually"
//
//   You just say:
//
//     from → starting state
//     to   → ending state
//
//   And react-spring automatically handles:
//     ✔ smooth motion
//     ✔ timing
//     ✔ physics
//
//   💡 Think:
//     You define the journey, react-spring drives the car 🚗
//
// ─────────────────────────────────────
// ⚙️ STATE (useState)
//
//   const [move, setMove] = useState(false);
//
//   This is used ONLY to control pause/resume.
//
//   move = false → animation runs ▶️
//   move = true  → animation pauses ⏸️
//
//   handleClick():
//     → toggles this value
//     → controls animation behavior
//
//   pause: move
//     → This line connects state to animation
//
//     If move = true  → animation pauses
//     If move = false → animation resumes
//
//   💡 No need for complex logic — very clean control
//
// ─────────────────────────────────────
// 🌈 useSpring (MAIN ANIMATION LOGIC)
//
//   const spring = useSpring({ ... })
//
//   This hook creates animated values.
//   It returns an object called "spring".
//
//   ⚠️ IMPORTANT:
//     spring.x and spring.color are NOT normal values
//     → They are "animated values"
//
//   React-spring updates them smoothly over time ⏳
//
// ─────────────────────────────────────
// 🎬 from → to (CORE OF ANIMATION)
//
//   from: {
//     color: "red",
//     x: -2,
//   }
//
//   to: {
//     color: "hotpink",
//     x: 2,
//   }
//
//   Meaning:
//
//     Start:
//       position = -2 (left side ⬅️)
//       color    = red 🔴
//
//     End:
//       position = 2 (right side ➡️)
//       color    = hotpink 🌸
//
//   💡 React-spring automatically:
//     → moves -2 → 2 smoothly
//     → blends red → hotpink smoothly
//
// ─────────────────────────────────────
// 🔄 YOUR COMMENTED OPTIONS (IMPORTANT)
//
//   These are advanced features:
//
//   1. to: [ ... ]  (Array)
//      → Runs multiple animations in sequence 🎬
//      → Like a timeline (step-by-step)
//
//   2. loop: () => 3 > ++n
//      → Repeats animation 🔁
//      → Stops when condition becomes false
//
//   3. delay: 1000
//      → Waits 1 second before starting ⏱️
//
//   4. reverse: move
//      → Reverses direction based on state 🔄
//
//   5. reset: move
//      → Restarts animation from beginning ♻️
//
//   💡 These are powerful when building complex animations
//
// ─────────────────────────────────────
// ⚙️ PHYSICS CONFIG (VERY IMPORTANT)
//
//   config: {
//     mass: 20,
//     tension: 750,
//     friction: 85,
//     clamp: false,
//   }
//
//   This defines HOW animation feels (not just speed)
//
//   👉 mass (weight ⚖️)
//      → Higher = heavier = slower movement
//
//   👉 tension (spring strength 🧵)
//      → Higher = faster pull to target
//
//   👉 friction (resistance 🛑)
//      → Higher = smoother, less bounce
//      → Lower  = more bounce + more rotation 🌀
//
//   👉 clamp
//      → false = allows overshoot (natural bounce)
//      → true  = stops exactly at target (no bounce)
//
//   💡 Your note is correct:
//      Lower friction → more rotation effect
//
// ─────────────────────────────────────
// 🎬 EVENT CALLBACKS (DEBUG + CONTROL)
//
//   onStart  → when animation begins ▶️
//   onRest   → when animation ends ✅
//   onPause  → when paused ⏸️
//   onResume → when resumed ▶️
//
//   Useful for:
//     → Debugging
//     → Logging
//     → Triggering other logic
//
// ─────────────────────────────────────
// 🧱 HOW ANIMATION IS APPLIED TO 3D OBJECT
//
//   <a.mesh
//       position-x={spring.x}
//       rotation-y={spring.x}
//       onClick={handleClick}
//   >
//
//   👉 position-x={spring.x}
//      → Moves cube left ↔ right
//
//   👉 rotation-y={spring.x}
//      → Uses SAME value to rotate cube 🔄
//
//      💡 Smart trick:
//         One value → multiple effects
//
//   👉 onClick
//      → toggles pause/resume
//
//   <a.meshBasicMaterial color={spring.color} />
//
//   👉 color={spring.color}
//      → Smooth color transition 🎨
//
//   ⚠️ VERY IMPORTANT:
//
//     Use "a.mesh" and "a.meshBasicMaterial"
//
//     Without "a." ❌
//       → No animation will happen
//
//     With "a." ✅
//       → React-spring controls the values
//
// ─────────────────────────────────────
// 🔄 COMPLETE FLOW (STEP-BY-STEP)
//
//   1. Cube appears at:
//        x = -2 (left) ⬅️
//        color = red 🔴
//
//   2. Animation starts automatically ▶️
//
//   3. Moves toward:
//        x = 2 (right) ➡️
//        color = hotpink 🌸
//
//   4. While moving:
//        → cube also rotates 🔄
//
//   5. Click cube 🖱️
//        → animation pauses ⏸️
//
//   6. Click again 🖱️
//        → animation resumes ▶️
//
// ─────────────────────────────────────
// 💡 KEY LEARNING TAKEAWAYS:
//
//   ✔ Declarative animation = simple + powerful
//   ✔ One spring value can control multiple properties
//   ✔ Physics config defines "feel", not just speed
//   ✔ pause, reverse, loop → add interactivity
//   ✔ "a." wrapper is required for animation
//
// ─────────────────────────────────────
// 🔗 PRACTICE TOOL:
//
//   https://react-spring-visualizer.com/
//
//   💡 With the help of this:
//     → You can experiment with mass, tension, friction
//     → See real-time animation changes
//     → Build strong intuition about spring physics
//
//   👉 Highly recommended before tweaking config values
//
// ─────────────────────────────────────
