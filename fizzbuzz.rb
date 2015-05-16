# "Let's play a game" said Jigsaw...
# First, the variables. 
num = 1
play_limit = 100
# Now, the main 'while' loop.
while num <= play_limit
	# Initialize the string to be printed.
	string = ""
	# Remake the string...
	if (num % 3 == 0) || (num % 5 == 0)
		# ... with either "Fizz" or "Buzz" or "FizzBuzz".
		if num % 3 == 0
			# Fizz!
			string << "Fizz"
		end
		if num % 5 == 0
			# Buzz!
			string << "Buzz"
		end
	else
		# ... with just the number.
		string = num.to_s
	end
	# Add a comma and a space for cleanliness. 
	string << ", " if num != play_limit
	# Print the result.
	print string
	# Increment the 'while' loop variable.
	num += 1
end
# Done! Add some blank lines for cleanliness. 
print "\n\n"