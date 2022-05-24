export default function () {
  const docStyle = getComputedStyle(document.documentElement);
  const primaryColor = docStyle.getPropertyValue('--primary-color');

  if (primaryColor != 'blue') {
    document.documentElement.style.setProperty('--primary-color', 'blue');
  } else {
    document.documentElement.style.setProperty('--primary-color', 'red');
  }
}
