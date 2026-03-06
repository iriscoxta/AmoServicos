# AmoServiços

Plataforma web para **descoberta e conexão com profissionais de serviços locais**.

A **AmoServiços** funciona como um catálogo de serviços da cidade, permitindo que moradores encontrem facilmente profissionais como diaristas, encanadores, eletricistas, montadores de móveis, pintores, jardineiros, entre outros.

A ideia surgiu da necessidade comum de quem chega em uma cidade nova e **não sabe onde encontrar contatos confiáveis para serviços do dia a dia**.

A plataforma centraliza esses profissionais em um só lugar, permitindo visualizar perfis, avaliações e entrar em contato de forma rápida.


# Visão do Produto

A proposta da AmoServiços é ser um **diretório moderno de serviços locais**, focado em:

* descoberta rápida de profissionais
* organização por categorias
* visualização de perfis detalhados
* contato fácil com prestadores
* experiência simples e intuitiva

O objetivo é aproximar **moradores e profissionais da mesma cidade**, fortalecendo a economia local e facilitando a contratação de serviços.


# Funcionalidades

## Para usuários

* Buscar profissionais por categoria
* Filtrar por bairro ou região
* Visualizar perfil completo do profissional
* Ver avaliações de outros clientes
* Favoritar profissionais
* Entrar em contato rapidamente

## Para profissionais

* Cadastro na plataforma
* Criação de perfil profissional
* Adicionar serviços oferecidos
* Upload de fotos de trabalhos
* Receber contatos de clientes
* Gerenciar informações no dashboard


# Principais Páginas

A aplicação possui as seguintes áreas principais:

### Home

Página inicial com:

* barra de busca por serviço
* categorias populares
* profissionais em destaque
* explicação de como a plataforma funciona

### Busca de profissionais

Tela com listagem de prestadores contendo:

* filtros por categoria
* filtros por região
* ordenação por avaliação ou relevância
* cards com informações resumidas

### Perfil do profissional

Página detalhada com:

* foto e informações básicas
* descrição profissional
* serviços oferecidos
* galeria de trabalhos
* avaliações de clientes
* opções de contato

### Cadastro de profissionais

Fluxo guiado de onboarding com múltiplas etapas:

* dados pessoais
* dados profissionais
* serviços oferecidos
* disponibilidade
* imagens de trabalhos

### Área do profissional

Dashboard para gerenciar:

* perfil
* serviços
* solicitações recebidas
* avaliações
* galeria de imagens

### Área do cliente

Permite:

* gerenciar favoritos
* visualizar histórico de contatos
* atualizar dados da conta


# Tecnologias utilizadas

Frontend construído com tecnologias modernas do ecossistema JavaScript.

* **React**
* **TypeScript**
* **Tailwind CSS**

Bibliotecas e conceitos utilizados:

* componentização
* design responsivo
* arquitetura escalável
* UI baseada em componentes
* dados mockados para demonstração


# Estrutura do projeto

Exemplo de organização de pastas:

```
src
 ├── components
 │   ├── ui
 │   ├── cards
 │   ├── layout
 │   └── forms
 │
 ├── pages
 │   ├── Home
 │   ├── Search
 │   ├── ProfessionalProfile
 │   ├── Categories
 │   ├── Login
 │   ├── Register
 │   ├── DashboardClient
 │   └── DashboardProfessional
 │
 ├── hooks
 │
 ├── mocks
 │
 ├── utils
 │
 ├── types
 │
 └── styles
```

Essa estrutura facilita:

* escalabilidade
* reutilização de componentes
* organização da aplicação


# Design e UX

A interface foi projetada com foco em:

* simplicidade
* clareza visual
* boa experiência de navegação
* responsividade

Principais características:

* layout clean
* tipografia moderna
* cards organizados
* cores suaves e confiáveis
* foco em acessibilidade
* mobile-first


# Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/amoservicos.git
```

### 2. Acessar a pasta do projeto

```bash
cd amoservicos
```

### 3. Instalar dependências

```bash
npm install
```

ou

```bash
yarn install
```

### 4. Rodar o projeto

```bash
npm run dev
```

ou

```bash
yarn dev
```

### 5. Acessar no navegador

```
http://localhost:3000
```


# Responsividade

A aplicação foi desenvolvida para funcionar em:

* Desktop
* Tablet
* Mobile

Principais adaptações mobile:

* menu hambúrguer
* filtros em drawer
* cards adaptáveis
* botões de contato acessíveis


# Dados mockados

Para demonstração do frontend, a aplicação utiliza dados simulados como:

* profissionais
* categorias de serviço
* avaliações de clientes
* bairros e regiões
* preços aproximados
* mensagens e solicitações

Esses dados podem ser substituídos posteriormente por uma API real.


# Roadmap

Possíveis evoluções futuras da plataforma:

* backend completo
* autenticação real
* sistema de mensagens entre cliente e profissional
* avaliações verificadas
* integração com WhatsApp
* geolocalização
* sistema de pagamentos
* planos para profissionais
* verificação de prestadores
* aplicativo mobile


# Contribuição

Contribuições são bem-vindas.

Caso queira contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature

```
git checkout -b minha-feature
```

3. Commit suas alterações

```
git commit -m "feat: minha nova funcionalidade"
```

4. Envie para o repositório

```
git push origin minha-feature
```

5. Abra um Pull Request



# Licença

Este projeto está sob a licença MIT.



# Autor

Projeto desenvolvido por **Iris Costa**.


