# 🎯 motion-with-spring

> Mastering **react-spring** — physics-based animations for modern 3D web applications ⚛️✨

---

## 📖 About

**motion-with-spring** is a hands-on learning repository focused on mastering **react-spring** and animation techniques used in modern web development.

This repo is not just about using a library — it's about understanding how animations work, how to apply them in real projects, and how to improve user experience with smooth, natural motion 🚀.

Each study is a small, focused experiment where one concept is explored from scratch, with detailed inline documentation explaining every decision made.

---

## 🧠 What You'll Learn

- ✅ Basics of react-spring with `useSpring`
- ✅ Physics-driven animations (mass, tension, friction)
- ✅ Declarative vs Imperative API
- ✅ `useSpringRef` for external animation control
- ✅ `useSprings` for animating multiple objects
- ✅ `useTrail` for chained/staggered animations
- ✅ Animating 3D objects using React Three Fiber
- ✅ Real-world animation patterns and best practices

---

## 🏷️ Learning by Versions (Tags)

This repository follows a **version-based learning approach** 📦

Each concept is released as a **Git tag**, so you can easily track progress step by step.

| Tag | File | Concept |
|---|---|---|
| `v1.0.0` | `SimpleStart.tsx` | Basic useSpring — scale + color animation |
| `v1.0.1` | `ImperativeAPI.tsx` | Imperative API — event-driven control |
| `v1.2.0` | `Props.tsx` | Spring props — physics config, pause, reverse, loop |
| `v1.3.0` | `SpringRef.tsx` | useSpringRef — external animation controller |
| `v1.4.0 -> 1.4.1` | `Springs.tsx` | useSprings — multiple object animations |
| `v1.5.0` | `Trail.tsx` | useTrail — chained stagger animations |

```bash
# Jump to any version
git checkout v1.0.0
```

---

## 📁 Project Structure
motion-with-spring/
├── src/
│   ├── components/
│   │   ├── SimpleStart.tsx          # Study 01 — Basic useSpring
│   │   ├── ImperativeAPI.tsx        # Study 02 — Imperative API
│   │   ├── Props.tsx                # Study 03 — Spring props & physics config
│   │   ├── SpringRef.tsx            # Study 04 — useSpringRef
│   │   ├── Springs.tsx              # Study 05 — useSprings (multiple objects)
│   │   └── Trail.tsx                # Study 06 — useTrail (stagger/chain)
│   ├── Scene.tsx                    # Main scene — switch between studies here
│   ├── App.tsx                      # Canvas setup
│   └── main.tsx
└── README.md

---

## ⚙️ Tech Stack

| Tool | Purpose |
|---|---|
| [React](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Three.js](https://threejs.org/) | 3D engine under the hood |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | React renderer for Three.js |
| [@react-three/drei](https://drei.pmnd.rs/) | Helpers (OrbitControls, Text, etc.) |
| [@react-spring/three](https://www.react-spring.dev/) | Physics-based animations |
| [Vite](https://vitejs.dev/) | Fast dev server & bundler |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/ManishZ007/motion-with-spring.git
cd motion-with-spring

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open `http://localhost:5173` and explore each study from `Scene.tsx`.

---

## 📚 Studies Index

| # | Hook | Concept | File | Status |
|---|---|---|---|---|
| 01 | `useSpring` | Basic spring animation — scale + color toggle | `SimpleStart.tsx` | ✅ Done |
| 02 | `useSpring` + Imperative API | Event-driven animation control via `api.start()` | `ImperativeAPI.tsx` | ✅ Done |
| 03 | `useSpring` + Props | Physics config, pause, reverse, loop, callbacks | `Props.tsx` | ✅ Done |
| 04 | `useSpringRef` | External ref-based animation controller | `SpringRef.tsx` | ✅ Done |
| 05 | `useSprings` | Multiple objects animated together | `Springs.tsx` | ✅ Done |
| 06 | `useTrail` | Chained stagger animations (one-by-one) | `Trail.tsx` | ✅ Done |

---

## 🔍 Study 01 — Basic useSpring (`SimpleStart.tsx`)

The first study covers the **core idea of react-spring** — creating smooth, physics-based animations by describing what values should animate from and to.

### 💡 Key Concept

```tsx
const { scale, color } = useSpring({
  from: { scale: 1, color: "orange" },
  scale: click ? 2 : 1,        // shorthand for `to`
  color: click ? "hotpink" : "orange",
});
```

- `from` → starting values of the animation
- The shorthand target values (without `to`) work for simple cases
- `scale` and `color` are **SpringValues**, not plain numbers — they update every frame

### ⚠️ The `a.` Rule

```tsx
// ❌ Won't animate — plain Three.js mesh
<mesh scale={scale}>

// ✅ Will animate — react-spring animated mesh
<a.mesh scale={scale}>
```

You must wrap components with `a.` (short for `animated`) so react-spring can update their values every frame. Applies to both `a.mesh` and `a.meshBasicMaterial`.

### 🔄 Flow

1. Box renders at scale=1, color=orange
2. User clicks → state toggles
3. `useSpring` detects the change → animation runs automatically
4. Box smoothly scales to 2 and transitions color to hotpink
5. Click again → smoothly returns

---

## 🔍 Study 02 — Imperative API (`ImperativeAPI.tsx`)

This study covers the **Imperative API** — controlling animations manually via `api.start()` instead of letting React state drive them.

### 💡 Declarative vs Imperative

| | Declarative | Imperative |
|---|---|---|
| Driven by | React state / re-renders | `api.start()` method calls |
| Best for | Simple state-based transitions | Event-driven, complex, interactive |
| Re-renders | Yes | No — direct frame-level updates |
| Feel | Auto-managed | Full manual control |

### ⚙️ Setup

```tsx
// Passing a function → tells react-spring to use Imperative mode
const [spring, api] = useSpring(() => ({
  from: { x: 0 },
}));
```

### 🎮 api.start — Toggle Animation

```tsx
api.start({
  to: {
    x: spring.x.get() == 1 ? 0 : 1,  // toggle between 0 and 1
  },
});
```

- `spring.x.get()` → reads the current animated value directly (no state needed)
- `to` → defines the target value to animate toward
- Available methods: `api.start()`, `api.stop()`, `api.pause()`, `api.resume()`, `api.set()`

### 🔄 Flow

1. Box starts at X=0
2. Click → `api.start()` → box slides right to X=1
3. Click again → `api.start()` → box slides back to X=0
4. No React re-renders during animation — pure frame-level updates 🚀

---

## 🔍 Study 03 — Props & Physics Config (`Props.tsx`)

This study covers **all the important props** that make react-spring animations feel alive — physics config, pause, reverse, loop, and event callbacks.

### 🎬 Animating Multiple Properties with One Value

```tsx
<a.mesh position-x={spring.x} rotation-y={spring.x}>
```

One spring value drives both position AND rotation simultaneously — a smart trick for compound motion.

### ⚙️ Physics Config

```tsx
config: {
  mass: 20,        // weight — higher = slower, heavier feel
  tension: 750,    // spring pull strength — higher = faster
  friction: 85,    // resistance — higher = less bounce, lower = more spin
  clamp: false,    // false = allow overshoot (natural bounce)
}
```

> 💡 Lower `friction` → more rotation effect visible on the cube. Try it!

> 🔗 Use [react-spring-visualizer.com](https://react-spring-visualizer.com/) to experiment with these values in real time.

### 🔄 Advanced Props

| Prop | What it does |
|---|---|
| `pause` | Pauses animation when `true` — resumes when `false` |
| `reverse` | Reverses direction of animation |
| `reset` | Restarts animation from `from` values |
| `delay` | Waits N milliseconds before starting |
| `loop` | Repeats animation — pass a function returning boolean to control count |
| `to: [...]` | Array of targets — runs a sequential animation timeline |

### 🎬 Event Callbacks

```tsx
onStart:  () => console.log("started")   // animation begins
onRest:   () => console.log("finished")  // animation ends / settles
onPause:  () => console.log("paused")    // animation paused
onResume: () => console.log("resumed")   // animation resumed
```

---

## 🔍 Study 04 — useSpringRef (`SpringRef.tsx`)

This study covers **`useSpringRef`** — a separate controller object that lives outside `useSpring`, giving cleaner separation between animation definition and animation control.

### 💡 Why useSpringRef?

```tsx
// Imperative API — controller is bundled with the hook
const [spring, api] = useSpring(() => ({ ... }))

// useSpringRef — controller is separate and reusable
const springRef = useSpringRef();
const spring = useSpring({ ref: springRef, from: { x: -2 } });
```

The `ref: springRef` line connects the spring to the external controller. Without it, `springRef` has no effect.

### 🎮 Control Methods

```tsx
springRef.start({ to: { x: 2 }, config: { duration: 5000 } });  // start
springRef.pause();   // freeze mid-animation
springRef.resume();  // continue from where it stopped
springRef.stop();    // stop completely
```

### 🖱️ Hover to Pause/Resume

```tsx
onPointerOver={() => springRef.pause()}   // hover → freeze ❄️
onPointerOut={() => springRef.resume()}   // leave → continue 🚀
```

### ⚖️ useSpringRef vs Imperative API

| | Imperative API | useSpringRef |
|---|---|---|
| Setup | Simple | Slightly more setup |
| Coupling | Controller + values together | Separated cleanly |
| Scalability | Good for small components | Better for large/complex apps |
| Multiple animations | Harder to manage | Easier to coordinate |

---

## 🔍 Study 05 — useSprings (`Springs.tsx`)

This study covers **`useSprings`** — animating multiple objects at the same time with individual configurations, driven from a data array.

### 💡 useSpring vs useSprings

useSpring  → controls 1 object  🎯
useSprings → controls many objects  🎯🎯🎯

### ⚙️ Setup

```tsx
const items = [
  { initialPosition: [-3.5, 0, 0], finalPosition: [-1.5, 0, 0] },
  { initialPosition: [0, 3.5, 0],  finalPosition: [0, 0, 0] },
  { initialPosition: [3.5, 0, 0],  finalPosition: [1.5, 0, 0] },
];

const springs = useSprings(
  items.length,                       // total number of animations
  items.map((item) => ({
    from: { position: item.initialPosition },
    to:   { position: item.finalPosition },
  }))
);
```

### 🧱 Rendering

```tsx
{springs.map((item, i) => (
  <a.mesh key={i} position={item.position} scale={0.5}>
    <boxGeometry />
    <meshBasicMaterial color={"orange"} />
  </a.mesh>
))}
```

> ⚠️ Use `key={i}` not `key={Math.random()}` — random keys cause unnecessary re-renders.

### 🔄 Flow

1. 3 cubes each start at different off-screen positions
2. Animation begins automatically
3. All cubes move toward their target positions simultaneously
4. Each cube follows its own spring independently

---

## 🔍 Study 06 — useTrail (`Trail.tsx`)

This study covers **`useTrail`** — the most visually satisfying hook in react-spring. It creates a chained animation where each item follows the previous one with a natural delay.

### 💡 useSprings vs useTrail

useSprings → all animate independently at the same time  🧍🧍🧍
useTrail   → each follows the previous one              🚶‍♂️🚶‍♂️🚶‍♂️

### ⚙️ Setup

```tsx
const [trail, api] = useTrail(3, () => ({
  from: { scale: 0 },  // all start invisible
}));
```

- First argument → number of items in the trail
- Second argument → function returning initial config (Imperative mode)
- Returns `trail` (array of animated values) and `api` (controller)

### 🎮 Toggle Animation

```tsx
api.start({
  to: { scale: active ? 0.6 : 0.0 }
});
```

When `api.start()` is called, the first item animates immediately, and each subsequent item waits for the previous to start — creating the stagger chain effect.

### 🖱️ onPointerMissed

```tsx
onPointerMissed={missedHandler}
```

Fires when the user clicks **anywhere that is NOT the mesh** — great for background click interactions or reset actions.

### 🔄 Flow

1. 3 cubes start invisible (scale=0)
2. Click empty space → `api.start()` fires
3. Cube 1 grows → then Cube 2 → then Cube 3 (chain effect 🎬)
4. Click again → cubes shrink one by one in reverse

---

## 🧠 Quick Reference — Which Hook to Use?

| Situation | Hook |
|---|---|
| Animate one object, state-driven | `useSpring` (declarative) |
| Animate one object, event-driven | `useSpring` + Imperative API |
| Need external control / pause / resume | `useSpringRef` |
| Animate multiple objects independently | `useSprings` |
| Animate multiple objects in a chain | `useTrail` |

---

## 🔗 Resources

- [react-spring Docs](https://www.react-spring.dev/) — official API reference
- [react-spring-visualizer.com](https://react-spring-visualizer.com/) — experiment with physics config visually
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber) — R3F core
- [Three.js Docs](https://threejs.org/docs/) — what runs under the hood
- [Poimandres GitHub](https://github.com/pmndrs) — the team behind R3F, Drei & react-spring

---

## 📄 License

MIT — feel free to use any of this for your own learning.

---

> 💡 **One animation at a time.** The difference between a good UI and a great one is often just how things *move*. You're not just learning a library — you're learning how to make things feel alive. Keep going. The spring is just getting started. 🚀
