import { createClient } from "next-sanity";

const santiy = createClient({
  projectId: "5o717i87",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-07-01",
});



