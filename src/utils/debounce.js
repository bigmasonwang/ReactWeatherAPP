const debounce = (fn, ms)=>{
  let timer;
  return (...args)=>{
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args)
      timer = null;
    }, ms);
  }
}
export default debounce;