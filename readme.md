# Menu Hambúrguer Acessível

Este projeto consiste em criar um menu responsivo e especialmente desenvolvido para atender as necessidades de  ferramentas de acessibilidade.

## Tecnologias utilizadas

- HTML
- CSS
- Javascript

### Detalhes

Este menu hamburguer, é diferente, porque está totalmente acessível para os leitores de tela que dão suporte à pessoas com deficiencia visual. O que torna isso possível, é a utilização dos atributos de acessibilidade: **aria-label, aria-controls, aria-expanded e aria-hidden**. Também, será possível navegar apenas com o teclado. 

O ícone do botão (aberto ou fechado) foi estilizado de acordo seletor CSS, para cada propriedade booleana, do atributo aria-expanded.

```CSS
.hamburguer-button[aria-expanded="false"] .icon::before{
  content: '\2630';
}

.hamburguer-button[aria-expanded="true"] .icon::before{
  content: '\2715';
}
```
No Javascript, altero os atributos de acessibilidade e as classes para mostrar e esconder o menu. 

O mais interessante pra mim, foi método ```window.matchMedia()``` para detectar mudanças no tamanho da tela e ajustar dinamicamente o layout do meu projeto. Ele me permitiu criar respostas específicas para diferentes tamanhos de tela.
