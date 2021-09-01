export const dateFormat=(value)=>{
    function convertDate(inputFormat) {
      function pad(s) { return (s < 10) ? '0' + s : s; }
      const c = new Date(inputFormat)
      return [pad(c.getDate()), pad(c.getMonth()+1), c.getFullYear()].join('/')
    }
      return convertDate(value)
  }
