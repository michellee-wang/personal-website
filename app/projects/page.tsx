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
          i&apos;m building projects on the side. for the latest + full list, see my{" "}
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
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-[#3f568f]">🎵 Sync</h2>
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
            <p className="text-sm text-black/80">
              built for HackIllinois (Modal + Solana tracks):
            </p>
            <p className="text-sm text-black/80 leading-relaxed mt-2">
             <b>basically the backstory is </b> that we wanted to build something fun since most of my team had never done a hackathon before but we also wanted to compete for tracks and try to win with technical complexity. on my bucket list of things to build, i wanted to build a machine learning model to generate music based on a user's top song's MIDI (music data file) but i thought that was too boring and basic for a hackathon so when i was brainstorming i remembered how enraged my friends would be my geometry dash and then i thought to how slither.io/agar.io have versions where you can bet crypto to gamble. we knew this idea didn't solve any problem (and lowkey endorsed gambling) but it sounded so fun that we went all in on it.
            </p>
          </div>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-[#3f568f]">Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Music Generation</p>
                <p className="text-black/80">
                we trained a LSTM (Recurrent Neural Network) on modal&apos;s GPU for modal track that generates tracks
                    based on the user&apos;s top song&apos;s MIDI file. then deployed it as an RESTFUL API on Modal </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">TypeScript Game Engine</p>
                <p className="text-black/80">
                  Full game built in TypeScript with custom gravity/physics
                  (jump arcs + collisions) and terrain generation synced to the
                  music beat.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Verifiable random function
                </p>
                <p className="text-black/80">
                  ORAO VRF is a crypto concept that we used to ensure terrain generation that's actually proven random and not just a pseudo-random number generator.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Auth + Data</p>
                <p className="text-black/80">
                  Privy handles seamless wallet auth (no extension required),
                  Firebase stores scores and match state for duel mode, and
                  wallet connection is only required for staking or duels.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-[#3f568f]">Stack</h3>
            <p className="text-sm text-black/80 border border-[#7691cc]/25 bg-white/80 rounded-lg p-3">
              Next.js + React (TypeScript), custom TS game engine, Tone.js,
              Solana/Anchor smart contracts, ORAO VRF, Privy auth, Firebase,
              and Modal-hosted LSTM inference.
            </p>
          </section>
        </article>

        <article className="border border-[#7691cc]/30 bg-[#7691cc]/[0.05] rounded-2xl p-6 space-y-5 mb-5 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold text-[#3f568f]">🎧 Muse</h2>
              <a
                href="https://disc-app-five.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block text-[#7691cc] text-sm font-medium"
              >
                Frontend
                <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#7691cc] transition-all duration-200"></span>
              </a>
              <a
                href="https://disc-users-api.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block text-[#7691cc] text-sm font-medium"
              >
                Backend API
                <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#7691cc] transition-all duration-200"></span>
              </a>
            </div>
            <p className="text-sm text-black/80">
              built for disc club at northwestern:
            </p>
            <p className="text-sm text-black/80 leading-relaxed mt-2">
              muse is a social networking platform that connects people through
              their music taste. powered by spotify, users can discover others
              with similar musical interests, view top artists, and save
              connections. for the original assignment we used a premade api to
              fetch users, so artists were randomly generated; that flow was
              later commented out after adding supabase auth so users can create
              their own accounts.
            </p>
            
          </div>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-[#3f568f]">Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Spotify OAuth</p>
                <p className="text-black/80">
                  Sign up and login via Spotify OAuth with automatic profile
                  picture sync and top artists integration.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Social Discovery</p>
                <p className="text-black/80">
                  Browse users by music taste, view profiles, and save
                  connections directly from the app.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Auth Migration</p>
                <p className="text-black/80">
                  Replaced assignment-time random user artist generation with
                  account-based flows after adding Supabase auth.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Backend API</p>
                <p className="text-black/80">
                  Node/Express REST endpoints for auth, user discovery, saved
                  connections, and Spotify callback handling.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-[#3f568f]">Stack</h3>
            <p className="text-sm text-black/80 border border-[#7691cc]/25 bg-white/80 rounded-lg p-3">
              React frontend, Node.js + Express REST API, Supabase (auth + DB),
              Spotify Web API OAuth, and CORS.
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
            <p className="text-sm text-black/80 leading-relaxed">
              data science project analyzing college basketball games and
              building predictive models for tournament outcomes. includes team
              rating systems (Elo, WHR, KenPom-style efficiency) and a model
              ensemble to improve prediction quality.
            </p>
          </div>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-[#3f568f]">Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Rating Systems</p>
                <p className="text-black/80">
                  Implemented Elo with home-advantage/stat adjustments, Whole
                  History Rating (WHR), and KenPom-style efficiency metrics.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Model Benchmarking</p>
                <p className="text-black/80">
                  Trained and compared Logistic Regression, Random Forest,
                  Gradient Boosting, SVM, and XGBoost.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Ensemble Strategy</p>
                <p className="text-black/80">
                  Combined multiple model outputs into an ensemble for more
                  stable tournament predictions.
                </p>
              </div>
              <div className="border border-[#7691cc]/30 bg-white/80 rounded-lg p-3 shadow-sm">
                <p className="font-semibold">Data Pipeline</p>
                <p className="text-black/80">
                  Worked across multiple CSV datasets (game logs, regional
                  groups, team metadata) in a notebook workflow.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-[#3f568f]">Stack</h3>
            <p className="text-sm text-black/80 border border-[#7691cc]/25 bg-white/80 rounded-lg p-3">
              Python, pandas, numpy, scikit-learn, XGBoost, matplotlib,
              seaborn, and Jupyter Notebook.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
