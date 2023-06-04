Estou buscando desenvolver projetos pequenos de ponta a ponta para estudos que durem entre 1-2 dias e hoje resolvi desenvolver uma solução bastante comum. Um encurtador de URL!

Essa é uma versão para estudos, deveria ter um domínio curto configurado para que fizesse mais sentido, mas o foco é a lógica e também poderia ter algumas features como: autenticação, gerenciamento das urls, configuração de DNS personalizado, etc.

No back end é basicamente uma API com banco de dados PostgreSQL com Docker, Prisma para o versionamento do banco, TypeScript e Express.js.

No front end optei por usar o React com TypeScript, Tailwind CSS para agilizar a estilização e NextJS para usar o SSR do mesmo para o redirecionamento da URL encurtada.
