export function handleToggleProductSelect(id) {
  return {
    type: "TOGGLE_PRODUCT",
    payload: id,
  };
}
