# História de Usuários

O presente artefato tem por objetivo descrever as histórias de usuários associadas aos requisitos elicitados anteriormente, as quais incluem a descrição, critérios de aceitação, regras de negócio, dependências, estimativa e prioridade.

## Metodologia 

As Histórias de Usuário são a espinha dorsal da descrição de requisitos em metodologias ágeis. Elas visam capturar as necessidades reais dos usuários, focar no valor de negócio, facilitar a comunicação entre stakeholders e equipes técnicas, permitir a evolução contínua do produto e garantir a testabilidade de cada funcionalidade. 

### Definição da História

Elas se iniciam com uma frase concisa que segue o modelo padrão: "Como [tipo de usuário], eu quero [o que ele precisa] para [benefício]". Este formato garante que a funcionalidade esteja ancorada em uma necessidade genuína do usuário e entregue um valor de negócio perceptível.

### Detalhamento e Regras de Negócio

Cada história é complementada por uma descrição detalhada, que esclarece as Regras de Negócio e o comportamento esperado da funcionalidade. As regras devem ser redigidas descrevendo o mecanismo lógico universal que o sistema deve seguir (o que deve ser sempre verdadeiro), e não como a funcionalidade será implementada.

Para garantir a rastreabilidade, uma Regra de Negócio pode — e deve — se relacionar com uma ou várias Histórias de Usuário e requisitos, mas jamais se confundir com eles. Enquanto a história de usuário descreve uma necessidade de valor, a Regra de Negócio descreve a lógica fundamental que sustenta o funcionamento correto do negócio.

### Critérios de Aceitação e BDD

As histórias também contam com os Critérios de Aceitação, que são as condições objetivas que precisam ser satisfeitas para que a história seja considerada completa. Para descrever esses critérios de forma precisa e verificável, adotamos o BDD (Behavior-Driven Development - Desenvolvimento Orientado ao Comportamento).

O BDD utiliza a sintaxe padronizada Gherkin, composta pelos termos Given, When e Then (Dado, Quando e Então), para descrever situações específicas de forma estruturada. Dessa forma, cada História de Usuário transcende o nível conceitual, sendo acompanhada por uma descrição precisa do comportamento esperado, que serve como base para testes automatizados.

### Priorização e Estimativa de Esforço (Pontos de História)

No contexto ágil, é essencial que a história receba uma Estimativa de Esforço (frequentemente expressa em Pontos de História). Os Pontos de História não representam horas de trabalho, mas sim uma combinação de três fatores principais: complexidade, risco e volume de trabalho. Geralmente, a numeração segue a sequência de Fibonacci modificada (1, 2, 3, 5, 8, 13...), refletindo o aumento da incerteza à medida que a tarefa se torna maior.

Além disso, cada história deve ter uma prioridade atribuída para orientar o sequenciamento do desenvolvimento. Essa etapa foi realizada utilizando a metodologia Moscow no artefato de [priorização](./priorizacao.md).

Por fim, quando aplicável, devem ser listadas suas dependências com outras histórias.

### Modelo

A baixo temos o modelo que será utilizado para a definição das histórias de usuário: 

|  Identificador  | Descrição                             | 
| -----------------|---------------------------------------| 
|  ID do requisito           | - |
|  História           | - |
|  Descrição           | - |
|  Regras de negócio           | - |
|  Critérios de aceitação          | - |
|  Pontuação           | - |
|  Prioridade           | - |
|  Dependência           | - |


<center>
    <figcaption>Tabela 1 - Modelo de história do usuário. Fonte: Autor.</figcaption>
</center>

## Resultados

### RF01 - Visualizar o último operador da antena

<table>
  <thead>
    <tr>
      <th>Identificador</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <!-- Id do requisito -->
    <tr>
      <td>ID do requisito</td>
      <td><a href="./requisitos_elicitados.md">[RF01]</td>
    </tr>
    <!-- História -->
    <tr>
      <td>História</td>
      <td>Como operador do sistema, eu quero visualizar quem foi a última pessoa que moveu a antena, para acompanhar o histórico de operações e identificar responsabilidades.</td>
    </tr>
    <!-- Descrição -->
    <tr>
      <td>Descrição</td>
      <td>Ao acessar a tela de monitoramento da antena o usuário deve ser capaz de ter informações sobre o último usuário que realizou uma rotina na respectiva antena.</td>
    </tr>
    <!-- Regras de negócio -->
    <tr>
      <td rowspan="4">Regras de negócio</td>
      <td>
        <ul>
        <b>Toda movimentação da antena deve gerar um registro contendo:</b>
            <li>usuário responsável,</li>
            <li>data e hora da operação,</li>
            <li>tipo de movimentação realizada.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Registro mais recente prevalece</b>
            <li>Sempre que o sistema precisar exibir o último operador, deve selecionar o registro com data mais recente.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Impossibilidade de alterar logs</b>
            <li>Nenhum usuário pode editar ou remover manualmente os registros de movimentação da antena.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Logs devem ser persistentes</b>
            <li>Os registros de movimentação devem ser armazenados de forma permanente e não podem ser perdidos após reinicialização do sistema.</li>
        </ul>
      </td>
    </tr>
    <!-- Critérios de aceitação -->
    <tr>
      <td rowspan="3">Critérios de aceitação</td>
      <td>
        <b>Último operador exibido corretamente</b>
        <ul>
            <li><b>Dado</b> que acesso a tela de monitoramento da antena,</li>
            <li><b>Quando</b> o sistema carregar as informações,</li>
            <li><b>Então</b> deve ser exibido o nome do último usuário que realizou o movimento.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Nenhum registro de movimentação</b>
        <ul>
            <li><b>Dado</b> que a antena ainda não teve movimentações,</li>
            <li><b>Quando</b> o sistema procurar pelo operador,</li>
            <li><b>Então</b> deve mostrar a mensagem “Nenhuma movimentação registrada”.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Falha ao consultar o log</b>
        <ul>
            <li><b>Dado</b> que ocorre um erro na consulta dos dados,</li>
            <li><b>Quando</b> a tela carregar,</li>
            <li><b>Então</b> o sistema deve exibir uma mensagem de “Erro ao carregar histórico”.</li>
        </ul>
      </td>
    </tr>
    <!-- PONTUAÇÃO -->
    <tr>
      <td>Pontuação</td>
      <td>
        > 3
        <ul>
          <li>Complexidade baixa.</li>
          <li>Precisa apenas consultar e exibir um log.</li>
          <li>Quase nenhuma incerteza técnica.</li>
        </ul>
      </td>
    </tr>
    <!--  -->
   <tr>
      <td>Prioridade</td>
      <td>Could</td>
    </tr>
    <tr>
      <td>Depedência</td>
      <td>-</td>
    </tr>
  </tbody>
</table>


<center>
    <figcaption>Tabela 2 - História do usuário: requisito RF01 . Fonte: Autor.</figcaption>
</center>
---

### RF02 - Exibir falhas de posicionamento

<table>
  <thead>
    <tr>
      <th>Identificador</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <!-- Id do requisito -->
    <tr>
      <td>ID do requisito</td>
      <td><a href="./requisitos_elicitados.md">[RF02]</td>
    </tr>
    <!-- História -->
    <tr>
      <td>História</td>
      <td>Como operador do sistema, eu quero visualizar quem foi a última pessoa que moveu a antena, para acompanhar o histórico de operações e identificar responsabilidades.</td>
    </tr>
    <!-- Descrição -->
    <tr>
      <td>Descrição</td>
      <td>
          Ao acessar a tela de monitoramento da antena o usuário deve ser capaz de ter informações sobre falhas no posicionamento.
      </td>
    </tr>
    <!-- Regras de negócio -->
    <tr>
      <td rowspan="8">Regras de negócio</td>
      <td>
        <ul>
        <b>Comparação entre posição esperada e real</b>
            <li>
            O sistema deve calcular continuamente a diferença entre o posicionamento esperado da antena e o posicionamento real recebido pelos sensores.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Definição de falha por limite de tolerância</b>
            <li>
            Uma falha deve ser registrada sempre que a diferença entre esperado e real ultrapassar o limite permitido (por exemplo, > 0,5°). Esse limite deve ser definido e fixado pela equipe técnica.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Atualização automática do status da antena</b>
            <li>
            O status da antena (normal / falha) deve ser atualizado automaticamente sempre que novos dados forem recebidos do hardware.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Registro obrigatório de falhas</b>
            <li>
            Toda falha detectada deve gerar um registro contendo data, hora, valor medido, valor esperado e tipo da inconsistência.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Exibição prioritária de falhas</b>
            <li>
            Caso a antena esteja em modo “falha”, este status deve ter prioridade sobre qualquer outro status visual.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Proibição de edição dos registros de falha</b>
            <li>
            Nenhum usuário, seja comum ou administrador, pode alterar ou remover manualmente o registro de falhas detectadas.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Falha só pode desaparecer mediante nova medição válida</b>
            <li>
            O status de falha só deve ser removido quando o sistema receber uma nova leitura dentro da tolerância permitida.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Falhas devem ser persistentes</b>
            <li>
            Todos os registros de falha devem ser armazenados de forma permanente e não podem ser perdidos após reinicialização do sistema. Elas devem ser mantidas no sistema durante 1 mês.
            </li>
        </ul>
      </td>
    </tr>
    <!-- Critérios de aceitação -->
    <tr>
      <td rowspan="4">Critérios de aceitação</td>
      <td>
        <b>Exibir falha de posicionamento</b>
        <ul>
            <li><b>Dado</b> que estou na tela de monitoramento,</li>
            <li><b>Quando</b> a antena apresentar falha no posicionamento,</li>
            <li><b>Então</b> o sistema deve mostrar claramente um alerta indicando a falha.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Nenhuma falha detectada</b>
        <ul>
            <li><b>Dado</b> que a antena está funcionando normalmente,</li>
            <li><b>Quando</b> a tela carregar,</li>
            <li><b>Então</b> o status deve aparecer como “Operando normalmente”.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Atualização automática do status</b>
        <ul>
            <li><b>Dado</b> que a antena envia um novo status,</li>
            <li><b>Quando</b> houver alteração (falha → normal ou normal → falha),</li>
            <li><b>Então</b> o alerta deve ser atualizado automaticamente sem recarregar a página.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Erro ao consultar o status</b>
        <ul>
            <li><b>Dado</b> que ocorre um problema na comunicação,</li>
            <li><b>Quando</b> o sistema tentar buscar o status,</li>
            <li><b>Então</b> deve exibir “Status indisponível” ou mensagem equivalente.</li>
        </ul>
      </td>
    </tr>
    <!-- PONTUAÇÃO -->
    <tr>
      <td>Pontuação</td>
      <td> 
          > 5
          <ul>
            <li>Análise do status da antena é mais complexa.</li>
            <li>Depende de comunicação com hardware ou integrações.</li>
            <li>Requer tratamento de estados e atualização dinâmica</li>
          </ul>
      </td>
    </tr>
    <!--  -->
   <tr>
      <td>Prioridade</td>
      <td>Should</td>
    </tr>
    <tr>
      <td>Depedência</td>
      <td>
        <ul>
          <li>[RF09] - Cálculo de posicionamento.</li>
          <li>Entrada contínua dos dados do hardware.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<center>
    <figcaption>Tabela 3 - História do usuário: requisito RF02. Fonte: Autor.</figcaption>
</center>
---

### RF03 - Gestão de Perfis de Usuário

<table>
  <thead>
    <tr>
      <th>Identificador</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <!-- Id do requisito -->
    <tr>
      <td>ID do requisito</td>
      <td><a href="./requisitos_elicitados.md">[RF03]</td>
    </tr>
    <!-- História -->
    <tr>
      <td>História</td>
      <td>  
        Como administrador da plataforma,
eu quero que o sistema possua perfis de usuário distintos (administrador e usuário normal),
para garantir que apenas pessoas autorizadas possam realizar ações críticas, enquanto usuários comuns tenham acesso apenas às funcionalidades necessárias para operação diária.</td>
    </tr>
    <!-- Descrição -->
    <tr>
      <td>Descrição</td>
      <td>
          O sistema deve implementar dois tipos de perfis: administrador e usuário normal (operador). Cada perfil deve possuir permissões específicas, limitando ou permitindo determinadas funcionalidades. O administrador deve ter acesso completo, incluindo cadastro, controle e remoção de usuários, além de visualização de dados sensíveis do sistema. O usuário normal deve possuir acesso restrito, limitado ao uso operacional das antenas e ferramentas de monitoramento. A definição do perfil deve ocorrer no momento do cadastro e deve influenciar imediatamente todas as telas, botões e ações disponíveis ao usuário. O sistema deve garantir que ações críticas só possam ser executadas por administradores, impedindo acessos indevidos ou operações perigosas.
      </td>
    </tr>
    <!-- Regras de negócio -->
    <tr>
      <td rowspan="5">Regras de negócio</td>
      <td>
        <ul>
        <b>Níveis distintos de permissão</b>
            <li>
            A plataforma deve fornecer permissões separadas: administradores têm acesso total e usuários normais têm acesso apenas às funcionalidades operacionais.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Bloqueio de ações restritas</b>
            <li>
            Qualquer funcionalidade que altere configurações sensíveis, modifique usuários, acesse logs confidenciais ou atue diretamente na estrutura do sistema deve ser permitida somente para perfis administrativos.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Associação fixa ao perfil</b>
            <li>
            Cada usuário deve ser vinculado a um perfil no momento do cadastro, e esse perfil deve definir todas as permissões. A mudança de perfil só pode ser executada por administradores.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Controle visual na interface</b>
            <li>
            Funcionalidades restritas devem aparecer desabilitadas ou ocultas para usuários normais, evitando tentativas de acesso e reduzindo erros de operação.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Registro de ações administrativas</b>
            <li>
            Toda ação crítica realizada por um administrador (ex.: criação ou remoção de usuários, alteração de configurações) deve ser registrada em log para auditoria.
            </li>
        </ul>
      </td>
    </tr>
    <!-- Critérios de aceitação -->
    <tr>
      <td rowspan="4">Acesso restrito por perfil</td>
      <td>
        <b>Exibir clima atual</b>
        <ul>
            <li><b>Dado</b> que estou logado como usuário normal,</li>
            <li><b>Quando</b> tentar acessar uma funcionalidade administrativa,</li>
            <li><b>Então</b> o sistema deve negar acesso ou ocultar a funcionalidade.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Acesso completo para administradores</b>
        <ul>
            <li><b>Dado</b> que estou logado como administrador,</li>
            <li><b>Quando</b> acesso qualquer módulo do sistema,</li>
            <li><b>Então</b> todas as funcionalidades administrativas devem estar disponíveis.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Interface dinâmica conforme perfil</b>
        <ul>
            <li><b>Dado</b> que o usuário realizou login,</li>
            <li><b>Quando</b> o sistema carregar a interface,</li>
            <li><b>Então</b> deve exibir apenas as opções referentes ao perfil do usuário.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Registro de ação crítica</b>
        <ul>
            <li><b>Dado</b> que um administrador executou uma ação sensível,</li>
            <li><b>Quando</b> a operação for concluída,</li>
            <li><b>Então</b> o sistema deve registrar o evento em log com usuário, data e tipo de ação.</li>
        </ul>
      </td>
    </tr>
    <!-- PONTUAÇÃO -->
    <tr>
      <td>Pontuação</td>
      <td> 
          > 5
          <ul>
            <li>Envolve implementação de controle de permissões entre dois perfis distintos (administrador e usuário normal).</li>
            <li>Necessita adaptação da interface (frontend) para exibir/ocultar funcionalidades conforme o perfil.</li>
            <li>Impacta diversas áreas do sistema (interface, rotas, segurança, controle de sessão).</li>
          </ul>
      </td>
    </tr>
    <!--  -->
   <tr>
      <td>Prioridade</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>Depedência</td>
      <td>
        <li>[RF01]  –  Sistema de login</li>
        <li>[RF04]  –  Gerenciamento de usuários.</li>
      </td>
    </tr>
  </tbody>
</table>

<center>
    <figcaption>Tabela 4 - História do usuário: requisito RF03. Fonte: Autor.</figcaption>
</center>

---

### RF04 - Administração de usuários

<table>
  <thead>
    <tr>
      <th>Identificador</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <!-- Id do requisito -->
    <tr>
      <td>ID do requisito</td>
      <td><a href="./requisitos_elicitados.md">[RF04]</td>
    </tr>
    <!-- História -->
    <tr>
      <td>História</td>
      <td>  
        Como administrador,
        eu quero cadastrar, editar e remover usuários da plataforma,
        para garantir que somente pessoas autorizadas tenham acesso e que suas permissões estejam sempre atualizadas.
      </td>
    </tr>
    <!-- Descrição -->
    <tr>
      <td>Descrição</td>
      <td>
        O sistema deve permitir que administradores gerenciem os usuários cadastrados na plataforma. Isso inclui criar novos usuários, ajustar seus dados (nome, e-mail, perfil de acesso), ativar ou desativar contas e remover usuários quando necessário. A funcionalidade deve estar disponível apenas para administradores autenticados, garantindo a segurança e integridade do sistema. Todas as alterações executadas devem ser registradas para auditoria.
      </td>
    </tr>
    <!-- Regras de negócio -->
    <tr>
      <td rowspan="5">Regras de negócio</td>
      <td>
        <ul>
        <b>Controle de acesso exclusivo</b>
            <li>
            Apenas usuários com perfil Administrador podem acessar a área de gestão de usuários.
            </li>
            <li>
            Usuários comuns não devem visualizar nem acessar essa funcionalidade.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Cadastro de novos usuários</b>
            <li>
              O administrador deve fornecer: nome, e-mail e tipo de perfil (administrador ou usuário normal).
            </li>
            <li>
            O sistema deve validar se o e-mail já está em uso.
            </li>
            <li>
            O usuário criado deve receber um estado inicial (ativo).
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Edição de usuários</b>
            <li>
            O administrador deve ser capaz de alterar os dados de um usuário, exceto o ID interno.
            </li>
            <li>
            Trocas de perfil exigem registro de auditoria.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Desativação de usuários</b>
            <li>
            Uma conta desativada não pode acessar a plataforma.
            </li>
            <li>
            Desativar não exclui histórico nem logs vinculados ao usuário.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Exclusão</b>
            <li>
            Exclusão só pode ocorrer caso não comprometa registros essenciais (ex.: logs críticos).
            </li>
            </li>
            <li>
            Caso não seja possível excluir, o sistema deve sugerir desativação.
            </li>
        </ul>
      </td>
    </tr>
    <!-- Critérios de aceitação -->
    <tr>
      <td rowspan="4">Critérios de aceitação</td>
      <td>
        <b>Acesso restrito à gestão</b>
        <ul>
            <li><b>Dado</b> que estou autenticado como administrador,</li>
            <li><b>Quando</b> acesso o menu de administração,</li>
            <li><b>Então</b> devo visualizar a área de gerenciamento de usuários.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Cadastro de novos usuários</b>
        <ul>
            <li><b>Dado</b> que estou na tela de criação,</li>
            <li><b>Quando</b> insiro dados válidos e confirmo,</li>
            <li><b>Então</b> o sistema deve criar o usuário e registrá-lo como ativo.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Edição de usuário</b>
        <ul>
            <li><b>Dado</b> que um usuário já está cadastrado,</li>
            <li><b>Quando</b> altero seus dados,</li>
            <li><b>Então</b> o sistema salva as mudanças.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Desativação de usuário</b>
        <ul>
            <li><b>Dado</b> que o administrador optou por desativar uma conta,</li>
            <li><b>Quando</b> confirmar a ação,</li>
            <li><b>Então</b> o sistema impede novos logins daquela conta.</li>
        </ul>
      </td>
    </tr>
    <!-- PONTUAÇÃO -->
    <tr>
      <td>Pontuação</td>
      <td> 
          > 5
          <ul>
            <li>Integração externa com API de clima</li>
            <li>Múltiplos dados para exibir</li>
            <li>Maior incerteza técnica (API, limites, erros, formato de resposta)</li>
          </ul>
      </td>
    </tr>
    <!--  -->
   <tr>
      <td>Prioridade</td>
      <td>Could</td>
    </tr>
    <tr>
      <td>Depedência</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<center>
    <figcaption>Tabela 4 - História do usuário: requisito RF03. Fonte: Autor.</figcaption>
</center>

---


### RF - Verificar clima no local da antena

<table>
  <thead>
    <tr>
      <th>Identificador</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <!-- Id do requisito -->
    <tr>
      <td>ID do requisito</td>
      <td><a href="./requisitos_elicitados.md">[RF03]</td>
    </tr>
    <!-- História -->
    <tr>
      <td>História</td>
      <td>  
        Como operador,
        eu quero verificar o clima atual no local onde as antenas estão instaladas,
        para entender se condições meteorológicas podem impactar o funcionamento.</td>
    </tr>
    <!-- Descrição -->
    <tr>
      <td>Descrição</td>
      <td>
          Ao acessar a tela de monitoramento da antena o usuário deve ser capaz de ter informações sobre o clima no local.
      </td>
    </tr>
    <!-- Regras de negócio -->
    <tr>
      <td rowspan="4">Regras de negócio</td>
      <td>
        <ul>
        <b>Atualização periódica</b>
            <li>
            O clima deve ser atualizado automaticamente em intervalos definidos pela regra do sistema (ex.: a cada 10 minutos).
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Fonte oficial de dados climáticos</b>
            <li>
            A consulta deve ser feita utilizando uma API confiável previamente configurada (OpenWeather, NOAA, etc.).
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Tratamento de indisponibilidade</b>
            <li>
            Quando o serviço de clima estiver offline ou inacessível, o sistema deve exibir “Clima indisponível”.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Proibição de dados desatualizados</b>
            <li>
            O sistema não deve exibir informações climáticas cujo timestamp seja maior que o limite aceito (por exemplo, mais de 30 minutos).
            </li>
        </ul>
      </td>
    </tr>
    <!-- Critérios de aceitação -->
    <tr>
      <td rowspan="4">Critérios de aceitação</td>
      <td>
        <b>Exibir clima atual</b>
        <ul>
            <li><b>Dado</b> que estou na tela da antena,</li>
            <li><b>Quando</b> o sistema identificar a localização,</li>
            <li><b>Então</b> deve exibir o clima atual (temperatura, vento, chuva, etc.).</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Atualização periódica do clima</b>
        <ul>
            <li><b>Dado</b> que o clima pode mudar durante o uso do sistema,</li>
            <li><b>Quando</b> o sistema realizar nova consulta,</li>
            <li><b>Então</b> os dados meteorológicos devem ser atualizados.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>API de clima indisponível</b>
        <ul>
            <li><b>Dado</b> que a API externa falhou,</li>
            <li><b>Quando</b> o usuário tentar visualizar o clima,</li>
            <li><b>Então</b> deve aparecer “Clima indisponível no momento”.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Falha ao obter localização da antena</b>
        <ul>
            <li><b>Dado</b> que o sistema não conseguiu determinar a localização,</li>
            <li><b>Quando</b> tentar buscar o clima,</li>
            <li><b>Então</b> deve informar “Localização não encontrada”.</li>
        </ul>
      </td>
    </tr>
    <!-- PONTUAÇÃO -->
    <tr>
      <td>Pontuação</td>
      <td> 
          > 5
          <ul>
            <li>Integração externa com API de clima</li>
            <li>Múltiplos dados para exibir</li>
            <li>Maior incerteza técnica (API, limites, erros, formato de resposta)</li>
          </ul>
      </td>
    </tr>
    <!--  -->
   <tr>
      <td>Prioridade</td>
      <td>Could</td>
    </tr>
    <tr>
      <td>Depedência</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<center>
    <figcaption>Tabela 4 - História do usuário: requisito RF03. Fonte: Autor.</figcaption>
</center>

---

### RF04 - O usuário deve poder realizar o login na plataforma.

<table>
  <thead>
    <tr>
      <th>Identificador</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <!-- Id do requisito -->
    <tr>
      <td>ID do requisito</td>
      <td><a href="./requisitos_elicitados.md">[RF04]</td>
    </tr>
    <!-- História -->
    <tr>
      <td>História</td>
      <td>  
        Como usuário da plataforma,
        eu quero realizar login utilizando minhas credenciais de acesso,
        para garantir que somente pessoas autorizadas possam entrar no sistema e visualizar ou operar as antenas.
      </td>
    </tr>
    <!-- Descrição -->
    <tr>
      <td>Descrição</td>
      <td>
          Ao acessar o sistema, o usuário deve visualizar uma tela dedicada para autenticação. Nessa interface, ele deve inserir seu nome de usuário (ou e-mail) e sua senha. Após a validação bem-sucedida das credenciais, o usuário é direcionado para o painel principal de operações. Caso os dados estejam incorretos, o sistema deve informar o erro sem revelar detalhes sensíveis.
      </td>
    </tr>
    <!-- Regras de negócio -->
    <tr>
      <td rowspan="4">Regras de negócio</td>
      <td>
        <ul>
        <b>Formato de credenciais</b>
            <li>
            O sistema deve exigir que o usuário informe um identificador válido registrado na base de dados (e-mail, matrícula ou username definido pela organização). A senha deve seguir as regras internas de segurança previamente estabelecidas (tamanho mínimo, caracteres especiais, etc.).
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Validação segura</b>
            <li>
            O sistema deve validar todas as credenciais de forma criptografada, utilizando hashing seguro (ex.: bcrypt, Argon2). Nenhuma senha pode ser armazenada ou trafegar em texto puro.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Sessão autenticada</b>
            <li>
            Após o login bem-sucedido, o sistema deve gerar uma sessão autenticada com tempo de expiração definido. A sessão deve ser encerrada automaticamente após período de inatividade maior que o permitido.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Proibição de acesso não autenticado</b>
            <li>
            Nenhuma página interna sensível pode ser acessada sem uma sessão válida. Tentativas de acesso direto devem resultar em redirecionamento para a tela de login.
            </li>
        </ul>
      </td>
    </tr>
    <!-- Critérios de aceitação -->
    <tr>
      <td rowspan="3">Critérios de aceitação</td>
      <td>
        <b>Login bem-sucedido</b>
        <ul>
            <li><b>Dado</b> que estou na tela de login,</li>
            <li><b>Quando</b> informo usuário/e-mail e senha válidos,</li>
            <li><b>Então</b> devo ser redirecionado ao painel principal do sistema.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Atualização periódica do clima</b>
        <ul>
            <li><b>Dado</b> que informei credenciais incorretas,</li>
            <li><b>Quando</b> tento acessar o sistema,</li>
            <li><b>Então</b> deve aparecer uma mensagem “Usuário ou senha inválidos”, sem revelar qual dos dois está errado.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Sessão expirada</b>
        <ul>
            <li><b>Dado</b> que estou autenticado,</li>
            <li><b>Quando</b> ocorrer um longo período de inatividade,</li>
            <li><b>Então</b> a sessão deve expirar e devo ser direcionado para a tela de login ao tentar qualquer ação.</li>
        </ul>
      </td>
    </tr>
    <!-- PONTUAÇÃO -->
    <tr>
      <td>Pontuação</td>
      <td> 
          > 2
          <ul>
            <li>Embora seja um requisito essencial, o login é uma funcionalidade tecnicamente bem conhecida.</li>
            <li>Envolve validações, segurança e criação de sessão, mas não exige integrações externas complexas.</li>
          </ul>
      </td>
    </tr>
    <!--  -->
   <tr>
      <td>Prioridade</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>Depedência</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<center>
    <figcaption>Tabela 5 - História do usuário: requisito RF04. Fonte: Autor.</figcaption>
</center>

---

### RF05 - Redefinir senha

<table>
  <thead>
    <tr>
      <th>Identificador</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <!-- Id do requisito -->
    <tr>
      <td>ID do requisito</td>
      <td><a href="./requisitos_elicitados.md">[RF05]</td>
    </tr>
    <!-- História -->
    <tr>
      <td>História</td>
      <td>  
        Como usuário da plataforma,
        eu quero redefinir minha senha quando esquecer ou desejar alterá-la,
        para garantir que eu consiga recuperar o acesso ao sistema com segurança e sem depender de suporte técnico.
      </td>
    </tr>
    <!-- Descrição -->
    <tr>
      <td>Descrição</td>
      <td>
          O sistema deve oferecer um fluxo seguro para redefinição de senha. A partir da tela de login, o usuário poderá solicitar a recuperação informando seu e-mail registrado. O sistema enviará um link de redefinição contendo um token temporário e exclusivo. Ao acessar esse link, o usuário poderá cadastrar uma nova senha que esteja em conformidade com as regras de segurança definidas pela organização. Após concluir o processo, a senha antiga deixa de ser válida.
      </td>
    </tr>
    <!-- Regras de negócio -->
    <tr>
      <td rowspan="5">Regras de negócio</td>
      <td>
        <ul>
        <b>Token de redefinição</b>
            <li>
            O sistema deve gerar um token único, criptografado e com tempo de expiração (ex.: 15 minutos). Esse token deve ser associado ao usuário que iniciou o processo e só pode ser utilizado uma única vez.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Validação de segurança da nova senha</b>
            <li>
            A nova senha deve seguir todas as diretrizes de segurança definidas pela política interna (tamanho mínimo, caracteres especiais, complexidade, etc.). O sistema não deve permitir o uso de senhas fracas.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Invalidação automática de tokens</b>
            <li>
            Tokens expirados, já utilizados ou inválidos não devem permitir redefinição. Caso o token seja inválido, o sistema deve exibir uma mensagem genérica: “Link inválido ou expirado”.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Confirmação de nova senha</b>
            <li>
            O sistema deve exigir que o usuário insira a senha duas vezes, garantindo que ambas coincidam. Caso os campos não correspondam, deve ser exibida uma mensagem de erro adequada.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Cancelamento de sessões anteriores</b>
            <li>
            Após a redefinição bem-sucedida, todas as sessões ativas daquela conta devem ser encerradas automaticamente, exigindo novo login com a senha atualizada.
            </li>
        </ul>
      </td>
    </tr>
    <!-- Critérios de aceitação -->
    <tr>
      <td rowspan="4">Critérios de aceitação</td>
      <td>
        <b>Envio do link de recuperação</b>
        <ul>
            <li><b>Dado</b> que estou na tela de login,</li>
            <li><b>Quando</b> clico em “Esqueci minha senha” e informo meu e-mail válido,</li>
            <li><b>Então</b> devo receber um link de redefinição no e-mail cadastrado.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Token inválido ou expirado</b>
        <ul>
            <li><b>Dado</b> que o token é inválido ou expirou,</li>
            <li><b>Quando</b> tento acessar o link de redefinição,</li>
            <li><b>Então</b> o sistema deve informar “Link inválido ou expirado” e oferecer opção de solicitar um novo.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Redefinição bem-sucedida</b>
        <ul>
            <li><b>Dado</b> que acessei o link válido,</li>
            <li><b>Quando</b> preencho a nova senha respeitando as regras e confirmo,</li>
            <li><b>Então</b> devo ver uma mensagem de sucesso e ser redirecionado para a tela de login.</li>
        </ul>
      </td>
    </tr>
    <tr>
    <td>
        <b>Senha fraca ou fora do padrão</b>
        <ul>
            <li><b>Dado</b> que estou na página de redefinição,</li>
            <li><b>Quando</b> digito uma senha que não está em conformidade com as regras,</li>
            <li><b>Então</b> o sistema deve impedir a conclusão e exibir a razão (ex.: “A senha deve conter no mínimo 8 caracteres”).</li>
        </ul>
      </td>
    </tr>
    <!-- PONTUAÇÃO -->
    <tr>
      <td>Pontuação</td>
      <td> 
          > 4
          <ul>
            <li>Envolve fluxo de segurança mais complexo que o login.</li>
            <li>Exige geração e validação de tokens temporários.</li>
            <li>Possui mais ramificações e verificações de segurança do que uma tela comum.</li>
          </ul>
      </td>
    </tr>
    <!--  -->
   <tr>
      <td>Prioridade</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>Depedência</td>
      <td>
          <ul>
            <li>[RF04]  –  Sistema de login</li>
          </ul>
      </td>
    </tr>
  </tbody>
</table>


<center>
    <figcaption>Tabela 6 - História do usuário: requisito RF05. Fonte: Autor.</figcaption>
</center>

---

### RF06 - Alerta de necessidade de calibração

<table>
  <thead>
    <tr>
      <th>Identificador</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <!-- Id do requisito -->
    <tr>
      <td>ID do requisito</td>
      <td><a href="./requisitos_elicitados.md">[RF06]</td>
    </tr>
    <!-- História -->
    <tr>
      <td>História</td>
      <td>  
        Como operador responsável pela manutenção das antenas,
        eu quero receber um alerta quando a antena precisar ser calibrada,
        para evitar erros de posicionamento e garantir que o sistema opere com precisão.
      </td>
    </tr>
    <!-- Descrição -->
    <tr>
      <td>Descrição</td>
      <td>
          O sistema deve monitorar continuamente os parâmetros de operação da antena e identificar quando ela ultrapassar o limite permitido de desvio, tempo de uso ou critérios técnicos definidos pelo laboratório. Quando uma antena atingir o ponto em que a calibração se torna necessária, o sistema deve exibir um alerta claro na interface de monitoramento e registrar a situação no status geral da antena. O objetivo é garantir que operadores não utilizem a antena em condições inadequadas.
      </td>
    </tr>
    <!-- Regras de negócio -->
    <tr>
      <td rowspan="4">Regras de negócio</td>
      <td>
        <ul>
        <b>Critério técnico de necessidade de calibração</b>
            <li>
            A necessidade de calibração deve ser determinada com base em parâmetros definidos: limite de erro de posicionamento, horas de operação acumuladas ou últimos registros de manutenção. Esses parâmetros devem ser configuráveis pelo administrador do sistema.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Geração automática do alerta</b>
            <li>
            O sistema deve identificar automaticamente quando qualquer um dos critérios de calibração for violado e exibir o aviso imediatamente ao operador, sem necessidade de ação manual.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Registro de status</b>
            <li>
            Além da exibição visual, o sistema deve registrar internamente a data e o motivo da necessidade de calibração, permitindo auditoria futura.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Remoção do alerta</b>
            <li>
            O alerta só deve ser removido quando a antena for calibrada e o operador registrar manualmente a conclusão ou quando o sistema receber essa informação de forma automatizada (caso exista integração futura).
            </li>
        </ul>
      </td>
    </tr>
    <!-- Critérios de aceitação -->
    <tr>
      <td rowspan="4">Detecção automática</td>
      <td>
        <b>Envio do link de recuperação</b>
        <ul>
            <li><b>Dado</b> que a antena ultrapassou os limites técnicos definidos,</li>
            <li><b>Quando</b> o sistema verificar essa condição,</li>
            <li><b>Então</b> deve exibir o aviso “Calibração necessária”.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Exibição visível ao operador</b>
        <ul>
            <li><b>Dado</b> que o alerta foi gerado,</li>
            <li><b>Quando</b> o operador acessar a tela da antena,</li>
            <li><b>Então</b> o alerta deve estar visível de forma destacada.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Registro da ocorrência</b>
        <ul>
            <li><b>Dado</b> que o alerta foi disparado,</li>
            <li><b>Quando</b> o evento for registrado,</li>
            <li><b>Então</b> o sistema deve armazenar data, hora e motivo.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Persistência do alerta</b>
        <ul>
            <li><b>Dado</b> que a antena ainda não foi calibrada,</li>
            <li><b>Quando</b> o operador retornar à tela em outro momento,</li>
            <li><b>Então</b> o alerta deve continuar sendo exibido.</li>
        </ul>
      </td>
    </tr>
    <!-- PONTUAÇÃO -->
    <tr>
      <td>Pontuação</td>
      <td> 
          > 4
          <ul>
            <li>Complexidade moderada, pois envolve análise de parâmetros técnicos.</li>
            <li>Tem baixa incerteza técnica, mas exige configuração de parâmetros e persistência do status.</li>
          </ul>
      </td>
    </tr>
    <!--  -->
   <tr>
      <td>Prioridade</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>Depedência</td>
      <td>
          <ul>
            <li>RF08 – Mostrar a última vez que a antena foi calibrada</li>
            <li>RF27 – Mostrar o posicionamento da antena em tempo real</li>
          </ul>
      </td>
    </tr>
  </tbody>
</table>

<center>
    <figcaption>Tabela 7 - História do usuário: requisito RF06. Fonte: Autor.</figcaption>
</center>

---

### RF07 - Seleção entre dark mode e light mode

<table>
  <thead>
    <tr>
      <th>Identificador</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <!-- Id do requisito -->
    <tr>
      <td>ID do requisito</td>
      <td><a href="./requisitos_elicitados.md">[RF07]</td>
    </tr>
    <!-- História -->
    <tr>
      <td>História</td>
      <td>  
        Como usuário da plataforma,
        eu quero escolher entre o modo claro (light mode) e o modo escuro (dark mode),
        para utilizar a interface de maneira mais confortável e adequada às minhas preferências e condições de iluminação.
      </td>
    </tr>
    <!-- Descrição -->
    <tr>
      <td>Descrição</td>
      <td>
          O sistema deve permitir que o usuário alterne entre o modo escuro e o modo claro, aplicando automaticamente o tema correspondente em toda a interface da plataforma. A escolha visual deve ser persistida, garantindo que, ao retornar ao sistema, o usuário continue utilizando o mesmo modo selecionado anteriormente. A funcionalidade deve estar disponível em uma área de configurações ou no próprio cabeçalho da interface, de acordo com o padrão de design adotado.
      </td>
    </tr>
    <!-- Regras de negócio -->
    <tr>
      <td rowspan="4">Regras de negócio</td>
      <td>
        <ul>
        <b>Persistência da preferência</b>
            <li>
            A escolha entre dark mode e light mode deve ser salva localmente (ex.: localStorage) ou associada ao perfil do usuário no backend. O sistema deve recuperar e aplicar essa configuração automaticamente ao carregar a interface.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Aplicação global do tema</b>
            <li>
           Ao alternar o modo, todas as telas, componentes, ícones, textos e elementos visuais devem ser atualizados para refletir o tema selecionado, sem exceções ou inconsistências.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Compatibilidade com identidade visual</b>
            <li>
            Ambos os modos devem seguir a identidade visual do laboratório/sistema, além de manter acessibilidade de contraste e legibilidade adequada.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Alteração imediata</b>
            <li>
            Ao selecionar a opção desejada, o tema deve ser atualizado imediatamente, sem recarregar a página.
            </li>
        </ul>
      </td>
    </tr>
    <!-- Critérios de aceitação -->
    <tr>
      <td rowspan="4">Critérios de aceitação</td>
      <td>
        <b>Seleção do modo</b>
        <ul>
            <li><b>Dado</b> que o usuário deseja alterar o tema,</li>
            <li><b>Quando</b> selecionar “Light Mode” ou “Dark Mode”,</li>
            <li><b>Então</b> o sistema deve aplicar o tema correspondente instantaneamente.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Persistência da preferência</b>
        <ul>
            <li><b>Dado</b> que o usuário já escolheu um tema,</li>
            <li><b>Quando</b> fizer login novamente ou retornar à página,</li>
            <li><b>Então</b> a interface deve carregar automaticamente com o tema previamente selecionado.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Aplicação consistente</b>
        <ul>
            <li><b>Dado</b> que o tema foi alterado,</li>
            <li><b>Quando</b> o usuário navegar entre telas da plataforma,</li>
            <li><b>Então</b> todas as telas devem exibir o mesmo tema sem falhas.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Acessibilidade mínima</b>
        <ul>
            <li><b>Dado</b> que o usuário alterou o tema,</li>
            <li><b>Quando</b> o tema for aplicado,</li>
            <li><b>Então</b> textos e elementos devem permanecer legíveis, respeitando contraste adequado.</li>
        </ul>
      </td>
    </tr>
    <!-- PONTUAÇÃO -->
    <tr>
      <td>Pontuação</td>
      <td> 
          > 2
          <ul>
            <li>Implementação majoritariamente visual e simples.</li>
            <li>Baixa complexidade técnica (uso de classes CSS, Tailwind, contextos ou estados globais).</li>
          </ul>
      </td>
    </tr>
    <!--  -->
   <tr>
      <td>Prioridade</td>
      <td>Would</td>
    </tr>
    <tr>
      <td>Depedência</td>
      <td>
          <ul>
            <li>RF23 – Identidade visual do sistema</li>
          </ul>
      </td>
    </tr>
  </tbody>
</table>

<center>
    <figcaption>Tabela 8 - História do usuário: requisito RF07. Fonte: Autor.</figcaption>
</center>

---

### RF08 - Interrupção de rotina

<table>
  <thead>
    <tr>
      <th>Identificador</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <!-- Id do requisito -->
    <tr>
      <td>ID do requisito</td>
      <td><a href="./requisitos_elicitados.md">[RF08]</td>
    </tr>
    <!-- História -->
    <tr>
      <td>História</td>
      <td>  
        Como operador,
        eu quero ser capaz de interromper uma rotina em execução na antena,
        para impedir erros, evitar danos ao equipamento ou ajustar rapidamente o procedimento quando necessário.
      </td>
    </tr>
    <!-- Descrição -->
    <tr>
      <td>Descrição</td>
      <td>
          O sistema deve oferecer ao usuário a capacidade de interromper qualquer rotina ativa em uma antena. Essa ação deve parar imediatamente a execução dos comandos e garantir que nenhuma instrução pendente continue sendo executada. A funcionalidade deve estar disponível somente enquanto uma rotina estiver em andamento e deve aparecer de forma destacada na interface para garantir resposta rápida em situações emergenciais.
      </td>
    </tr>
    <!-- Regras de negócio -->
    <tr>
      <td rowspan="4">Regras de negócio</td>
      <td>
        <ul>
        <b>Disponibilidade apenas durante execução</b>
            <li>
            O botão ou comando de interrupção deve estar visível e habilitado somente enquanto a antena estiver executando uma rotina. Caso não haja rotina ativa, a opção deve estar indisponível.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Confirmação opcional da ação</b>
            <li>
           Dependendo da criticidade do sistema, pode ser exigido que o usuário confirme a interrupção para evitar cancelamentos acidentais — exceto em modo emergencial, onde a interrupção deve ser imediata.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Registro do cancelamento</b>
            <li>
            Toda interrupção deve ser registrada, incluindo:
              <li>horário da interrupção,</li>
              <li>usuário que interrompeu,</li>
              <li>rotina interrompida,</li>
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Cancelamento de comandos pendentes</b>
            <li>
            Ao interromper, nenhum comando posterior deve ser enviado à antena. Todos os passos não executados da rotina devem ser descartados.
            </li>
        </ul>
      </td>
    </tr>
    <!-- Critérios de aceitação -->
    <tr>
      <td rowspan="4">Critérios de aceitação</td>
      <td>
        <b>Interrupção disponível durante a execução</b>
        <ul>
            <li><b>Dado</b> que há uma rotina em execução,</li>
            <li><b>Quando</b> o usuário visualizar a interface da antena,</li>
            <li><b>Então</b> deve existir a opção de “Interromper rotina”.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Parada imediata</b>
        <ul>
            <li><b>Dado</b> que o usuário decidiu interromper a rotina,</li>
            <li><b>Quando</b> clicar no botão de interrupção,</li>
            <li><b>Então</b> a antena deve parar imediatamente suas atividades.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Registro da ação</b>
        <ul>
            <li><b>Dado</b> Dado que houve uma interrupção de rotina,</li>
            <li><b>Quando</b> o sistema enviar o comando de parada,</li>
            <li><b>Então</b> a antena deve retornar ao estado seguro configurado.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Acessibilidade mínima</b>
        <ul>
            <li><b>Dado</b> que o usuário alterou o tema,</li>
            <li><b>Quando</b> o tema for aplicado,</li>
            <li><b>Então</b> textos e elementos devem permanecer legíveis, respeitando contraste adequado.</li>
        </ul>
      </td>
    </tr>
    <!-- PONTUAÇÃO -->
    <tr>
      <td>Pontuação</td>
      <td> 
          > 5
          <ul>
            <li>Necessidade de comunicação com hardware ou camada de controle para parar a antena.</li>
            <li>Processo envolve risco operacional, portanto maior precisão e cuidado.</li>
          </ul>
      </td>
    </tr>
    <!--  -->
   <tr>
      <td>Prioridade</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>Depedência</td>
      <td>
          <ul>
            <li>
            RF19 – Status das antenas.
            </li>
            <li>
            RF11 – Evolução do posicionamento da antena.
            </li>
          </ul>
      </td>
    </tr>
  </tbody>
</table>

<center>
    <figcaption>Tabela 9 - História do usuário: requisito RF08. Fonte: Autor.</figcaption>
</center>

---

### RF09 - Cálculo e envio dos ângulos de posicionamento da antena

<table>
  <thead>
    <tr>
      <th>Identificador</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <!-- Id do requisito -->
    <tr>
      <td>ID do requisito</td>
      <td><a href="./requisitos_elicitados.md">[RF09]</td>
    </tr>
    <!-- História -->
    <tr>
      <td>História</td>
      <td>  
        Como operador do sistema,
        eu quero que o software calcule automaticamente os ângulos de posicionamento (azimute e elevação) e os envie para a antena,
        para garantir que ela se mova corretamente até a posição desejada sem que eu precise realizar cálculos manuais.
      </td>
    </tr>
    <!-- Descrição -->
    <tr>
      <td>Descrição</td>
      <td>
          O software deve ser capaz de calcular os ângulos necessários para o posicionamento da antena com base nos parâmetros fornecidos pelo usuário, pelo satélite selecionado ou pela rotina configurada. Após o cálculo, o sistema deve enviar esses valores para a antena por meio da interface de comunicação especificada (serial, rede, API interna etc.).
          A funcionalidade deve garantir precisão adequada, obedecer aos limites de movimentação da antena e assegurar que os comandos sejam enviados de forma segura e confiável, respeitando o tempo e a ordem esperada pelo hardware.
      </td>
    </tr>
    <!-- Regras de negócio -->
    <tr>
      <td rowspan="5">Regras de negócio</td>
      <td>
        <ul>
        <b>Cálculo baseado em parâmetros válidos</b>
            <li>
            Os ângulos só podem ser calculados se todos os dados necessários estiverem disponíveis (como posição do satélite, localização da antena e horário). Parâmetros incompletos ou inválidos devem impedir o cálculo.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Respeito aos limites físicos da antena</b>
            <li>
            O cálculo e o envio devem garantir que os ângulos nunca ultrapassem os limites físicos da antena:
            <li>Azimute: 0° a 360°</li>
            <li>Elevação: 0° a 180°</li>
            Comandos fora desse intervalo devem ser automaticamente bloqueados e registrados.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Precisão mínima</b>
            <li>
            O cálculo deve respeitar padrões de precisão definidos pelo sistema (ex.: erro máximo de 0,5°). Valores fora da precisão aceitável devem ser recalculados ou gerar aviso.
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Envio seguro para o hardware</b>
            <li>
            A transmissão dos ângulos deve usar o protocolo de comunicação definido pelo projeto, incluindo:
            <li>confirmação de recebimento,</li>
            <li>tratamento de falhas de comunicação,</li>
            <li>repetição de envio em caso de perda.</li>
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <b>Registro das operações</b>
            <li>Cada cálculo e envio realizado deve ser registrado com horário e parâmetros utilizados, permitindo auditoria e rastreabilidade das operações da antena.</li>
        </ul>
      </td>
    </tr>
    <!-- Critérios de aceitação -->
    <tr>
      <td rowspan="4">Critérios de aceitação</td>
      <td>
        <b>Cálculo correto</b>
        <ul>
            <li><b>Dado</b> que o usuário selecionou um satélite ou configurou uma rotina,</li>
            <li><b>Quando</b> o software processar os dados,</li>
            <li><b>Então</b> deve gerar ângulos de azimute e elevação respeitando a precisão definida.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Envio bem-sucedido</b>
        <ul>
            <li><b>Dado</b> que os ângulos foram calculados,</li>
            <li><b>Quando</b> o software enviar os valores para a antena,</li>
            <li><b>Então</b> a antena deve receber e aplicar o comando corretamente.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Bloqueio de ângulos inválidos</b>
        <ul>
            <li><b>Dado</b> que o cálculo gerar um ângulo fora dos limites físicos,</li>
            <li><b>Quando</b> o operador tentar executar a rotina,</li>
            <li><b>Então</b> o sistema deve impedir o envio e exibir um aviso ao usuário.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <b>Registro da operação</b>
        <ul>
            <li><b>Dado</b> que uma operação de cálculo e envio foi realizada,</li>
            <li><b>Quando</b> o processo terminar,</li>
            <li><b>Então</b> o sistema deve armazenar o registro da ação para consulta futura.</li>
        </ul>
      </td>
    </tr>
    <!-- PONTUAÇÃO -->
    <tr>
      <td>Pontuação</td>
      <td> 
          > 8
          <ul>
            <li>Exige implementação matemática com alto nível de precisão.</li>
            <li>Requer integração direta com hardware ou um subsistema de simulação/controle.</li>
            <li>Contém risco técnico moderado-alto dependendo do protocolo da antena.</li>
            <li>Deve ser altamente confiável para evitar erros críticos.</li>
            <li>Inclui cálculos, validações, tratamento de falhas e registro, aumentando a complexidade geral.</li>
          </ul>
      </td>
    </tr>
    <!--  -->
   <tr>
      <td>Prioridade</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>Depedência</td>
      <td>
          <ul>
            <li>
            RF19 – Status das antenas.
            </li>
            <li>
            RF11 – Evolução do posicionamento da antena.
            </li>
          </ul>
      </td>
    </tr>
  </tbody>
</table>

---



| RF01 | O usuário deve poder realizar login na plataforma. | IN03 | x
| RF02 | O usuário deve poder redefinir sua senha. | EN10 | x
| RF03 | O software deve ter perfis de usuário (administrador e usuário normal). | EN11, EN12 | x
| RF04 | O administrador deve poder administrar novos usuários na plataforma. | IN02 |
| RF05 | O usuário deve poder visualizar o status das antenas. | IN04, EN19 |
| RF06 | O usuário deve poder visualizar uma lista de todas as antenas. | IN05 |
| RF07 | O usuário deve poder abrir múltiplas janelas, uma para cada antena. | EN18 |
| RF08 | O software deve mostrar o posicionamento da antena em tempo real. | EN24 |
| RF09 | O software deve mostrar falhas no posicionamento da antena. | EN10 | x
| RF10 | O software deve mostrar a última pessoa que moveu a antena. | EN07 | x
| RF11 | O software deve mostrar qual foi a última rotina realizada pela antena. | EN09 | 
| RF12 | O administrador deve poder bloquear uma antena. | IN23 |
| RF13 | O usuário deve poder selecionar o satélite a ser rastreado/monitorado. | IN09 |
| RF14 | O software deve listar os satélites disponíveis. |  EN02 |
| RF15 | O software deve mostrar a trajetória do satélite. | IN19 |
| RF16 | O software deve alertar se a antena está recebendo os dados do satélite selecionado. | IN16 |
| RF17 | O software deve salvar os dados recebidos do satélite. | IN15, EN03 |
| RF18 | O usuário deve poder baixar/exportar os dados salvos. | IN17, EN23 |
| RF19 | O software deve mostrar a potência e a frequência do sinal recebido. | EN21, EN22 |
| RF20 | O usuário deve poder salvar e deletar rotinas. | IN07, EN06 |
| RF21 | O usuário deve poder realizar rotinas de calibração. | IN08 | 
| RF22 | O usuário deve poder interromper uma rotina. | IN22 | x
| RF23 | O software deve bloquear rotinas inválidas. | IN11 |
| RF24 | O software deve calcular o posicionamento da antena conforme parâmetros fornecidos. | IN10, EN01, EN04 | x
| RF25 | O software deve mostrar a evolução/histórico do posicionamento da antena. | IN14, EN05 |
| RF26 | O software deve mostrar a última vez que a antena foi calibrada. | IN12, EN08 |
| RF27 | O software deve alertar quando a antena precisar de calibração. | IN13 | x
| RF28 | O usuário deve poder verificar o clima onde as antenas estão localizadas. | EN17 | x
| RF29 | O banco deve limpar os dados coletados periodicamente. | IN18 |
| RF30 | O usuário deve poder selecionar entre dark mode e light mode. | IN20 | x
| RF31 | O usuário deve poder escolher entre português e inglês. | IN21, EN13 |
| NF01 | O software deve seguir a identidade visual do laboratório. | EN20 |
| NF02 | Os fluxos para realização de tarefas devem ser curtos. | EN16 |
| NF03 | O software deve rodar na web. | EN14 |
| NF04 | O software deve ser compatível com Chrome. | IN24 |
| NF05 | O software deve ser compatível com Firefox. | IN25 |
| NF06 | O software deve rodar nos principais navegadores. | EN15 |
| NF07 | O software deve ter documentação adequada. | EN25 |


## Referência

[1] COHN, Mike. User Stories Applied: For Agile Software Development. Addison-Wesley, 2004.

[2] BECK, Kent. Extreme Programming Explained. Addison-Wesley, 2004.

[3] NORTH, Dan. Introducing BDD, 2006.

## Histórico de versões

<div align="center">
    <table>
        <tr>
            <th>Data</th>
            <th>Versão</th>
            <th>Descrição</th>
            <th>Autor</th>
        </tr>
        <tr>
            <td>17/11</td>
            <td>1.0</td>
            <td>Primeira versão finalizada</td>
            <td><a href="https://github.com/ccarlaa">Carla Clementino</a></td>
    </table>
</div>