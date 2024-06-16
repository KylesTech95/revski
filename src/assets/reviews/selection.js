// const selectionContainer = document.getElementById("selection-container");
const ratingContainer = document.getElementById("rating-container");
const ratingItem = document.querySelectorAll(".rating-item");
const selected = "current-selection";
const deselected = "not-selected";
// select container (indicate border with dotted lines)
const selectItem = (e) => {
  e.target.classList.remove(deselected);
  e.target.classList.add(selected);
  return [...ratingItem].map((x, i) =>
    x !== e.target ? deselectItem(x) : null
  );
};
// deselect container (remove dotted lines)
const deselectItem = (item) => {
  item.classList.remove(selected);
  item.classList.add(deselected);
};

// select each rating spot/placement
ratingItem.forEach((item, index) => {
  item.addEventListener("click", selectItem);
});
