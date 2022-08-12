
# Exercise 1
# Exercise 2



# # Exercise 3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# basket.remove("Banana")
# print(basket)

# basket.remove("Blueberries")
# print(basket)

# basket.append("kiwi")
# print(basket)

# basket.insert(0,"Apples")
# print(basket)

# x =basket.count("Apples")
# print(x)

# basket.clear()
# print(basket)
# Exercise 4
#  A float is a number with decimal values
# Use the random.random() built it functions
# flist = []
# for i in range(1, 6):
#     flist.append(i)
#     if i == 5:
#         break
#     flist.append(flist[-1] + 0.5)
# print(flist)



# Exercise 5
# for i in range(1,21):
#     print(i)
# for i in range(1,21):
#     if i % 2 == 0:
#      print(i)



# Exercise 6
# name = ''
# while name != "jayesh":
#     name = input("Whats your name?")
# print("Good")



# Exercise 7

# fav_fruits = input('Write your favourite fruits with a space in between ').split(' ')
# fruit = input('Name any fruit: ')
# if fruit in fav_fruits:
#     print('You chose one of your favorite fruits! Enjoy')
# else:
#     print('You chose a new fruit. I hope you enjoy!')



# exercise8
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).
# topping = ''
# topping_list = []
# while topping == '' or topping != 'quit':
#     topping = input('Provide a pizza topping: ')
#        print('Will add this ' + topping )
#     if topping != 'quit':
#         topping_list.append(topping)
#     else:
#         print(f'Toppings: {" ".join(topping_list)}')
#         print(f'Total Price: {10 + (len(topping_list) * 2.5)}')



# exercise9
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
# Ask a family the age of each person who wants a ticket.
# Store the total cost of all the family’s tickets and print it out.
# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.
# ages = input('Enter the ages of your family members separated by a comma: ').split(',')
# total_price = 0
# for age in ages:
#     age = int(age)
#     if age >=3 and age < 12:
#         total_price += 10
#     elif age >= 12:
#         total_price += 15
# else:
#     print(total_price)
# names = ['John', 'Will', 'Paul']
# allowed = []
# for name in names:
#     age = int(input(f'Whats your age {name}? '))
#     if age < 16 or age > 21:
#         allowed.append(name)
# else:
#     print(allowed)