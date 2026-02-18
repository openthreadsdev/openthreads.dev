import { Link } from "react-router-dom";
import { config } from "@/lib/config";

export default function PrivacyPage() {
  return (
    <main>
      <section className="section-pad border-b border-ot-border bg-ot-bg">
        <div className="ot-container max-w-2xl">
          <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
            Legal
          </span>
          <h1 className="mb-4 text-4xl font-bold text-ot-text">
            Privacy Policy
          </h1>
          <p className="font-mono text-sm text-ot-muted">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="section-pad bg-ot-bg">
        <div className="ot-container prose-ot max-w-2xl">
          <h2>Overview</h2>
          <p>
            OpenThreads ("we", "our", "us") operates the openthreads.dev
            website. This policy describes what data we collect, how we use it,
            and your rights. We keep this simple because we believe data
            minimalism is a feature, not an afterthought.
          </p>

          <h2>What we collect</h2>
          <p>
            This site is primarily static. When you use our contact form, we
            receive your name, email address, and message. We do not sell, rent,
            or trade this information.
          </p>
          <p>
            We may use standard analytics tools that collect anonymised usage
            data (page views, referrers, general location). We do not use
            third-party advertising trackers.
          </p>

          <h2>How we use it</h2>
          <p>
            Contact form data is used solely to respond to your inquiry.
            Analytics data is used to understand how the site is used and to
            improve it. We do not build profiles or engage in behavioural
            targeting.
          </p>

          <h2>Data retention</h2>
          <p>
            Contact messages are retained for as long as is reasonably necessary
            to manage the conversation. Analytics data is retained in
            aggregated, anonymised form.
          </p>

          <h2>Your rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion
            of any personal data we hold about you. Contact us at{" "}
            <a
              href={`mailto:${config.contactEmail}`}
              className="text-ot-accent hover:text-ot-accent-hover"
            >
              {config.contactEmail}
            </a>{" "}
            to make a request.
          </p>

          <h2>Cookies</h2>
          <p>
            This site uses minimal cookies. We do not use cookies for
            advertising purposes. You can disable cookies in your browser
            settings without affecting core site functionality.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions:{" "}
            <a
              href={`mailto:${config.contactEmail}`}
              className="text-ot-accent hover:text-ot-accent-hover"
            >
              {config.contactEmail}
            </a>
          </p>

          <p className="mt-8 border-t border-ot-border pt-6 text-sm italic text-ot-muted">
            OpenThreads provides data infrastructure tools, not legal services.
            This policy describes our practices as a studio site.
          </p>
        </div>
      </section>
    </main>
  );
}
