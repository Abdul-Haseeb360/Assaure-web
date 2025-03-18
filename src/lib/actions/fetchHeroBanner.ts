import { client } from "@/sanity/lib/client";

export async function getHeroBanner() {
  const query = `*[_type == "heroBanner"]{
_id,
    title,
    description,
    cta {
      buttonText,
      buttonLink
    }
}`;
return await client.fetch(query)
}
