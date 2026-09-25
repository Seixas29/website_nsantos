import { siteConfig } from "@/data/site";

const BASE = "https://nsantos.vercel.app";

export function LabJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ResearchOrganization",
        "@id": `${BASE}/#organization`,
        name: siteConfig.name,
        email: siteConfig.email,
        url: BASE,
        logo: `${BASE}/brand/og.png`,
        image: `${BASE}/brand/og.png`,
        description: siteConfig.description.en,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Avenida Professor Egas Moniz",
          addressLocality: "Lisbon",
          postalCode: "1649-028",
          addressCountry: "PT",
        },
        parentOrganization: {
          "@type": "ResearchOrganization",
          name: "Gulbenkian Institute for Molecular Medicine",
          alternateName: "GIMM",
          url: "https://gimm.pt/",
        },
        employee: {
          "@type": "Person",
          name: "Nuno C. Santos",
          jobTitle: "Group Leader",
          email: siteConfig.email,
          identifier: siteConfig.social.orcid.url,
          sameAs: [siteConfig.social.orcid.url],
        },
        sameAs: [
          siteConfig.social.orcid.url,
          siteConfig.external.gimmLab,
          siteConfig.external.insectary.url,
          siteConfig.external.onevec.url,
          siteConfig.external.surveillance.url,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        name: siteConfig.name,
        url: BASE,
        inLanguage: ["en", "pt"],
        publisher: { "@id": `${BASE}/#organization` },
        description: siteConfig.description.en,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
