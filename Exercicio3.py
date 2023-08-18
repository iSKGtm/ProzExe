# -*- coding: utf-8 -*-
"""Atividade 3 Py.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/13iaCOMVP0znUEgmmM8Rs7euLLrPKGu4V

#Atividade
Faça uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:

1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar.

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado.
"""

def soma(x, y):
  return x + y

def subt(x, y):
  return x - y

def multi(x, y):
  return x * y

def divis(x, y):
  return x / y

print("1. Adição")
print("2. Subtração")
print("3. Multiplicação")
print("4. Divisão")
print("0. Sair")

while True:
  escolha = input("Selecione a operação acima: ")

  if escolha in ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'):
    try:
      if escolha == '0':
        print("Saindo da aplicação...")
        break
      elif escolha in('5', '6', '7', '8', '9'):
        print("Essa opção não existe, tente novamente.")
        continue
      num1 = float(input("Escolha o primeiro número: "))
      num2 = float(input("Escolha o segundo número: "))
    except ValueError:
      print("Essa opção não existe, tente novamente.")
    if escolha == '1':
      print(num1, "+", num2, "=", soma(num1, num2))

    elif escolha == '2':
      print(num1, "-", num2, "=", subt(num1, num2))

    elif escolha == '3':
      print(num1, "*", num2, "=", multi(num1, num2))

    elif escolha == '4':
      print(num1, "/", num2, "=", divis(num1, num2))
    continue