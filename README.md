# 🎓 Reforço Escolar Inteligente - Website

Website responsivo do aplicativo educacional **Reforço Escolar Inteligente**.

## 🚀 Início Rápido

### Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Abrir em http://localhost:5173
```

### Build para Produção

```bash
# Construir aplicação
pnpm build

# Visualizar build localmente
pnpm preview
```

## 📋 Requisitos

- Node.js 18+
- pnpm (ou npm/yarn)

## 🌐 Deploy no Netlify

### Opção 1: Via Interface Web (Recomendado)

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Conecte seu repositório GitHub
4. Deixe as configurações padrão (Netlify detecta automaticamente)
5. Clique em "Deploy"

### Opção 2: Via CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --prod
```

## 📁 Estrutura do Projeto

```
src/
├── App.tsx           # Componente principal
├── App.css           # Estilos do app
├── index.css         # Estilos globais
└── main.tsx          # Ponto de entrada

public/              # Arquivos estáticos
netlify.toml         # Configuração do Netlify
vite.config.ts       # Configuração do Vite
tsconfig.json        # Configuração do TypeScript
```

## 🎨 Recursos

- ✅ Interface responsiva (mobile, tablet, desktop)
- ✅ 6 matérias educacionais
- ✅ 4 níveis de dificuldade
- ✅ Sistema de progresso visual
- ✅ Dashboard de desempenho
- ✅ Suporte offline (via PWA)

## 🔧 Configuração

### Variáveis de Ambiente

Crie arquivo `.env.local`:

```env
VITE_API_URL=https://seu-backend.com
VITE_APP_NAME=Reforço Escolar Inteligente
VITE_APP_VERSION=1.0.0
```

## 📱 Funcionalidades

### Telas Principais

1. **Home** - Dashboard com progresso do aluno
2. **Matérias** - Grade de 6 disciplinas
3. **Fases** - 4 níveis de dificuldade por matéria
4. **Quiz** - Questões com feedback imediato
5. **Resultados** - Análise de desempenho
6. **Perfil** - Informações do usuário

### Gamificação

- 🎯 Sistema de metas
- ⭐ Badges e conquistas
- 📈 Ranking de progresso
- 🔥 Sequência de dias
- 💎 Níveis progressivos

## 🧪 Testes

```bash
# Executar testes
pnpm test

# Testes com cobertura
pnpm test:coverage
```

## 🐛 Troubleshooting

### Build falha
```bash
# Limpar cache
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Porta 5173 em uso
```bash
# Usar porta diferente
pnpm dev -- --port 3001
```

### Problemas de CORS
- Verificar configuração de proxy em `vite.config.ts`
- Certificar que backend permite requisições do domínio

## 📚 Documentação

- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Netlify](https://docs.netlify.com)

## 📝 Licença

Todos os direitos reservados © 2026 Reforço Escolar Inteligente

## 💬 Suporte

- Issues: GitHub Issues
- Email: suporte@reforcoescolar.com.br
- Documentação: Veja `DOWNLOAD_E_INSTALACAO.md`

---

**Versão:** 1.0.0  
**Última Atualização:** 2026-02-17  
**Status:** ✅ Pronto para Produção
