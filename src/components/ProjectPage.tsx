import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useConfig } from "vike-react/useConfig";
import { PROJECTS, type ProjectName } from "../projects";
import { GITHUB } from "../site";
import { Icon } from "./Icon";

const rise = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export function ProjectPage({ name }: { name: ProjectName }) {
  const { t } = useTranslation();
  const p = PROJECTS.find((x) => x.name === name)!;
  const [first, ...rest] = p.shots;
  const tall = first.height > first.width;
  useConfig()({ title: `${name} — Gallifree`, description: t(`projects.${name}`) });

  const shot = (s: (typeof p.shots)[number], i: number) => (
    <motion.figure
      key={s.src}
      {...rise}
      transition={{ delay: i * 0.1 }}
      className={`border-base-300 bg-base-300 overflow-hidden border shadow-2xl ${tall ? "mx-auto w-64 rounded-[2rem] border-8 sm:w-72" : "rounded-xl"}`}
    >
      {!tall && (
        <div className="bg-base-200 flex gap-1.5 px-3 py-2" aria-hidden>
          <span className="size-2.5 rounded-full bg-rose-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
        </div>
      )}
      <img src={s.src} width={s.width} height={s.height} alt={t(`${name}.shots.${i}`)} loading={i ? "lazy" : "eager"} className="block h-auto w-full" />
    </motion.figure>
  );

  return (
    <>
      <section className="relative overflow-hidden px-4 pt-14 pb-16 sm:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 via-cyan-400/10 to-orange-500/20 blur-3xl"
        />
        <div className={`mx-auto max-w-5xl ${tall ? "grid items-center gap-12 md:grid-cols-[1fr_auto]" : ""}`}>
          <div className={tall ? "" : "text-center"}>
            <a href="/#projects" className="text-base-content/60 hover:text-base-content inline-flex items-center gap-1 text-sm">
              <Icon name="back" className="size-4" />
              {t("project.back")}
            </a>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-4 font-mono text-5xl font-extrabold tracking-tight sm:text-6xl">
              {name}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-2xl font-semibold sm:text-3xl">
              {t(`${name}.tagline`)}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-base-content/70 mt-5 max-w-2xl text-lg ${tall ? "" : "mx-auto"}`}
            >
              {t(`${name}.intro`)}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className={`mt-6 flex flex-wrap gap-2 ${tall ? "" : "justify-center"}`}>
              {p.tags.map((tag) => (
                <span key={tag} className="badge badge-soft">
                  {tag}
                </span>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className={`mt-8 flex flex-wrap gap-3 ${tall ? "" : "justify-center"}`}>
              <a href={`${GITHUB}/${name}`} className="btn btn-primary">
                <Icon name="github" className="size-4" />
                {t("project.source")}
              </a>
              <a href="#start" className="btn btn-outline">
                {t("project.start")}
                <Icon name="arrow" className="size-4" />
              </a>
            </motion.div>
          </div>
          {tall && shot(first, 0)}
        </div>
        {!tall && <div className="mx-auto mt-14 max-w-5xl">{shot(first, 0)}</div>}
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <motion.h2 {...rise} className="text-center text-3xl font-bold">
          {t("project.features")}
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {p.features.map((f, i) => (
            <motion.div key={f.key} {...rise} transition={{ delay: i * 0.08 }} className="card bg-base-100 border-base-300 border">
              <div className="card-body flex-row gap-4">
                <span className="bg-primary/10 text-primary grid size-10 shrink-0 place-items-center rounded-lg">
                  <Icon name={f.icon} />
                </span>
                <div>
                  <h3 className="font-semibold">{t(`${name}.features.${f.key}.title`)}</h3>
                  <p className="text-base-content/70 mt-1 text-sm">{t(`${name}.features.${f.key}.text`)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {rest.length > 0 && <div className="mt-16 space-y-10">{rest.map((s, i) => shot(s, i + 1))}</div>}
      </section>

      <section id="start" className="bg-base-200/50 scroll-mt-16 px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 {...rise} className="text-3xl font-bold">
            {t("project.start")}
          </motion.h2>
          <motion.pre {...rise} className="bg-neutral text-neutral-content mt-8 overflow-x-auto rounded-xl p-5 text-left text-sm">
            <code>{p.snippet}</code>
          </motion.pre>
          {!("readme" in p && !p.readme) && (
            <motion.p {...rise} className="text-base-content/70 mt-6">
              {t("project.docs")}{" "}
              <a href={`${GITHUB}/${name}#readme`} className="link link-primary">
                README
              </a>
            </motion.p>
          )}
        </div>
      </section>
    </>
  );
}
