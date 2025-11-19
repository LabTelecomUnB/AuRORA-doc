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
          <li>Cálculo de posicionamento.</li>
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

### RF03 - Verificar clima no local da antena

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
            consulta deve ser feita utilizando uma API confiável previamente configurada (OpenWeather, NOAA, etc.).
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
      <td rowspan="3">Critérios de aceitação</td>
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
      <td>Depende da existência do sistea de login.</td>
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
      <td rowspan="3">Critérios de aceitação</td>
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
      <td>Depende da existência do sistea de login.</td>
    </tr>
  </tbody>
</table>

---

| Identificador | Requisito | Priorização |
|---------------|-----------|-----------------|
| RF06 | O software deve alertar quando a antena precisa de calibração. | Must |
| RF07 | O usuário deve poder selecionar entre dark mode e light mode. | Would |
| RF08 | O usuário deve ser capaz de interromper uma rotina. | Must |
| RF09 | O software deve calcular e enviar os ângulos de posicionamento da antena. | Must |
| RF10 | O software deve ser capaz de salvar os dados recebidos pelo satélite monitorado. | Must |
| RF11 | O software deve mostrar a evolução do posicionamento da antena. | Could |
| RF12 | O usuário deve ser capaz de salvar rotinas de posicionamento. | Should |
| RF13 | O software deve mostrar a última vez que a antena foi calibrada. | Must |
| RF14 | O software deve bloquear rotinas que ultrapassem limites físicos ou de velocidade da antena. | Must |
| RF15 | O administrador deve poder gerenciar (cadastrar/controlar) usuários na plataforma. | Must |
| RF16 | O software deve ter um perfil de usuário normal (Operador). | Must |
| RF17 | O usuário deve poder selecionar entre os idiomas português e inglês. | Could |
| RF18 | O usuário deve poder exportar/baixar dados (gráficos de posicionamento e dados da medição). | Must |
| RF19 | O usuário deve poder verificar o status das antenas (ex: disponível, indisponível e ocupada). | Must |
| RN01 | O software deve ser acessível via web e compatível com os principais navegadores (ex: Chrome, Firefox). | Must |
| RN02 | Os fluxos para a realização de tarefas devem ser curtos. | Must |
| RN03 | O software deve seguir a identidade visual do laboratório. | Should |
| RN04 | O software deve ter uma boa documentação. | Must |


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