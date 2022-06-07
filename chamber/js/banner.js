// banner js code
const bannerFunction = () => {
    const banner = document.getElementsByClassName('banner')[0]
    const date = new Date()
  
    if (date.getDay() == 1 || date.getDay() == 2) {
      banner.style.display = 'block'
      const bannerTag = document.getElementsByClassName('banner')[0]
  
      document
        .querySelector('.bannerClose')
        .addEventListener('click', function () {
          bannerTag.style.display = 'none'
        })
    } else {
      banner.style.display = 'none'
    }
  }
  bannerFunction()
  