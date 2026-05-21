# Graphify Knowledge Graph

Graphify mengubah codebase Go menjadi knowledge graph yang bisa ditelusuri, di-query, dan diekspor.

## Init graph

```bash
smara graphify init ./cmd --name smara-cmd
```

## Query natural language

```bash
smara graphify query "auth flow" --name smara-cmd --depth 2
```

## Path dan explain

```bash
smara graphify path "A" "B" --name smara-cmd
smara graphify explain "NodeID" --name smara-cmd --depth 1
```

## Export

```bash
smara graphify export --name smara-cmd --format json
smara graphify export --name smara-cmd --format svg
smara graphify export --name smara-cmd --format graphml
smara graphify export --name smara-cmd --format neo4j
```

## Manage graph

```bash
smara graphify list
smara graphify delete smara-cmd
```

## Agent context

Ketika agen mendeteksi pertanyaan tentang codebase, Smara dapat menginjeksi subgraph relevan ke system prompt agar jawaban lebih context-aware.
