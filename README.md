## Mosaic Harbor Ventures · Landing + Blog MDX

Landing page em Next.js 16/App Router com narrativa completa do modelo híbrido de consultoria e uma área de blog alimentada por MDX.

### Stack principal
- Next.js 16 + React 19
- Tailwind CSS 4 (via `@tailwindcss/postcss`)
- Tipografia via `next/font` (Space Grotesk + Geist Mono)
- Blog configurado com `@next/mdx`

---

## Scripts

```bash
npm install        # instala dependências
npm run dev        # sobe o servidor em http://localhost:3000
npm run build      # build de produção
npm run start      # serve o build
npm run lint       # checa eslint
```

---

## Estrutura de pastas relevante

```
src/
  app/
    page.tsx                 # landing principal
    blog/
      layout.tsx             # layout compartilhado do blog
      page.tsx               # índice/listagem dos artigos
      revenue-architecture/
        page.mdx             # exemplo de artigo em MDX
      stack-integrado/
        page.mdx             # segundo artigo em MDX
```

---

## Como criar um novo artigo em MDX

1. Crie uma pasta com o slug desejado dentro de `src/app/blog/` e adicione `page.mdx`.
2. No início do arquivo exporte `metadata` e `summary`, seguindo o padrão:

```mdx
export const metadata = {
  title: "Título do artigo",
  description: "Descrição curta usada no SEO e cards",
  date: "2025-01-20",
  readingTime: "7 min",
  tags: ["Categoria", "Tema"],
};

export const summary = "Resumo exibido na listagem.";
```

3. Escreva o conteúdo usando componentes HTML/MDX. Utilize a classe `mdx-content` para manter o visual consistente:

```mdx
<article className="mdx-content">
  <h2>Seção</h2>
  <p>Texto...</p>
</article>
```

4. Importe o novo artigo no índice (`src/app/blog/page.tsx`) e inclua o slug na lista `blogPosts` para que apareça na listagem.

---

## Estilo e componentes

- `blog/layout.tsx` aplica o mesmo background da landing e inclui CTA rápido.
- `.mdx-content` em `globals.css` define tipografia, tabelas e blockquotes dos posts.
- O menu da landing possui link direto para `/blog`.

---

## Dicas

- Mantenha datas no formato ISO (`YYYY-MM-DD`) para garantir ordenação correta.
- Use `npm run lint` antes de abrir PRs/deploys.
- Para CTAs externos (agenda, diagnóstico), atualize os links em `blog/layout.tsx` e `app/page.tsx`.
