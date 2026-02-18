import Layout from "../components/layout/Layout";
import { GetStaticProps } from "next";
import Link from "next/link";

function Opportunities({ config, newsletterId, newsletterUser }) {
  return (
    <Layout
      parent="Home"
      sub="Opportunities"
      {...config}
      newsletterUser={newsletterUser}
      newsletterId={newsletterId}
    >
      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="single-page pr-30">
              <div className="single-header style-2">
                <h1>Open Roles</h1>
                <p className="text-muted">
                  We collaborate with talented people who share our commitment
                  to structured, compliance-first product infrastructure.
                </p>
              </div>

              <div className="single-content mt-50">
                {/* Compliance Intelligence Lead Role */}
                <div className="role-listing mb-80">
                  <div className="d-flex justify-content-between align-items-start mb-20">
                    <div>
                      <h2 className="mb-10">Compliance Intelligence Lead</h2>
                      <p className="mb-0 text-muted">
                        <strong>OpenThreads</strong> • Remote • Part-Time /
                        Contract
                      </p>
                    </div>
                  </div>

                  <div className="role-content">
                    <h4 className="mb-20 mt-40">About OpenThreads</h4>
                    <p>
                      OpenThreads is a compliance-first product data
                      infrastructure studio focused on helping product-based
                      businesses manage regulatory requirements with clarity and
                      confidence.
                    </p>
                    <p>We work at the intersection of:</p>
                    <ul className="ml-30">
                      <li>EU product regulation</li>
                      <li>Digital Product Passports (DPP)</li>
                      <li>Sustainability and environmental reporting</li>
                      <li>Shopify-based commerce</li>
                      <li>Compliance data management infrastructure</li>
                    </ul>
                    <p>
                      Our mission is to reduce regulatory friction for modern
                      product brands through structured, audit-ready systems.
                    </p>

                    <h4 className="mb-20 mt-40">The Role</h4>
                    <p>
                      We are seeking a{" "}
                      <strong>Compliance Intelligence Lead</strong> to build and
                      maintain our regulatory insight capability.
                    </p>
                    <p>
                      This role is responsible for continuously monitoring
                      emerging regulations, industry conversations, and
                      compliance-related friction across digital communities and
                      trade ecosystems.
                    </p>
                    <p>
                      You will surface patterns, identify risk signals, and
                      translate qualitative insights into actionable strategic
                      intelligence for product and messaging decisions.
                    </p>
                    <p className="font-md">
                      <strong>This is not a legal advisory role.</strong>
                      <br />
                      This is an intelligence and insight function.
                    </p>

                    <h4 className="mb-20 mt-40">Responsibilities</h4>

                    <h5 className="mt-30 mb-15">1. Regulatory Monitoring</h5>
                    <ul className="ml-30">
                      <li>
                        Track emerging EU and UK product compliance regulations
                        (e.g., DPP, EPR, REACH, Green Claims, CSRD).
                      </li>
                      <li>
                        Monitor policy updates from EU Commission sources and
                        relevant trade bodies.
                      </li>
                      <li>
                        Identify regulatory changes likely to impact
                        small-to-mid-sized product businesses.
                      </li>
                    </ul>

                    <h5 className="mt-30 mb-15">
                      2. Community Signal Detection
                    </h5>
                    <ul className="ml-30">
                      <li>
                        Monitor public forums (e.g., Reddit, LinkedIn, industry
                        groups) for compliance-related discussions.
                      </li>
                      <li>
                        Identify recurring pain signals and confusion patterns.
                      </li>
                      <li>
                        Capture verbatim quotes that reflect authentic market
                        sentiment.
                      </li>
                    </ul>

                    <h5 className="mt-30 mb-15">
                      3. Industry-Specific Research
                    </h5>
                    <p>Observe high-friction verticals such as:</p>
                    <ul className="ml-30">
                      <li>Apparel and textiles</li>
                      <li>Furniture and home goods</li>
                      <li>Sustainability-focused brands</li>
                      <li>Cannabis-based medicinal products (CBMPs)</li>
                    </ul>
                    <p>Map compliance pain intensity by sector.</p>

                    <h5 className="mt-30 mb-15">4. Pattern Analysis</h5>
                    <p>
                      Distill daily observations into weekly intelligence
                      briefs.
                    </p>
                    <p>Identify:</p>
                    <ul className="ml-30">
                      <li>Top emerging regulatory themes</li>
                      <li>Operational bottlenecks</li>
                      <li>Language patterns used by founders</li>
                      <li>Shifts in urgency or enforcement perception</li>
                    </ul>

                    <h5 className="mt-30 mb-15">5. Strategic Reporting</h5>
                    <p>
                      Provide a structured weekly intelligence summary
                      including:
                    </p>
                    <ul className="ml-30">
                      <li>Top 3 emerging compliance concerns</li>
                      <li>One unexpected insight</li>
                      <li>One potential product or positioning implication</li>
                      <li>Notable direct quotes</li>
                      <li>Severity assessment (1–5)</li>
                    </ul>

                    <h4 className="mb-20 mt-40">Deliverables</h4>
                    <ul className="ml-30">
                      <li>
                        Daily signal capture log (structured table format)
                      </li>
                      <li>Weekly Compliance Intelligence Brief (1–2 pages)</li>
                      <li>
                        Monthly trend summary (high-level strategic overview)
                      </li>
                    </ul>

                    <h4 className="mb-20 mt-40">Ideal Profile</h4>
                    <ul className="ml-30">
                      <li>Strong research and analytical mindset</li>
                      <li>
                        Comfortable synthesising qualitative signals into
                        patterns
                      </li>
                      <li>
                        Interested in EU regulation, commerce, sustainability,
                        and digital infrastructure
                      </li>
                      <li>Detail-oriented and systematic</li>
                      <li>Self-directed and disciplined</li>
                    </ul>
                    <p>
                      Background in policy, research, compliance, journalism,
                      consulting, or market intelligence is a plus—but not
                      required.
                    </p>

                    <h4 className="mb-20 mt-40">What This Role Is Not</h4>
                    <ul className="ml-30">
                      <li>Not legal advice</li>
                      <li>Not compliance consulting</li>
                      <li>Not marketing content creation</li>
                      <li>Not community management</li>
                    </ul>
                    <p>
                      This is a signal intelligence and pattern recognition
                      function.
                    </p>

                    <h4 className="mb-20 mt-40">Time Commitment</h4>
                    <p>
                      Flexible.
                      <br />
                      Expected 20–40 minutes per day, plus structured weekly
                      reporting.
                    </p>

                    <h4 className="mb-20 mt-40">Why This Role Matters</h4>
                    <p>
                      Regulatory friction is increasing across Europe.
                      Businesses are confused, underprepared, and overwhelmed.
                    </p>
                    <p>OpenThreads exists to bring structure to that chaos.</p>
                    <p>
                      This role ensures our product strategy is grounded in
                      real-world friction—not assumptions.
                    </p>

                    <div className="mt-50">
                      <Link
                        href="/contact"
                        className="btn btn-brand btn-lg font-weight-bold border-radius-5 btn-shadow-brand hover-up text-white"
                      >
                        Express Interest
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Opportunities;
