# Configuration Forestry.io

Forestry.io est maintenant configuré pour votre projet. Voici comment l'utiliser:

## Configuration
- **Dossier de contenu:** `content/articles/`
- **Format:** MDX avec front matter YAML
- **Template:** Gestion automatique des articles

## 📋 Champs éditables

Les articles ont les champs suivants:
- **Titre** (texte, 3-100 caractères)
- **Date de publication** (datetime)
- **Catégorie** (liste prédéfinie)
- **Résumé** (texte, 10-300 caractères)
- **Contenu** (rich text)

## 🚀 Mise en route

1. **Pushez le code** sur GitHub (Forestry.io requiert un repo Git)
   ```bash
   git add .
   git commit -m "Add Forestry configuration"
   git push
   ```

2. **Connectez Forestry.io:**
   - Allez sur https://app.forestry.io
   - Connectez votre repo GitHub
   - Sélectionnez ce projet
   - Cliquez sur "Configure" pour importer les settings

3. **Éditez vos articles:**
   - Accédez à l'interface Forestry
   - Allez dans "Articles"
   - Créez ou modifiez des articles
   - Les changements sont directement committés sur Git

## 📂 Structure des articles

Les articles MDX doivent avoir ce format:

\`\`\`yaml
---
title: "Titre de l'article"
date: "2025-01-15"
categorie: "Foncier agricole"
resume: "Un court résumé de l'article"
---

## Contenu de l'article

Votre contenu en Markdown/MDX...
\`\`\`

## 🔧 Personnalisations possibles

- Modifier `.forestry/templates/article.yml` pour ajouter/supprimer des champs
- Modifier `.forestry/settings.yml` pour changer les collections ou les chemins
- Ajouter des templates supplémentaires pour d'autres types de contenu

## 📚 Ressources

- [Documentation Forestry](https://forestry.io/docs/)
- [Configuration YAML Forestry](https://forestry.io/docs/settings/fields/)
