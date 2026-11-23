import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Icon, type IconName } from "../../src/components/Icon";
import { GITHUB } from "../../src/site";

const PROJECTS = [
  { name: "exposr", tags: ["Rust", "TCP/UDP", "GraphQL", "MongoDB"] },
  { name: "rustdeck", tags: ["Rust", "Lua", "GUI", "TUI"] },
  { name: "rustart", tags: ["Rust", "egui", "Android", "MCP"] },
] as const;

const PILLARS: { key: string; icon: IconName }[] = [
  { key: "open", icon: "code" },
  { key: "rust", icon: "bolt" },
  { key: "own", icon: "shield" },
];

const rise = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function Page() {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative overflow-hidden px-4 pt-20 pb-24 text-center sm:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/25 via-cyan-400/15 to-rose-500/20 blur-3xl"
        />
        <motion.img
          src="/logo.svg"
          alt="Gallifree"
          className="mx-auto size-28 sm:size-36"
          initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
        />
        <motion.h1
          className="mx-auto mt-8 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          className="text-base-content/70 mx-auto mt-6 max-w-2xl text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <a href="#projects" className="btn btn-primary">
            {t("hero.cta")}
            <Icon name="arrow" className="size-4" />
          </a>
          <a href={GITHUB} className="btn btn-outline">
            <Icon name="github" className="size-4" />
            GitHub
          </a>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-20 sm:grid-cols-3">
        {PILLARS.map((p, i) => (
          <motion.div key={p.key} {...rise} transition={{ delay: i * 0.1 }} className="text-center sm:text-left">
            <span className="bg-primary/10 text-primary inline-grid size-10 place-items-center rounded-lg">
              <Icon name={p.icon} />
            </span>
            <h3 className="mt-3 font-semibold">{t(`pillars.${p.key}.title`)}</h3>
            <p className="text-base-content/70 mt-1 text-sm">{t(`pillars.${p.key}.text`)}</p>
          </motion.div>
        ))}
      </section>

      <section id="projects" className="bg-base-200/50 scroll-mt-16 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <motion.h2 {...rise} className="text-center text-3xl font-bold sm:text-4xl">
            {t("projects.title")}
          </motion.h2>
          <motion.p {...rise} className="text-base-content/70 mx-auto mt-3 max-w-xl text-center">
            {t("projects.subtitle")}
          </motion.p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <motion.a
                key={p.name}
                href={`${GITHUB}/${p.name}`}
                {...rise}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="card bg-base-100 border-base-300 border shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="card-body">
                  <h3 className="card-title font-mono">{p.name}</h3>
                  <p className="text-base-content/70">{t(`projects.${p.name}`)}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {p.tags.map((tag) => (
                      <span key={tag} className="badge badge-soft badge-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-primary mt-4 inline-flex items-center gap-1 text-sm font-medium">
                    {t("projects.source")} <Icon name="arrow" className="size-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
