import { siteConfig } from "@/data/site";

export function LabJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: siteConfig.name,
    email: siteConfig.email,
    url: "https://nsantos.vercel.app",
    parentOrganization: {
      "@type": "Organization",
      name: "Gulbenkian Institute for Molecular Medicine",
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
    sameAs: [siteConfig.social.orcid.url, siteConfig.external.gimmLab],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
