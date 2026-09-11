export function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your form backend / email service of choice.
    console.log("Contact form submitted");
  };
  return (
    <div
      className="rounded-[10px] border p-7"
      style={{
        background: "var(--color-bg-panel)",
        borderColor: "var(--color-line)",
      }}
    >
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <h3
          className="text-base mb-1"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-teal)",
          }}
        >
          Send a message
        </h3>

        <div>
          <label
            htmlFor="name"
            className="block text-[12px] uppercase tracking-[0.06em] mb-1.5"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-faint)",
            }}
          >
            name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Your name"
            type="text"
            className="w-full rounded-[7px] px-3.5 py-3 text-[14px] border outline-none transition-colors focus:border-[var(--color-teal)]"
            style={{
              background: "var(--color-bg-panel-2)",
              borderColor: "var(--color-line)",
              color: "var(--color-text)",
              fontFamily: "var(--font-body)",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[12px] uppercase tracking-[0.06em] mb-1.5"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-faint)",
            }}
          >
            email
          </label>
          <input
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            type="email"
            className="w-full rounded-[7px] px-3.5 py-3 text-[14px] border outline-none transition-colors focus:border-[var(--color-teal)]"
            style={{
              background: "var(--color-bg-panel-2)",
              borderColor: "var(--color-line)",
              color: "var(--color-text)",
              fontFamily: "var(--font-body)",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-[12px] uppercase tracking-[0.06em] mb-1.5"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-faint)",
            }}
          >
            message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Say hello..."
            className="w-full rounded-[7px] px-3.5 py-3 text-[14px] resize-y border outline-none transition-colors focus:border-[var(--color-teal)]"
            style={{
              background: "var(--color-bg-panel-2)",
              borderColor: "var(--color-line)",
              color: "var(--color-text)",
              fontFamily: "var(--font-body)",
            }}
          />
        </div>

        <button
          type="submit"
          className="mt-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-all hover:brightness-110 hover:-translate-y-px"
          style={{
            fontFamily: "var(--font-mono)",
            background: "linear-gradient(135deg, var(--color-copper), #b8631f)",
            color: "rgb(10, 12, 16)",
          }}
        >
          Send Message →
        </button>
      </form>
    </div>
  );
}
