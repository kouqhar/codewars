const findSingleton = (student_list) => {
  let grouped = {};
  student_list.forEach((list) => {
    if (grouped[list] === undefined) grouped[list] = 1;
    else grouped[list] += 1;
  });

  const noGroupIndex = Object.values(grouped).indexOf(1);
  const uniqueArr = [...new Set(student_list)].sort((a, b) => a - b)[
    noGroupIndex
  ];

  return uniqueArr;
};
