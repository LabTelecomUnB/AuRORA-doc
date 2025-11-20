# Introspecção

O presente artefato descreve a técnica de introspecção utilizada para a elicitação de requisitos so software AuRORA.

## Metodologia

O método de introspecção é uma técnica útil para o levantamento de requisitos, na qual os desenvolvedores imaginam como o software idealmente deveria se comportar.
Para sua realização, primeiramente foi listado os possíveis cenários de uso do software a ser desenvolvido e, em seguida, foi feita a elicitação dos requisitos necessários para a realização das tarefas previstas pelos cenários.
Embora a introspecção seja ágil e útil para estabelecer a base dos requisitos, reconhece-se sua limitação principal: o risco de viés de desenvolvedor. Uma funcionalidade considerada intuitiva pela equipe pode se mostrar desafiadora para os usuários finais. Por isso, os requisitos preliminares obtidos por introspecção foram obrigatoriamente complementados e validados por métodos externos de interação com o usuário, como entrevistas e formulários, garantindo a precisão e a usabilidade do produto final.

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

|  Identificador  | Requisito                             | Tipo                     |
| -----------------|---------------------------------------| ------------------------ |
|  IN01           | O usuário deve poder realizar o login na plataforma.          | RF |
|  IN02           | O administrador deve poder administrar os novos usuários na plataforma. | RF |
|  IN03           | O usuário deve poder redefinir sua senha. | RF |
|  IN04           | O usuário deve poder verificar o status das antenas (disponível, indisponível e ocupada). | RF |
|  IN05           | O usuário deve poder ver uma lista de todas as antenas. | RF |
|  IN06           | O usuário deve poder selecionar qual antena ele deseja utilizar. | RF |
|  IN07           | O usuário deve poder salvar e deletar rotinas. | RF |
|  IN8           | O usuário deve poder realizar rotinas de calibração. | RF |
|  IN9           | O usuário deve poder selecionar o satélite a ser rastreado. | RF |
|  IN10           | O software deve fazer o cálculo de posicionamento de acordo com os parâmetros selecionados pelo usuário. | RF |
|  IN11           | O software deve bloquear rotinas inválidas. | RF |
|  IN12           | O software deve mostrar a última vez que a antena foi calibrada. | RF |
|  IN13           | O software deve alertar quando a antena precisa de calibração. | RF |
|  IN14           | O software deve mostrar a evolução do posicionamento da antena. | RF |
|  IN15           | O software deve salvar os dados recebidos pelo satélite selecionado. | RF |
|  IN16           | O software deve alertar se a antena está recebendo os dados do satélite selecionado. | RF |
|  IN17           | O software deve dar a opção do usuário baixar os dados salvos. | RF |
|  IN18           | O banco deve limpar os dados coletados periodicamente. | RF |
|  IN19           | O software deve mostrar a trajetória do satélite. | RF |
|  IN20           | O usuário deve poder selecionar entre dark mode e light mode. | RF |
|  IN21           | O usuário deve poder selecionar entre inglês e português. | RF |
|  IN22           | O usuário deve ser capaz de interromper uma rotina. | RF |
|  IN23           | O administrador deve poder bloquear uma antena. | RF |
|  IN24           | O software deve ser compatível com o chrome. | NF |
|  IN25           | O software deve ser compatível com o firefox. | NF |

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
            <td>14/11</td>
            <td>1.0</td>
            <td>Primeira versão finalizada</td>
            <td><a href="https://github.com/ccarlaa">Carla Clementino</a></td>
    </table>
</div>