/**
 * Renders a schema.org block. Every string in here is derived from content the
 * site already states on the page, so the markup can never claim more than the
 * visible copy does.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Escaping `<` stops a stray `</script>` inside content from closing the tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
