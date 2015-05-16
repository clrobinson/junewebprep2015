def non_duplicated_values(values)
  return values.delete_if { |val| values.count(val) >= 2}
end