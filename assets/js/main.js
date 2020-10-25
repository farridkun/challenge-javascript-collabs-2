/*const handleOnClick = () => {
    const firstName = "Binar"
    const lastName = "Academy"
    const fullName = `${firstName} ${lastName}`

    document.querySelector("#hasil").innerText = fullName
}

const getFirstName = () => {
    setTimeout(()=> {
       callback("Binar")
    }, 3000)
}

const getLastName = () => {
    setTimeout(()=> {
        panggilLagi("Academy")
    }, 3000)
}

const handleOnClick = () => {
    console.log("Clicked...")
    getFirstName(response => {
        getLastName(result => {
            console.log(result)
            const firstName = getFirstName()
            const lastName = getLastName ()
            const fullName = `${firstName} ${lastName}`
    
            document.querySelector{"#hasil"}.innerText = fullName
        })    
    }) 
} */

// const getFirstName = () => {
//     const promise = new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             return (true) ?
//                 resolve("Binar") : reject(Error("Gagal"))
//         }, 3000);
//     });
//     return promise
// };

// const getLastName = (first) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return (true) ?
//                 resolve(`${first} Academy`) : reject(Error("Gagal"))
//         }, 3000)
//     })
// }

/*const handleOnClick = () => {
    console.log("Clicked...")
    getFirstName()
        .then(hasil => getLastName(hasil))
        .then(hasil2 => {
            document.querySelector("#hasil").innerText = hasil2
        })
        .catch(error => console.log(error))
} */

// const handleOnClick = async () => {
//     console.log("Clicked....")
//     const firstName = await getFirstName();
//     const lastName = await getLastName();
//     const fullName = `${firstName} ${lastName}`

//     document.querySelector("#hasil").innerText = fullName
// }

// const getUser = (id) => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if (!id) {
//                 reject(Error("Invalid ID"))
//             }

//             let response;
//             if (id > 10) {
//                 resolve{
//                     response = {
//                         success: false,
//                         id: id,
//                         message: "User Not Found!"
//                     }
//                 }

//             } else {
//                 resolve{
//                     response = {
//                         success: true,
//                         id: id,
//                         message: "User Found"
//                     }
//                 }
//             }
//         }, 2000)
//     })
// }

//     const promiseChain = () => {
//         console.log("Clicked...")
//         getUser(11)
//         .then(hasil => document.querySelector('#hasil12'),innerText = hasil.message)
//         //.then(hasil) => console.log(hasil))
//         .catch(error => console.log(error))
//     }

//anyar(yg baru)
const handleOnClick = () => {
  promiseChain();
};
const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject(Error('Invalid ID'));
      }
      let response;
      if (id > 10) {
        resolve(
          (response = {
            success: false,
            id: id,
            message: 'User Not Found!'
          })
        );
      } else {
        resolve(
          (response = {
            success: true,
            id: id,
            message: 'User Found'
          })
        );
      }
    }, 2000);
  });
};
const promiseChain = () => {
  console.log('Clicked...');
  getUser(11)
    .then((res) => {
      console.log(res);
      return getUser(10);
    })
    .then((res) => {
      console.log(res);
      return getUser(9);
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
};
const janjiSemua = Promise.all([
  getUser(3), // 1
  getUser(4), // 2
  getUser(10), // 3
  getUser(11), // 4
  getUser(12) // 5
])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
