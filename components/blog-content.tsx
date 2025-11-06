"use client"

// ✅ Updated data structure to match the new multi-block section format
interface BlogBlock {
  type: "paragraph" | "list" | "image" | "quote" | "custom" | string
  content?: string
  items?: string[]
  imageUrl?: string
  quote?: string
  html?: string
}

interface BlogSection {
  title?: string
  blocks: BlogBlock[]
}

interface BlogContentProps {
  intro: string
  sections: BlogSection[]
}

export function BlogContent({ intro, sections }: BlogContentProps) {
  return (
    <article className="prose prose-invert max-w-none space-y-8" style={{ whiteSpace: "pre-line" }}>
      {/* === INTRODUCTION === */}
      <section id="intro">
        <p className="text-lg leading-relaxed text-foreground" style={{ whiteSpace: "pre-line" }}>{intro}</p>
      </section>

      {/* === FLEXIBLE SECTIONS === */}
      {sections.map((section, index) => (
        <section key={index} id={`section-${index}`} className="space-y-4" style={{ whiteSpace: "pre-line" }}>
          {section.title && (
            <h2 className="text-2xl font-bold text-foreground md:text-3xl" style={{ whiteSpace: "pre-line" }}>
              {section.title}
            </h2>
          )}

          {/* Render all blocks inside a section */}
          {section.blocks.map((block, bIndex) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p
                    key={bIndex}
                    className="text-base leading-relaxed text-muted-foreground" style={{ whiteSpace: "pre-line" }}
                  >
                    {block.content}
                  </p>
                )

              case "list":
                return (
                  <ul key={bIndex} className="space-y-3 pl-6" style={{ whiteSpace: "pre-line" }}>
                    {block.items?.map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground" style={{ whiteSpace: "pre-line" }}>
                        <span className="mt-1.5 inline-flex h-2 w-2 rounded-full bg-primary flex-shrink-0" style={{ whiteSpace: "pre-line" }}/>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )

              case "image":
                return (
                  <div key={bIndex} className="flex justify-center" style={{ whiteSpace: "pre-line" }}>
                    <img
                      src={block.imageUrl || ""}
                      alt={section.title || "Blog Image"}
                      className="rounded-xl shadow-md" style={{ whiteSpace: "pre-line" }}
                    />
                  </div>
                )

              case "quote":
                return (
                  <blockquote
                    key={bIndex}
                    className="border-l-4 border-primary pl-4 italic text-muted-foreground" style={{ whiteSpace: "pre-line" }}
                  >
                    “{block.quote}”
                  </blockquote>
                )

              case "custom":
                return (
                  <div
                    key={bIndex}
                    className="text-muted-foreground" style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{ __html: block.html || "" }}
                  />
                )

              default:
                return null
            }
          })}
        </section>
      ))}

      {/* === CONCLUSION === */}
      <section id="conclusion" className="space-y-4 border-t border-border pt-8" style={{ whiteSpace: "pre-line" }}>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl" style={{ whiteSpace: "pre-line" }}>
          Conclusion
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground" style={{ whiteSpace: "pre-line" }}>
          The integration of AI into web development is not a distant future—
          it's happening now. The future belongs to those who amplify creativity
          through AI while preserving the human touch.
        </p>
      </section>
    </article>
  )
}
