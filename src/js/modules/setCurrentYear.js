const setCurrentYear = () => {
  const currentYear = document.getElementById('currentYear');

  if(currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
  
};

export default setCurrentYear;