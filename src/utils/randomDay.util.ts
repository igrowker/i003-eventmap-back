export const randomDay = (): string => {
    const today = new Date();
    
    //numero random de 1 a 6
    const randomDays = Math.floor(Math.random() * 6) + 1;
  
    //sumandolo a la fecha actual
    today.setDate(today.getDate() + randomDays);
  
    //formateando la fecha
    const year = today.getFullYear();
    //meses del 10 al 11
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }