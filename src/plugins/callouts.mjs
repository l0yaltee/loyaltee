// Turns GitHub-style alert blockquotes into styled callout boxes (a Sätteri hast plugin):
//
//   > [!WARNING] Optional title
//   > Text of the warning.
//
// Kinds: NOTE, TIP, WARNING. Without a title the kind's name is shown.
const KINDS = { note: 'Note', tip: 'Tip', warning: 'Warning' };
const MARKER = /^\[!(NOTE|TIP|WARNING)\][ \t]*([^\n]*)\n?/;

export const callouts = {
  name: 'loyaltee-callouts',
  element: {
    filter: ['blockquote'],
    visit(node, ctx) {
      const kids = [...node.children];
      const p = kids.find((c) => c.type === 'element');
      const first = p?.tagName === 'p' ? p.children[0] : undefined;
      const m = first?.type === 'text' ? MARKER.exec(first.value) : null;
      if (!m) return;
      const kind = m[1].toLowerCase();
      const rest = first.value.slice(m[0].length);
      const pChildren = [...p.children.slice(1)];
      if (rest) pChildren.unshift({ type: 'text', value: rest });
      const body = kids
        .map((c) => (c === p ? (pChildren.length ? { type: 'element', tagName: 'p', properties: {}, children: pChildren } : null) : c))
        .filter(Boolean);
      ctx.replaceNode(node, {
        type: 'element',
        tagName: 'aside',
        properties: { className: ['callout', `callout--${kind}`] },
        children: [
          { type: 'element', tagName: 'p', properties: { className: ['callout__title'] }, children: [{ type: 'text', value: m[2].trim() || KINDS[kind] }] },
          ...body,
        ],
      });
    },
  },
};
