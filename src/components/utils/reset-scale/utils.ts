export const resetScale = (addClass = false) => {
  const classes = document.getElementsByTagName('body')[0].className.split(' ');
  const classesSet = new Set(classes);

  if (classes.includes('mobile-menu-open')) {
    classesSet.delete('mobile-menu-open');
    document.getElementsByTagName('body')[0].className = Array.from(classesSet).join(' ');
  } else if (addClass) {
    classesSet.add('mobile-menu-open');
    document.getElementsByTagName('body')[0].className = Array.from(classesSet).join(' ');
  }
}
