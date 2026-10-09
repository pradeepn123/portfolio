import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { profile } from "../data/portfolio";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const contactItems = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "phone", label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: "pin", label: "Location", value: profile.location },
  { icon: "github", label: "GitHub", value: "github.com/pradeepn123", href: profile.github, external: true },
];

const Field = ({ id, label, optional, children }) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
      {label}
      {optional && <span className="ml-1 font-normal text-muted">(optional)</span>}
    </label>
    {children}
  </div>
);

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs.sendForm("service_286zwza", "template_pjnzkdh", form.current, "owd4-jRec29il6zJL").then(
      () => {
        setStatus("success");
        form.current.reset();
      },
      () => setStatus("error")
    );
  };

  return (
    <section id="contact" className="section border-t border-line bg-surface-2/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together."
          text="Have a Shopify store, headless build or front-end role in mind? Send a message — I usually reply within a day."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="card flex flex-col p-6 sm:p-8">
            <div>
              <p className="text-lg font-bold text-ink">{profile.name}</p>
              <p className="text-sm text-muted">{profile.role}</p>
            </div>

            <ul className="mt-8 space-y-4">
              {contactItems.map((item) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-fg">
                      <Icon name={item.icon} size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wider text-muted">{item.label}</span>
                      <span className="block break-words text-sm font-semibold text-ink transition group-hover:text-accent">
                        {item.value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="group flex items-center gap-4 rounded-xl"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <a href={profile.resume} download className="btn-ghost mt-8 w-full lg:mt-auto">
              <Icon name="download" size={16} />
              Download résumé (PDF)
            </a>
          </Reveal>

          <Reveal delay={150} className="card p-6 sm:p-8">
            <form ref={form} onSubmit={sendEmail} className="grid gap-5 sm:grid-cols-2">
              <Field id="contact-name" label="Your name">
                <input id="contact-name" name="name" type="text" required autoComplete="name" className="field" placeholder="Jane Doe" />
              </Field>
              <Field id="contact-email" label="Email">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="field"
                  placeholder="jane@company.com"
                />
              </Field>
              <Field id="contact-phone" label="Phone" optional>
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel" className="field" placeholder="+91 …" />
              </Field>
              <Field id="contact-subject" label="Subject">
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  className="field"
                  placeholder="Shopify theme build"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field id="contact-message" label="Message">
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    required
                    className="field resize-y"
                    placeholder="Tell me about your project, timeline and goals…"
                  />
                </Field>
              </div>

              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p aria-live="polite" className="min-h-[1.25rem] text-sm">
                  {status === "success" && (
                    <span className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                      <Icon name="check" size={16} strokeWidth={2.5} />
                      Thanks! Your message has been sent.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="inline-flex items-center gap-2 text-red-600 dark:text-red-400">
                      <Icon name="alert" size={16} />
                      Something went wrong — please email me directly.
                    </span>
                  )}
                </p>
                <button type="submit" disabled={status === "sending"} className="btn-primary disabled:cursor-wait disabled:opacity-70">
                  {status === "sending" ? "Sending…" : "Send message"}
                  <Icon name="arrowRight" size={16} className="btn-arrow" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
