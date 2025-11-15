## Introspecção

## Metodologia

O método de introspecção é uma técnica útil para o levantamento de requisitos, na qual os desenvolvedores imaginam como o software idealmente deveria se comportar. Embora seja ágil, deve ser complementado por outros métodos, como os previamente especificados (entrevista e formulário), pois pode gerar falsas conclusões sobre a experiência do usuário. Por exemplo, uma funcionalidade considerada intuitiva pela equipe de desenvolvimento pode se mostrar desafiadora para os usuários finais[1].
Para sua realização, primeiramente foi listado os possíveis cenários de uso do software a ser desenvolvido e, em seguida, foi feita a elicitação dos requisitos necessários para a realização das tarefas previstas pelos cenários.

## Resultados 

### Cenários 

| Cenário                             | Observações                     |
| ------------------------------------| ------------------------ |
| Criar uma conta na plataforma       |  O usuário só poderá acessar a plataforma se o administrador cadastrá-lo. Para isso é necessário a criação de uma página para a adição de usuários para os administradores. | 
| Realizar o login na plataforma      |  É necessário a criação de uma página de login.    |
| Verificar o status das antenas      |  O usuário deve poder ver quais antenas estão ou não disponíveis.    |
| Escolher o satélite a ser rastreado      |  O usuário deve poder ver a lista de satélites disponíveis para receber dados.    |
| Realizar rotina de calibração      |  Deve ser possível configurar e realizar a rotina de calibração das antenas.   |
| Verificar se a antena está calibrada      |  Deve ser possível ver a última vez que a antena foi configurada.   |
| Ver trajetória da antena    |  O usuário deve poder ver se a antena está sendo corretamente posicionada.   |
| Baixar dados coletados do satélite      |  Deve ser possível baixar um arquivo com os dados coletados do satélite monitorado.    |
| Salvar rotinas de posicionamento      |  O usuário deve poder salvar rotinas de posicionamento das antenas para evitar retrabalhos.    |
| Bloquear rotinas de posicionamento indevidas      |  Rotinas fisicamente impossíveis devem ser bloqueadas.    |
| Selecionar antenas      |  O usuário deve poder selecionar quais antenas ele quer utilizar para realizar a rotina configurada.    |
| Ver trajetória do satélite      |  O usuário deve poder ver a trajeória do satélite.    |
| Personalizar a plataforma      |  O usuário deve poder personalizar a plataforma, como, por exemplo, dark mode e linguagem.    |
| Interromper rotina      |  O usuário deve poder interromper uma rotina.    |
| Bloquear antena      |  O administrador deve poder bloquear o uso de uma antena.    |
| Acessar o software pelo navegador      |  Os usuários devem poder acessar o software pelos principais navegadores.    |

<center>
    <figcaption>Figura 1 - Cenários da instrospecção. Fonte: Autor.</figcaption>
</center>

### Requisitos 

Os requisitos abaixo foram elicitados apartir dos cenários listados acima. Os requisitos foram classificados em funcionais (RF) e não funcionais (NF).

|  Indentificador  | Requisito                             | Tipo                     |
| -----------------|---------------------------------------| ------------------------ |
|  INT01           | O usuário deve poder realizar o login na plataforma.          | RF |
|  INT02           | O administrador deve cadastrar novos usuários na plataforma. | RF |
|  INT03           | O usuário deve poder redefinir sua senha. | RF |
|  INT04           | O usuário deve poder verificar o status das antenas (disponível, indisponível e ocupada). | RF |
|  INT05           | O usuário deve poder ver uma lista de todas as antenas. | RF |
|  INT07           | O usuário deve poder adicionar novas antenas. | RF |
|  INT08           | O usuário deve poder selecionar qual antena ele deseja utilizar. | RF |
|  INT09           | O usuário deve poder salvar rotinas. | RF |
|  INT10           | O usuário deve poder realizar rotinas de calibração. | RF |
|  INT11           | O usuário deve poder selecionar o satélite a ser rastreado. | RF |
|  INT12           | O usuário deve poder selecionar personalizar a rotina a ser realizada pela antena. | RF |
|  INT13           | O software deve fazer o cálculo de posicionamento de acordo com os parâmetros selecionados pelo usuário. | RF |
|  INT14           | O software deve bloquear rotinas invalidas. | RF |
|  INT15           | O software deve mostrar a última vez que a antena foi calibrada. | RF |
|  INT16           | O software deve alertar quando a antena precisa de calibração. | RF |
|  INT17           | O software deve mostrar a evolução do posicionamento da antena. | RF |
|  INT18           | O software deve salvar os dados recebidos pelo satélite selecionado. | RF |
|  INT19           | O software deve alertar se a antena está recendo os dados do satélite selecionado. | RF |
|  INT20           | O software deve dar a opção do usuário baixar os dados salvos. | RF |
|  INT21           | De tempos em tempos o bando deve limpar os dados coletados. | RF |
|  INT22           | De tempos em tempos o bando deve limpar os dados coletados. | RF |
|  INT23           | O software deve mostrar a trajetória do satélite. | RF |
|  INT24           | O usuário deve poder selecionar entre dark mode e light mode. | RF |
|  INT25           | O usuário deve poder selecionar entre inglês e português. | RF |
|  INT26           | O usuário deve ser capaz de interromper uma rotina. | RF |
|  INT27           | O administrador deve poder bloquear uma antena. | RF |
|  INT28           | O software deve ser compatível com o chrome. | NF |
|  INT29           | O software deve ser compatível com o firefox. | NF |


<center>
    <figcaption>Figura 2 - Requisitos da instrospecção. Fonte: Autor.</figcaption>
</center>

## Referência

[1] Goguen, J. A. & Linde, C. (1993). Techniques for Requirements Elicitation. In Proceedings, Requirements Engineering ’93 (IEEE Computer Society), pp. 152–164. 

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
            <td>31/10</td>
            <td>1.0</td>
            <td>Primeira versão finalizada</td>
            <td><a href="https://github.com/ccarlaa">Carla Clementino</a></td>
    </table>
</div>