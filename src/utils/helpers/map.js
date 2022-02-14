//  takes times of iterations
//  and callback function
//  return new arry of imgs
export function map( len, func ) {
    let arr = [];

    for(let i = 0; i < len; i++){
        const ref = `/assets/imgs/gallery/${i+1}.png`;
        arr.push(func(ref, i))
    }

    return arr;
}