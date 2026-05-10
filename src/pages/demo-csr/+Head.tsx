import { SeoHead } from "../../presentation/seo";

export function Head() {
  return (
    <>
      {/* CSR page — noindex since content not in HTML source */}
      <SeoHead canonical="https://example.com/demo-csr" noindex />
    </>
  );
}
