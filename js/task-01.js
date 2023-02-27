const allNavCategoryEl = document.querySelectorAll('.item');

console.log('Number of categories: ', allNavCategoryEl.length);

allNavCategoryEl.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});

