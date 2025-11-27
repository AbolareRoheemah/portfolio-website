import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Roheemah Abolare",
    "alternateName": "AbolareRoheemah",
    "description": "Frontend and Blockchain Developer specializing in React, Next.js, Vue, Solidity, and Rust",
    "image": "https://abolare-roheemah.vercel.app/profile-image.jpg",
    "url": "https://abolare-roheemah.vercel.app",
    "email": "roheemahabo@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "Nigeria"
    },
    "jobTitle": "Frontend & Blockchain Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "sameAs": [
      "https://github.com/AbolareRoheemah",
      "https://www.linkedin.com/in/abolareroheemah/",
      "https://x.com/Rhorheeymarh",
      "https://rhorheeymarh.hashnode.dev/",
      "https://medium.com/@roheemahabo"
    ],
    "knowsAbout": [
      "Frontend Development",
      "Blockchain Development",
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Solidity",
      "Rust",
      "Smart Contracts",
      "Web3",
      "DApps",
      "Technical Writing"
    ],
    "award": [
      "3rd Place - AYA HQ Hackathon 2024",
      "3rd Place - ICP Hub Hackathon 2024",
      "3rd Place - DappsOverDapps Hackathon 2024"
    ]
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
