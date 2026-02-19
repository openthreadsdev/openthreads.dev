import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  schema: object | object[];
}

export function StructuredData({ schema }: StructuredDataProps) {
  const schemaArray = Array.isArray(schema) ? schema : [schema];

  return (
    <Helmet>
      {schemaArray.map((s, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
