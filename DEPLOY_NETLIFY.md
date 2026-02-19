# 🚀 Guia de Deploy no Netlify

Este guia mostra como implantar o website **Reforço Escolar Inteligente** no Netlify de forma permanente e gratuita.

## 📋 Pré-requisitos

- Conta GitHub (gratuita)
- Conta Netlify (gratuita)
- Repositório Git com o código

## 🔧 Passo 1: Preparar Repositório GitHub

### 1.1 Criar Repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome: `reforco-escolar-web`
3. Descrição: "Website do Reforço Escolar Inteligente"
4. Deixe público (para deploy gratuito)
5. Clique em "Create repository"

### 1.2 Fazer Push do Código

```bash
cd /home/ubuntu/reforco-escolar-web

# Adicionar remote
git remote add origin https://github.com/SEU_USUARIO/reforco-escolar-web.git

# Renomear branch (se necessário)
git branch -M main

# Fazer push
git push -u origin main
```

## 🌐 Passo 2: Deploy no Netlify

### Opção A: Deploy Automático (Recomendado)

1. Acesse [app.netlify.com](https://app.netlify.com)
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Selecione **GitHub**
4. Autorize o Netlify a acessar sua conta GitHub
5. Selecione o repositório `reforco-escolar-web`
6. Configure as opções:
   - **Branch to deploy:** `main`
   - **Build command:** `pnpm install && pnpm build`
   - **Publish directory:** `dist`
7. Clique em **"Deploy site"**

### Opção B: Deploy Manual via CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy (cria site temporário)
netlify deploy --prod

# Ou conectar a um site existente
netlify deploy --prod --site=seu-site-id
```

## 🎯 Passo 3: Configurar Domínio

### Domínio Gratuito Netlify

Seu site receberá um domínio automático como:
- `reforco-escolar-web-abc123.netlify.app`

Para customizar:

1. No painel Netlify, vá para **Site settings**
2. Clique em **Site details**
3. Clique em **Change site name**
4. Digite um novo nome (ex: `reforco-escolar`)
5. Novo domínio: `reforco-escolar.netlify.app`

### Domínio Personalizado (Opcional)

Se tiver um domínio próprio:

1. Em **Site settings** → **Domain management**
2. Clique em **Add custom domain**
3. Digite seu domínio
4. Siga as instruções para configurar DNS
5. Netlify fornece SSL automático

## 🔄 Passo 4: Deploy Contínuo

Após conectar ao GitHub, o Netlify fará deploy automaticamente:

- ✅ Sempre que você fizer push para `main`
- ✅ Builds automáticos
- ✅ Deploy automático se build passar
- ✅ Rollback automático se falhar

### Visualizar Deploys

1. No painel Netlify, vá para **Deploys**
2. Veja histórico de todos os deploys
3. Clique em um deploy para ver detalhes
4. Clique em **Preview** para testar versão anterior

## 📊 Monitoramento

### Analytics

1. Em **Site settings** → **Analytics**
2. Ative **Netlify Analytics** (gratuito)
3. Veja estatísticas de visitantes

### Logs

1. Em **Deploys** → **Deploy log**
2. Veja logs de build e deploy
3. Útil para troubleshooting

## 🔐 Variáveis de Ambiente

### Configurar Variáveis

1. Em **Site settings** → **Build & deploy**
2. Clique em **Environment**
3. Clique em **Edit variables**
4. Adicione suas variáveis:

```
VITE_API_URL = https://seu-backend.com
VITE_APP_NAME = Reforço Escolar Inteligente
```

5. Clique em **Save**

## ✅ Verificar Deploy

Após o deploy:

1. Acesse o domínio do seu site
2. Verifique se tudo carrega corretamente
3. Teste as funcionalidades principais
4. Verifique console do navegador (F12) para erros

## 🐛 Troubleshooting

### Build Falha

**Erro: "pnpm: command not found"**
- Solução: Adicionar `npm install -g pnpm` antes do build

**Erro: "Module not found"**
- Solução: Verificar `package.json` e `pnpm-lock.yaml`

### Site Não Carrega

**Erro 404 em rotas**
- Solução: Verificar `netlify.toml` (deve ter redirect para `index.html`)

**Erro de CORS**
- Solução: Configurar backend para aceitar requisições do domínio

### Performance Lenta

- Verificar tamanho do bundle (deve ser <500KB)
- Ativar compressão gzip (automático no Netlify)
- Usar CDN do Netlify (automático)

## 📈 Otimizações

### Melhorar Performance

```bash
# Analisar bundle
pnpm build -- --analyze

# Otimizar imagens
pnpm add -D vite-plugin-imagemin

# Lazy loading de componentes
import { lazy, Suspense } from 'react'
```

### Melhorar SEO

1. Adicionar meta tags em `index.html`
2. Criar `sitemap.xml`
3. Adicionar `robots.txt`
4. Usar Open Graph tags

## 📝 Próximos Passos

1. ✅ Deploy no Netlify
2. ⬜ Conectar backend
3. ⬜ Configurar autenticação
4. ⬜ Adicionar domínio personalizado
5. ⬜ Monitorar analytics

## 💬 Suporte

- **Documentação Netlify:** https://docs.netlify.com
- **Status do Netlify:** https://www.netlify.com/status
- **Community:** https://community.netlify.com

## 🎉 Pronto!

Seu site está agora disponível permanentemente na internet!

**URL:** `https://seu-site.netlify.app`

---

**Versão:** 1.0.0  
**Última Atualização:** 2026-02-17  
**Status:** ✅ Pronto para Deploy
