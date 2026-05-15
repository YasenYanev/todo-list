export function showForm(form, button) {
  form.style.display = "grid"

  if (button) {
    button.style.display = "none"
  }
}

export function hideForm(form, button) {
  form.reset()
  form.style.display = "none"

  if (button) {
    button.style.display = "block"
  }
}

export function getSelectedPriority() {
  const priorityButtons =
    document.getElementsByName("priority")

  for (const btn of priorityButtons) {
    if (btn.checked) return btn.value
  }

  return null
}