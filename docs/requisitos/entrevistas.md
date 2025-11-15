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

A entrevista foi realizada com dois stakeholders. Abaixo será apresentada as anotações referentes as suas respostas para as respectivas perguntas previamente definidas e os requisitos elicitados:

### Entrevistas

#### Abertura

Foi apresentada a proposta da entrevista ao stakeholder e solicitada sua permissão para a realização de anotações. Os dois entrevistados consederam a permissão.

#### Contexto e motivação

**1. Você pode me contar como é feito atualmente o posicionamento das antenas?**

**Considerações**: Existe um software criado anteriormente para o cálculo da interpolação da trajetória com base na potência recebida, porém o posicionamento da antena deve ser feito manualmente.

**2. Quais são as principais dificuldades que enfrentadas nesse processo?**

**Considerações**: É necessário ir até o local da antena e realizar seu posicionamento de forma manual, o que além de demandar muita mão de obra causa inconsistências no posicionamento.

**3. O que você espera melhorar ou resolver com um novo software?**

**Considerações**: Esperasse ter um apontamento automático das antenas com base em um satélite selecionado, além de captar os dados enviados pelo mesmo.

#### Funcionalidades principais

**4. O sistema deve calcular e enviar automaticamente os ângulos ideais da antena para determinado satélite?**

**Considerações**: Sim.

**5. Deve permitir inserção manual de coordenadas (latitude/longitude) e dados do satélite?**

**Considerações**: Sim.

**6. O sistema deve mostrar visualmente (mapa, bússola, gráfico 3D) o posicionamento da antena?**

**Considerações**: Sim, porém é secundário. A informação mais relevante seria a posição atual e a próxima posição da antena. Talvez por meio de um gráfico para possibilitar a observação da evolução do posicionamento da antena, futuramente podendo ser complementado com uma gravação em tempo real da antena.

**7. Deve permitir salvar configurações de satélites/antenas para uso futuro?**

**Considerações**: Sim, para evitar retrabalho.

**8. Há necessidade de logs de operação (quem moveu, quando, para onde, falhas)?**

**Considerações**: Sim, a maior quantidade de feedbacks do sistema possível. Desde saber quando a antena finalizou o posicionamento até se ela está recebendo os dados do satélite.

**9. O software deve travar certos comandos para evitar colisões mecânicas ou movimentos não permitidos?**

**Considerações**: Deve haver travamento no final do curso, para comandos que passem de 180º de elevação, comandos que passem de 360º em azimute e que passem da velocidade máxima suportada pela antena.

#### Usuário e perfil

**10. Quem vai utilizar o sistema (técnicos, engenheiros, operadores, público leigo)?**

**Considerações**: Professores, alunos de pós graduação e alunos de graduação capacitados.

**11. Diferentes perfis de usuários precisam de níveis diferentes de acesso (admin, operador, visitante)?**

**Considerações**: É necessário um perfil de administrador que fará o controle dos usuários da plataforma.

**12. O software precisa ser multilíngue?**

**Considerações**: Sim, português e inglês.

#### Requisitos não funcionais 

**13. O sistema precisa rodar em quais plataformas?** (desktop, web, mobile, embarcado)

**Considerações**: Apenas em sistemas desktop pela web em um primeiro momento. O software deve ser acessível pelos principais navegadores.

**14. Há restrições de hardware?** (PCs, tablets, Raspberry Pi, equipamentos militares etc.)

**Considerações**: Não.

**15. Qual é o nível de precisão necessário no cálculo do posicionamento?**

**Considerações**: 0.5º.

**16. Existem requisitos de segurança (ex: dados criptografados, acesso restrito)?**

**Considerações**: Não.

**17. Alguma certificação ou norma precisa ser atendida (ex: telecom, defesa, aviação)?**

**Considerações**: Não.

#### Usabilidade e interface

**18. Como você imagina a interface ideal (mapas, indicadores numéricos, gráficos em tempo real)?**

**Considerações**: Fluxos pequenos e intuitivos possibilitando a realização de tarefas em poucos clicks. Possibilidade de gerenciamento de multiplas janelas, uma para cada antena. Possibilidade de verificação das condições climáticas em tempo real. Feedback visual do status atual da antena. Persolização da rotina de posicionamento, como, por exemplo, a quantidade de pontos da interpolação. Interface amigável com as cores do laboratório.

**Qual o nível de detalhe esperado no feedback do sistema (somente ângulos, ou também métricas de intensidade do sinal)?**

**Considerações**: Feedbacks de conexão, posicionamento, locking, potência do sinal, satélite selecionado e sua frequência, tempo de recebimento dos dados e última vez que foi calibrado. 

**Precisa gerar relatórios ou exportar dados (CSV, PDF)?**

**Considerações**: Sim, os dados no momento da medição e os gráficos de posicionamento.

**Você gostaria de visualizar em tempo real o posicionamento atual da antena (dashboard, gauge, gráfico)?**

**Considerações**: Sim, mas não é crucial para a primeira versão.

**O sistema deve exibir métricas do sinal captado para auxiliar no ajuste fino (ex.: intensidade, qualidade do sinal)?**

**Considerações**: Sim, gráficos de frequência x tempo e de potência do sinal.

#### Expectativas e futuro

**Quais seriam as funcionalidades “indispensáveis” para a primeira versão?**

**Considerações**: Comunicação com o hardware de forma a realizar o apontamento das antenas de forma correta, mesmo que seja para um ponto fixo (sem acompanhar o satélite), e o armazenamento dos dados recebidos dos satélites monitorados.  

**E quais seriam “desejáveis”, mas que podem ficar para versões futuras?**

**Considerações**: Possibilitar a antena seguir a trajetória do satélite. Gráficos para visualizar o progresso do posicionamento. Comunicação com apis externas. Geração de relatórios sobre o posicionamento e logs do sistema.

**Você tem exemplos de softwares semelhantes que já usou e que servem de referência?**

**Considerações**: Não, apenas o software desenvolvido para o cálculo de trajetória citado anteriormente.

**Há alguma limitação de tempo ou orçamento que impacte no desenvolvimento do sistema?**

**Considerações**: A primeira versão deve ser entregue até julho de 2026 e o orçamento atual é de R$ 70.000,00.

#### Encerramento

Agradecimentos e observações:

**Considerações**: Foi citado que o software deve ter uma boa documentação tendo em vista que os próprios integrantes do laboratório seram responsáveis pela sua manutenção.

### Elicitação

A partir das considerações realizadas durante as entrevistas os requisitos abaixo foram elicitados. Eles foram classificados em funcionais (RF) e não funcionais (NF):

|  Indentificador  | Requisito                             | Tipo                     |
| -----------------|---------------------------------------| ------------------------ |
|  EN01            | O software precisará realizar o cálculo da trajetória da antena.          | RF |
|  EN02            | O software deve ser capaz de listar os satélites disponíveis.          | RF |
|  EN03            | O software deve ser capaz de salvar os dados recebidos pelo satélite selecionado.          | RF |
|  EN04            | O software deve permitir a inserção dos dados de posicionamento manualmente pelo usuário.          | RF |
|  EN05            | O software deve mostrar a evolução do posicionamento das antenas.          | RF |
|  EN06            | O usuário deve ser capaz de salvar rotinas.          | RF |
|  EN07            | O software deve mostrar a última pessoa que moveu a antena.          | RF |
|  EN08            | O software deve mostrar a última vez que a antena foi calibrada.          | RF |
|  EN09            | O software deve mostrar qual foi a última rotina realizada pela antena.          | RF |
|  EN010            | O software deve mostrar se a antena está apresentando falhas no posicionamento.          | RF |
|  EN011            | O software deve bloquear rotinas que tenham uma configuração de elevação que passe de 180º.         | RF |
|  EN012           | O software deve bloquear rotinas que tenham uma configuração de azimute que passe de 360º.         | RF |
|  EN013            | O software deve ter um perfil de administrador.         | RF |
|  EN014            | O software deve ter um perfil de usuário normal.         | RF |
|  EN015            | O usuário deve poder escolher entre inglês e português.         | RF |
|  EN016            | O software deve rodar na web.         | NF |
|  EN017            | O software deve rodar nos principais navegadores.         | NF |
|  EN018            | O cálculo de posicionamento tem que ter um erro de no máximo 0,5º.         | NF |
|  EN019            | Os fluxos para a realização de tarefas devem ser curtos.         | NF |
|  EN020            | O usuário deve poder verificar a situação atual do clima onde as antenas estão localizadas.        | RF |
|  EN021            | O usuário deve poder abrir multiplas janelas, uma para cada antena.         | RF |
|  EN022            | O usuário deve poder verificar o status da antena.         | RF |
|  EN023            | O software deve seguir a identidade visual do laboratório.         | NF |
|  EN024            | O software deve mostrar a potência do sinal recebido.         | RF |
|  EN025            | O software deve mostrar a frequência do sinal recebido.         | RF |
|  EN026            | O usuário deve poder exportar os dados do status da antena no momento da medição.         | RF |
|  EN027            | O software deve mostrar o posicionamento da antena em tempo real.         | RF |
|  EN028            | O software deve ter uma boa documentação.         | NF |
|  EN029            | O software deve ser desenvolvido seguindo boas práticas de programação.         | NF |
|  EN030            | O software deve ser desenvolvido utilizando tecnologias com boas curvas de aprendizagem.         | NF |








## Referências

[1] VAZQUEZ, Carlos Eduardo; SIMÕES, Guilherme Siqueira. Engenharia de requisitos: software orientado ao negócio. Rio de Janeiro: Brasport , 2016.

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
            <td>14/11</td>
            <td>1.0</td>
            <td>Primeira versão finalizada</td>
            <td><a href="https://github.com/ccarlaa">Carla Clementino</a></td>
    </table>
</div>