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
        Toda movimentação da antena deve gerar um registro contendo:
            <li>usuário responsável,</li>
            <li>data e hora da operação,</li>
            <li>tipo de movimentação realizada.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            Registro mais recente prevalece
            <li>Sempre que o sistema precisar exibir o último operador, deve selecionar o registro com data mais recente.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            Impossibilidade de alterar logs
            <li>Nenhum usuário pode editar ou remover manualmente os registros de movimentação da antena.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            Logs devem ser persistentes
            <li>Os registros de movimentação devem ser armazenados de forma permanente e não podem ser perdidos após reinicialização do sistema.</li>
        </ul>
      </td>
    </tr>
    <!-- Critérios de aceitação -->
    <tr>
      <td rowspan="2">Critérios de aceitação</td>
      <td>
        <ul>
            <li><b>Dado</b> que acesso a tela de monitoramento da antena.</li>
            <li><b>Quando</b> o sistema carregar as informações</li>
            <li><b>Então</b> deve ser exibido o nome do último usuário que realizou o movimento.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
            <li>Dado que a antena ainda não teve movimentações.</li>
            <li>Quando o sistema procurar pelo operador</li>
            <li>Então deve mostrar a mensagem “Nenhuma movimentação registrada”.</li>
        </ul>
      </td>
    </tr>
    <!-- Id do requisito -->
    <tr>
      <td>Critérios de aceitação</td>
      <td>Conteúdo B1</td>
    </tr>
  </tbody>
</table>


---

| Identificador | Requisito | Priorização |
|---------------|-----------|-----------------|
| RF01 | O software deve mostrar a última pessoa que moveu a antena (log de operação). | Could |
| RF02 | O software deve mostrar se a antena está apresentando falhas no posicionamento. | Should |
| RF03 | O usuário deve poder verificar a situação atual do clima onde as antenas estão localizadas. | Could |
| RF04 | O usuário deve poder realizar o login na plataforma. | Must |
| RF05 | O usuário deve poder redefinir sua senha. | Must |
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