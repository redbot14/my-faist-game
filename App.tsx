import React from 'react';
import { Button } from './components/Button';

const entrySequence = [
  {
    title: 'Cinematic Aircraft Flyover',
    description: 'A military transport screams across the sky as sirens echo underground.',
    icon: 'fa-plane',
  },
  {
    title: 'Crash Landing / Drop Pod',
    description: 'Player breaches the surface with a shockwave, dust, and debris.',
    icon: 'fa-meteor',
  },
  {
    title: 'Control Handover',
    description: 'Short tactical briefing, then you move—already inside the bunker.',
    icon: 'fa-hand-fist',
  },
];

const playerStats = [
  { label: 'Health', detail: 'Segmented HP with medkits', icon: 'fa-heart-pulse' },
  { label: 'Armor', detail: 'Damage mitigation, rechargeable', icon: 'fa-shield' },
  { label: 'Ammo', detail: 'Magazine + reserve tracking', icon: 'fa-bullseye' },
  { label: 'Reload Speed', detail: 'Upgradable with perks', icon: 'fa-rotate' },
];

const weaponLoadout = [
  { name: 'Pistol', detail: 'Reliable sidearm, unlimited stash', accent: 'cyan' },
  { name: 'SMG', detail: 'High fire rate, close-range control', accent: 'purple' },
  { name: 'Shotgun', detail: 'Heavy stagger, tight corridors', accent: 'cyan' },
  { name: 'Assault Rifle', detail: 'Balanced mid-range control', accent: 'purple' },
  { name: 'Grenades', detail: 'Area denial + breach utility', accent: 'cyan' },
];

const enemyTypes = [
  { name: 'Walker Zombies', detail: 'Slow swarms that overwhelm', icon: 'fa-person-walking' },
  { name: 'Crawler Mutants', detail: 'Fast, low-profile ambushers', icon: 'fa-spider' },
  { name: 'Spitters', detail: 'Ranged toxic pressure', icon: 'fa-flask' },
  { name: 'Armored Brutes', detail: 'High HP, punishing hits', icon: 'fa-dumbbell' },
  { name: 'Mini Bosses', detail: 'Unique skills + loot', icon: 'fa-skull' },
];

const missionObjectives = [
  'Kill all enemies in the sector',
  'Destroy infected core nodes',
  'Rescue survivors and escort out',
  'Survive for X seconds',
  'Plant charges & escape',
];

const upgrades = [
  { title: 'Max Health', detail: 'Permanent HP expansion', type: 'Permanent' },
  { title: 'Damage Boost', detail: 'Weapon performance tuning', type: 'Permanent' },
  { title: 'Reload Speed', detail: 'Faster magazine swaps', type: 'Permanent' },
  { title: 'Armor Resistance', detail: 'Reduce incoming damage', type: 'Permanent' },
  { title: 'Rage Mode', detail: 'Short burst of DPS', type: 'Power-Up' },
  { title: 'Shield', detail: 'Temporary invulnerability', type: 'Power-Up' },
  { title: 'Rapid Fire', detail: 'Fire rate spike', type: 'Power-Up' },
  { title: 'Health Packs', detail: 'Instant recovery', type: 'Power-Up' },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-neon-bg text-white font-inter">
      <div className="absolute top-[-20%] left-[-20%] w-[55%] h-[55%] bg-neon-cyan/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[55%] h-[55%] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none"></div>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-10 px-5 pb-16 pt-8">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-neon-card/70 p-6 shadow-2xl">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan">
                <i className="fa-solid fa-skull-crossbones text-xl"></i>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Mobile Tactical Shooter</p>
                <h1 className="text-3xl font-oxanium font-bold leading-tight text-white sm:text-4xl">
                  <span className="text-neon-cyan">Skyfall</span> Protocol: Underground Siege
                </h1>
              </div>
            </div>
            <div className="hidden flex-col items-end gap-2 text-right text-xs text-gray-400 sm:flex">
              <span>Unity LTS · 2D URP · Portrait</span>
              <span>Android-Optimized · 60 FPS</span>
            </div>
          </div>
          <p className="text-sm text-gray-300 sm:text-base">
            A high-intensity 2D side-scrolling survival shooter where elite soldiers breach the ground from
            the sky, fight through infected bunkers, and execute tactical missions against zombies and
            monsters.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="!px-6 !py-3 text-sm uppercase tracking-widest">Mission Briefing</Button>
            <Button variant="purple" className="!px-6 !py-3 text-sm uppercase tracking-widest">
              Gameplay Loop
            </Button>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-neon-card/80 p-6">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-camera text-neon-cyan"></i>
              <h2 className="font-oxanium text-xl font-bold">Camera & Feel</h2>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>2D side-view (left ⇄ right) with tight corridor framing.</li>
              <li>Smooth follow camera with damping and cinematic lead.</li>
              <li>Screen shake on explosions, boss attacks, and heavy weapons.</li>
              <li>Strong muzzle flashes, hit markers, and recoil feedback.</li>
            </ul>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-neon-cyan/30 bg-neon-cyan/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-neon-cyan">Portrait UX</p>
                <p className="text-sm text-gray-200">Thumb-friendly controls with left movement, right aim/fire.</p>
              </div>
              <div className="rounded-2xl border border-neon-purple/30 bg-neon-purple/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-neon-purple">Mobile First</p>
                <p className="text-sm text-gray-200">Sprite atlases, pooling, and 60 FPS targets.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-neon-card/80 p-6">
            <h2 className="font-oxanium text-xl font-bold">Signature Entry</h2>
            <p className="text-sm text-gray-300">
              Every mission begins with the player dropping from a military aircraft and breaching into a bunker.
            </p>
            <div className="space-y-4">
              {entrySequence.map((step) => (
                <div key={step.title} className="flex gap-3 rounded-2xl border border-white/10 bg-black/40 p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-purple/10 text-neon-purple">
                    <i className={`fa-solid ${step.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                    <p className="text-xs text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-neon-card/80 p-6">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-person-running text-neon-cyan"></i>
              <h2 className="font-oxanium text-xl font-bold">Player Mechanics</h2>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-gray-300">
                <p className="font-semibold text-white">Movement</p>
                <ul className="mt-2 space-y-1 text-xs">
                  <li>Left / Right movement</li>
                  <li>Jump + platform drop-down</li>
                  <li>Ladder climb + ledge snap</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-gray-300">
                <p className="font-semibold text-white">Combat</p>
                <ul className="mt-2 space-y-1 text-xs">
                  <li>Auto or manual shooting</li>
                  <li>Reload + recoil feedback</li>
                  <li>Optional aim up/down</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {playerStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan">
                    <i className={`fa-solid ${stat.icon}`}></i>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{stat.label}</p>
                    <p className="text-[11px] text-gray-400">{stat.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neon-card/80 p-6">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-gun text-neon-purple"></i>
              <h2 className="font-oxanium text-xl font-bold">Weapon System</h2>
            </div>
            <div className="mt-4 grid gap-3">
              {weaponLoadout.map((weapon) => (
                <div
                  key={weapon.name}
                  className={`flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-3`}
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{weapon.name}</p>
                    <p className="text-xs text-gray-400">{weapon.detail}</p>
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-widest ${
                      weapon.accent === 'cyan'
                        ? 'border-neon-cyan/40 text-neon-cyan'
                        : 'border-neon-purple/40 text-neon-purple'
                    }`}
                  >
                    {weapon.accent === 'cyan' ? 'Control' : 'Burst'}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-400">
              Weapons feature distinct fire rates, recoil, reload animations, and pickup drops from enemies or crates.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-neon-card/80 p-6">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-biohazard text-neon-cyan"></i>
              <h2 className="font-oxanium text-xl font-bold">Zombies & Monsters</h2>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {enemyTypes.map((enemy) => (
                <div key={enemy.name} className="rounded-2xl border border-white/10 bg-black/40 p-3">
                  <div className="flex items-center gap-2 text-neon-purple">
                    <i className={`fa-solid ${enemy.icon}`}></i>
                    <p className="text-sm font-semibold text-white">{enemy.name}</p>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">{enemy.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-neon-purple/30 bg-neon-purple/10 p-4 text-xs text-gray-200">
              AI Behavior: patrol → detect → attack, swarm grouping, ambush tunnels, and spawn from doors/vents/holes.
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neon-card/80 p-6">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-crown text-neon-purple"></i>
              <h2 className="font-oxanium text-xl font-bold">Boss Encounters</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>One boss per major bunker with arena-scale rooms.</li>
              <li>Weak-point mechanics + phased attacks.</li>
              <li>Boss intro warning UI and audio callouts.</li>
              <li>Defeat unlocks escape elevator and high-tier rewards.</li>
            </ul>
            <div className="mt-4 rounded-2xl border border-neon-cyan/40 bg-black/40 p-4 text-xs text-gray-200">
              Warning UI: <span className="text-neon-cyan">“BOSS APPROACHING”</span> with screen shake + stinger.
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-neon-card/80 p-6">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-map-location-dot text-neon-cyan"></i>
              <h2 className="font-oxanium text-xl font-bold">Map & Mission Design</h2>
            </div>
            <p className="mt-3 text-sm text-gray-300">
              2D side-scrolling underground bunkers with tight corridors, open combat rooms, platforms, ladders,
              and locked doors. Zones include military bunkers, labs, sewers, and infected tunnels.
            </p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Mission Objectives</p>
              <ul className="mt-3 space-y-2 text-xs text-gray-200">
                {missionObjectives.map((mission) => (
                  <li key={mission} className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-neon-cyan"></i>
                    {mission}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 rounded-2xl border border-neon-purple/30 bg-neon-purple/10 p-4 text-xs text-gray-200">
              Mission UI stays pinned at the top-center of the HUD at all times.
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neon-card/80 p-6">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-headset text-neon-purple"></i>
              <h2 className="font-oxanium text-xl font-bold">HUD & Audio</h2>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-neon-cyan">HP 78%</span>
                <span className="text-neon-purple">AMMO 18/120</span>
              </div>
              <div className="mt-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-3 py-1 text-center text-[11px]">
                MISSION: CLEAR THE INFECTED CORE
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400">
                <span>ALERT: ENEMIES INCOMING</span>
                <span>BOSS APPROACHING</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>Fonts: Oxanium for HUD, Inter for menus and objectives.</li>
              <li>Heavy gunfire, monster growls, underground echo.</li>
              <li>Screen shake + hit flashes, no gore.</li>
            </ul>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-neon-card/80 p-6">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-screwdriver-wrench text-neon-cyan"></i>
              <h2 className="font-oxanium text-xl font-bold">Progression & Upgrades</h2>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {upgrades.map((upgrade) => (
                <div key={upgrade.title} className="rounded-2xl border border-white/10 bg-black/40 p-3">
                  <p className="text-sm font-semibold text-white">{upgrade.title}</p>
                  <p className="text-xs text-gray-400">{upgrade.detail}</p>
                  <span
                    className={`mt-2 inline-flex rounded-full border px-2 py-1 text-[10px] uppercase tracking-widest ${
                      upgrade.type === 'Permanent'
                        ? 'border-neon-cyan/40 text-neon-cyan'
                        : 'border-neon-purple/40 text-neon-purple'
                    }`}
                  >
                    {upgrade.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neon-card/80 p-6">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-layer-group text-neon-purple"></i>
              <h2 className="font-oxanium text-xl font-bold">Game Loop</h2>
            </div>
            <ol className="mt-4 space-y-3 text-sm text-gray-300">
              <li>Plane arrival → sky breach entry.</li>
              <li>Mission briefing + objectives pinned.</li>
              <li>Combat, exploration, and tactical objectives.</li>
              <li>Boss fight or extraction sequence.</li>
              <li>Rewards, upgrades, next mission.</li>
            </ol>
            <div className="mt-4 rounded-2xl border border-neon-cyan/30 bg-neon-cyan/10 p-4 text-xs text-gray-200">
              Optional: endless mode, weapon skins, difficulty tiers, story cutscenes, and ad-based revive.
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-neon-card/80 p-6 text-center">
          <h2 className="font-oxanium text-2xl font-bold text-white">Optimization Checklist</h2>
          <p className="mt-2 text-sm text-gray-300">
            Sprite atlases, pooled bullets/enemies, lightweight VFX, and low draw calls to keep 60 FPS on
            low-end Android devices.
          </p>
          <div className="mt-6 grid gap-3 text-xs text-gray-200 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-3">Object pooling for enemies & bullets</div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-3">Atlas-packed sprites + UI batching</div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-3">GPU-friendly lighting & URP 2D</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
