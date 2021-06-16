
export const getWidth = () => {
    if(typeof window !== 'undefined'){
      return window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
    }
}