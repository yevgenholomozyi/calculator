/*
  JS, as well as many other languages, stores numbers in the binary format but presents them as decimal(by default). 
  However, the precise number convertation from binary to decimal and vise versa is not always possible,
  thus, unxepected behavior occurs from time to time. This promblem can be solved with rounding.
  In my opinion rounding to 5 numbers after a dot is good enaugh for this project.
*/

const add = (a: number, b: number): number =>  +(a + b).toFixed(5);

export default add;
