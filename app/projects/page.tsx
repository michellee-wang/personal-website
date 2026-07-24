import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gradient-to-b from-[#f7faff] via-white to-white text-black font-krub">
      <main className="max-w-4xl w-full">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="text-[#7691cc] border border-[#7691cc]/40 rounded-full px-3 py-1 hover:bg-[#7691cc]/10 transition font-medium"
          >
            ← back to home
          </Link>
          <Link
            href="/memories"
            className="text-[#7691cc] border border-[#7691cc]/40 rounded-full px-3 py-1 hover:bg-[#7691cc]/10 transition font-medium"
          >
            /memories
          </Link>
        </div>

        <h1 className="text-5xl font-bold mb-2 text-[#4f67a8]">projects</h1>
        <p className="text-sm mb-8">
          a few things i&apos;ve built recently — full history on{" "}
          <a
            href="https://github.com/michellee-wang"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block text-[#7691cc]"
          >
            github
            <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#7691cc] transition-all duration-200"></span>
          </a>
          .
        </p>

        <article className="border border-[#7691cc]/30 bg-[#7691cc]/[0.05] rounded-2xl p-6 space-y-5 mb-5 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h2 className="text-3xl font-bold text-[#3f568f]">Sync</h2>
              <a
                href="https://github.com/michellee-wang/sync"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block text-[#7691cc] text-sm font-medium"
              >
                GitHub
                <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#7691cc] transition-all duration-200"></span>
              </a>
            </div>
            <p className="text-sm text-black/70">
              HackIllinois · Modal + Solana tracks
            </p>
            <p className="text-sm text-black/80 leading-relaxed mt-2">
              rhythm platformer where levels are generated from your music —
              LSTM-generated audio, a custom TypeScript physics engine, and
              Solana for on-chain staking/duels. most of my team was new to
              hackathons, so we aimed for something that was actually fun to
              play and technically ambitious enough to compete. i&apos;d wanted
              to train a model on MIDI for a while; tying it to beat-synced
              terrain (think geometry dash meets agar.io energy) made it feel
              worth shipping in a weekend.
            </p>
          </div>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-[#3f568f]">
              Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Music Generation</p>
                <p className="text-black/80">
                  Trained an LSTM on Modal GPUs to generate tracks from a
                  user&apos;s top song MIDI, then deployed inference as a REST
                  API on Modal.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">TypeScript Game Engine</p>
                <p className="text-black/80">
                  Built the full game in TypeScript with custom gravity,
                  collisions, jump arcs, and terrain generation synced to the
                  music beat.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Verifiable Randomness</p>
                <p className="text-black/80">
                  Used ORAO VRF so terrain generation is cryptographically
                  verifiable — not just a client-side PRNG.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Auth + Data</p>
                <p className="text-black/80">
                  Privy for wallet auth (no extension required), Firebase for
                  scores and duel match state; wallet connect only when staking
                  or dueling.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-[#3f568f]">Stack</h3>
            <p className="text-sm text-black/80 border border-[#7691cc]/25 bg-white/80 rounded-lg p-3">
              Next.js + React (TypeScript), custom TS game engine, Tone.js,
              Solana/Anchor, ORAO VRF, Privy, Firebase, Modal-hosted LSTM
              inference
            </p>
          </section>
        </article>

        <article className="border border-[#7691cc]/30 bg-[#7691cc]/[0.05] rounded-2xl p-6 space-y-5 mb-5 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h2 className="text-3xl font-bold text-[#3f568f]">Muse</h2>
              <a
                href="https://disc-app-five.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block text-[#7691cc] text-sm font-medium"
              >
                Live
                <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#7691cc] transition-all duration-200"></span>
              </a>
              <a
                href="https://disc-users-api.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block text-[#7691cc] text-sm font-medium"
              >
                API
                <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#7691cc] transition-all duration-200"></span>
              </a>
            </div>
            <p className="text-sm text-black/70">
              built with Northwestern&apos;s Disc club
            </p>
            <p className="text-sm text-black/80 leading-relaxed mt-2">
              social app that matches people by music taste via Spotify —
              profiles, top artists, and saved connections. started as a club
              project with a stubbed user API; i later migrated auth to Supabase
              so real accounts replace the random artist data.
            </p>
          </div>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-[#3f568f]">
              Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Spotify OAuth</p>
                <p className="text-black/80">
                  Sign-in with Spotify, including profile picture sync and top
                  artists pulled from the Web API.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Social Discovery</p>
                <p className="text-black/80">
                  Browse users by taste, open profiles, and save connections
                  in-app.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Auth Migration</p>
                <p className="text-black/80">
                  Replaced stub/random artist flows with account-based auth and
                  persistence after adding Supabase.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Backend API</p>
                <p className="text-black/80">
                  Node/Express REST endpoints for auth, discovery, saved
                  connections, and the Spotify OAuth callback.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-[#3f568f]">Stack</h3>
            <p className="text-sm text-black/80 border border-[#7691cc]/25 bg-white/80 rounded-lg p-3">
              React, Node.js + Express, Supabase (auth + DB), Spotify Web API
            </p>
          </section>
        </article>

        <article className="border border-[#7691cc]/30 bg-[#7691cc]/[0.05] rounded-2xl p-6 space-y-5 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-[#3f568f]">🏀 Basketball Tournament Prediction Analysis</h2>
              <a
                href="https://wsb.wharton.upenn.edu/wharton-data-competition/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block text-[#7691cc] text-sm font-medium"
              >
                Competition
                <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#7691cc] transition-all duration-200"></span>
              </a>
              <a
                href="https://github.com/michellee-wang/wharton-data-sci"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block text-[#7691cc] text-sm font-medium"
              >
                GitHub
                <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#7691cc] transition-all duration-200"></span>
              </a>
            </div>
            <p className="text-sm text-black/70">Wharton Data Science Competition</p>
            <p className="text-sm text-black/80 leading-relaxed mt-2">
              predictive models for college basketball tournament outcomes —
              team rating systems (Elo, WHR, KenPom-style efficiency) plus an
              ensemble over several classifiers to stabilize predictions.
            </p>
          </div>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-[#3f568f]">
              Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Rating Systems</p>
                <p className="text-black/80">
                  Elo with home-advantage/stat adjustments, Whole History Rating
                  (WHR), and KenPom-style efficiency metrics.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Model Benchmarking</p>
                <p className="text-black/80">
                  Compared logistic regression, random forest, gradient
                  boosting, SVM, and XGBoost on held-out games.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Ensemble</p>
                <p className="text-black/80">
                  Combined model outputs into an ensemble for more stable
                  tournament predictions.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Data Pipeline</p>
                <p className="text-black/80">
                  Joined game logs, regional groups, and team metadata across
                  multiple CSVs in a notebook workflow.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-[#3f568f]">Stack</h3>
            <p className="text-sm text-black/80 border border-[#7691cc]/25 bg-white/80 rounded-lg p-3">
              Python, pandas, numpy, scikit-learn, XGBoost, matplotlib,
              seaborn, Jupyter
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
