import { SeoHead, JsonLd } from "../../presentation/seo";

export function Head() {
  return (
    <>
      <SeoHead canonical="https://example.com/" type="website" />
      <meta name="theme-color" content="#201b5a" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
      <JsonLd
        data={{
          type: "WebPage",
          name: "Dummy LMS — Platform Pembelajaran Sekolah Digital",
          url: "https://example.com/",
          description:
            "Satu platform untuk seleksi, pelatihan, dan kompetisi siswa — dari ruang kelas hingga panggung internasional.",
        }}
      />
      <JsonLd
        data={{
          type: "BreadcrumbList",
          items: [{ name: "Beranda", url: "https://example.com/" }],
        }}
      />
    </>
  );
}
