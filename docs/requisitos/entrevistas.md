## Entrevista

## Metodologia

A tecnica de entrevista consiste no diálogo entre duas ou mais pessoas no qual uma delas, o entrevistador, busca encontrar respostas para uma série de questões previamente planejadas [1]. A partir das respostas dos entrevistados, é possível elicitar os requisitos esperados pelo usuário.

A entrevista foi dividida em 8 partes, de forma a abranger desde a motivação dos stakeholders a expectativas futuras. Foram utilizadas perguntas abertas e fechadas na sua realização. Abaixo estão listados os tópicos abordados:

1. **Abertura**: apresentação do objetivo da entrevista e consentimento para a realização de anotações.
2. **Contexto e movivação**: definir o estado atual do sistema e as motivações para a realização de um software.
3. **Funcionalidades principais**: quais requisitos funcionais são esperados do sistema.
4. **Usuário e perfis**: definição de quem terá acesso ao sistema dentro do laboratório e a necessidade de diferentes perfis de usuários.
5. **Requisitos não funcionais**: quais requisitos não funcionais são esperados do sistema.
6. **Usabilidade e interface**: expectativas sobre a interface do software.
7. **Expectativas e futuro**: expectativas com relação a primeira versão e quais requisitos poderiam ser implementados futuramente.
8. **Encerramento**: considerações e agradecimentos.

## Resultados

A entrevista foi realizada com dois stakeholders. Abaixo será apresentada as anotações referentes as suas respostas para as respequitivas perguntas previamente definidas:

### Abertura

Foi apresentada a proposta da entrevista ao stakeholder e solicitada sua permissão para a realização de anotações. Os dois entrevistados consederam a permissão.

### Contexto e motivação

#### 1. Você pode me contar como é feito atualmente o posicionamento das antenas?

**Considerações**: Existe um software criado anteriormente para o cálculo da interpolação da trajetória com base na potência recebida, porém o posicionamento da antena deve ser feito manualmente.

#### 2. Quais são as principais dificuldades que enfrentadas nesse processo?

**Considerações**: É necessário ir até o local da antena e realizar seu posicionamento de forma manual, o que além de demandar muita mão de obra causa inconsistências no posicionamento.

#### 3. O que você espera melhorar ou resolver com um novo software?

**Considerações**: Esperasse ter um apontamento automático das antenas com base em um satélite selecionado, além de captar os dados enviados pelo mesmo.

### Funcionalidades principais

#### O sistema deve calcular e enviar automaticamente os ângulos ideais da antena para determinado satélite?

**Considerações**: Sim.

#### Deve permitir inserção manual de coordenadas (latitude/longitude) e dados do satélite?

**Considerações**: Sim.

#### O sistema deve mostrar visualmente (mapa, bússola, gráfico 3D) o posicionamento da antena?

**Considerações**: Sim, porém é secundário. A informação mais relevante seria a posição atual e a próxima posição da antena. Talvez por meio de um gráfico para possibilitar a observação da evolução do posicionamento da antena, futuramente podendo ser complementado com uma gravação em tempo real da antena.

#### Deve permitir salvar configurações de satélites/antenas para uso futuro?

**Considerações**: Sim, para evitar retrabalho.

#### Há necessidade de logs de operação (quem moveu, quando, para onde, falhas)?

**Considerações**: Sim, 