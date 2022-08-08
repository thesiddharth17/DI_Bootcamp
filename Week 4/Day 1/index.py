
#first_name = "Jayesh"
#last_name = "Budhu"
#print(first_name +" " + last_name)


#For example,  
#my_name = "Frank"  this line creates a name variable type: string 
#print("My name is {}".format(my_name))

# cars = 100 #creating a variable type integer named cars
# space_in_a_car = 4.0 #name = space in car type float
# drivers = 30 #drivers init
# passengers = 90 #calculating cars not driven
# cars_not_driven = cars - drivers #doing a substraction of 2 integers and storing the result in variable cars_not_driven(integer)
# cars_driven = drivers # assigning 
# carpool_capacity = cars_driven * space_in_a_car
# average_passengers_per_car = passengers / cars_driven


# print("There are", cars, "cars available.")
# print("There are only", drivers, "drivers available.")
# print("There will be", cars_not_driven, "empty cars today.")
# print("We can transport", carpool_capacity, "people today.")
# print("We have", passengers, "to carpool today.")
# print("We need to put about", average_passengers_per_car,"in each car.")


number = input('add a number')
fizzbuzz = int(number)
if fizzbuzz % 3 == 0 and fizzbuzz % 5 == 0:
    print("fizzbuzz")
        
elif fizzbuzz % 3 == 0:
    print("fizz")
        
elif fizzbuzz % 5 == 0:
    print("buzz")
        




