# BBOOOKING
Application for (simulate) hotels bookings.
É uma aplicação para (simular e) lidar com reservas de hoteis.

# Goals / Objetivos
- Hotels Seeking / Pesquisa de hotéis
- Comparing options / Comparação de opções
- Book rooms / Reserva de Quartos
- Notification / Notificações


# Characters / Caracteristicas
- Vue 3
- TypeScript, JS with strongly type power
- Bootstrapped with Vue CLI
- Pinia as state management
- Eslint + Prettier for formatting rules and code quality

## Getting started / Para começar
Execute these below commands / Execute os seguintes comandos

```sh
nvm install 18.18
nvm use 18.18
git clone git@github.com:brds15/bboooking
cd bboooking
npm install # to install dependencies
npm run serve # open localhost
```

## Diary of developing / Diário do desenvolvimento
Primeiro desafio foi analisar os requisitos para a criação deste MVP. Ao analisar uma boa tecnica que gosto de usar é o DDD, pois ele define e impoe limites e responsabilidade para cada dominio. Em minhas abstrações identifiquei: hotel, hospede(guest) e reserva(booking) como cada um, um domínio da aplicação.
A partir deste ponto, pude separar as principais páginas do projeto. 

Hotels -> HotelsPage - página home da aplicação, dedicada para pesquisar, comparar, filtrar e visualizar hoteis.
Booking -> BookingPage - página dedicada para efetuar a reserva (bem como pagamento).
Guest -> GuestPage - página onde o hóspede pode visualizar a sua reserva e notificações sobre a sua própria reserva.

Cada pagina adota a convenção de usar o Page como sufixo para identificar de forma rápida e fácil em importações a que tipo o componente é pertencente.

Para o design da aplicação adotei Atomic Design, por se de fácil entendimento, já é bem utilizada qualquer tipo e tamanho de software. Esse abordagem ajuda com que cada o componente tenha respondes limitadas ou únicas, uma boa prática no solid.

Com as pages já definidas e layout de interface na cabeça, fica mais claro como vão ser as divisões entre os componentes.

Todo sistema frontent deve ter os seus alicerces bem definidos. Isso quer dizer, que os containers pais devem estar além de bem definidos, estar claro no código quais são e as suas respectivas responsabilidades. Para isso, criei a pasta 'layouts' dentro de components.
A pasta Layout foi definida para ter componentes que compoe um layout padrão do sistema. Estes que são compartilhados independente da página. Como Header, Content, Footer.

Já as demais divisões intercomponentes seguem a divisão do Atomic Desing: atoms -> molecules -> organisms -> templates -> pages

Componentes de médio nível: molecules, organisms e templates, seguem a convenção de ter uma pasta com o nome de sua page, caso seja utilizada somente por uma page. Caso seja multicompartilhado, indepedentemente do componente, não utiliza esta convenção.
Como nos componentes dentro de 'atoms', que são do mais baixo nívels (nativo HTML) e usado por todo e qualquer componente.

Escolhi apenas um breakpoint para permitir o layout responsivel: 992px. Para diminuir o escopo e abrangencia, e com esta medida os containers já entram numa escala de tela para pequenos monitores e tabletes que podem ter um bom dimensionamento somado a práticas do uso de flex-box e grid-layout.

Na criação do formuário para busca de hoteis foi criado componentes de inputs para que sejam reaproveitados no formulario de reserva de quartos. O stado foi definido como local, pois são parametros que vão ser usados para a busca a partir do próprio formulário.

Decidi fazer o gerenciamento de stado do formulário de forma nativa com a estrutura de {campo: {valor, erro}, pois já é suficiente para esta aplicação. Zod foi escolhido para realizar o schema handler.
## To future / Para o futuro
