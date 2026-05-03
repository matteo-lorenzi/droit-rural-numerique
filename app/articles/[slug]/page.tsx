import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PageProps {
  params: { slug: string };
}

export default async function ArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const filePath = path.join(process.cwd(), "content/articles", `${resolvedParams.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{data.date}</p>
      <article className="prose prose-lg">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}