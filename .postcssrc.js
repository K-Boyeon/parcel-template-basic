// ESM-브라우저의 방식
// CommonJS-nodejs 방식-bundler에서 변환하는 것들

// import autoprefixer from "autiprefixer"
// const autoprefixer = requier("autoprefixer");

// export {
//     plugins: [
//         autoprefixer
//     ]
// }
module.exports = {
    plugins: [ 
        requier("autoprefixer")
    ]
}