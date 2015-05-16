def length_finder(input_array)
  result = []
  input_array.collect { |item| result.push(item.length)}
  return result
end